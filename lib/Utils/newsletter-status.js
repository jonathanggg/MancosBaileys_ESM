import { proto } from '../../WAProto/index.js'
import { encodeNewsletterMessage, generateMessageIDV2 } from './generics.js'
import { generateWAMessage, normalizeMessageContent } from './messages.js'
import { WAMessageStatus } from '../Types/Message.js'
import { isJidNewsletter } from '../WABinary/jid-utils.js'

const MEDIA_TYPES = new Set(['audio', 'gif', 'image', 'video'])
const ACK_TIMEOUT_MS = 20000
const SERVER_ID_TIMEOUT_MS = 8000

const isPresent = v => v !== undefined && v !== null && v !== ''

const getMediaType = message => {
    const content = normalizeMessageContent(message)
    if (content?.imageMessage) return 'image'
    if (content?.videoMessage) return content.videoMessage.gifPlayback ? 'gif' : 'video'
    if (content?.audioMessage) return 'audio'
    return undefined
}

const withNewsletterStatusAttribution = content => ({
    ...content,
    contextInfo: {
        statusAttributions: [{ type: proto.StatusAttribution.Type.NEWSLETTER_STATUS }],
        featureEligibilities: { canBeReshared: true },
        ...(content?.contextInfo || {})
    }
})

const buildStatusNode = ({ jid, message, messageId, mediaType, mediaHandle }) => {
    if (mediaType && !isPresent(mediaHandle)) {
        throw new TypeError('El status con media necesita el handle que devuelve la subida a newsletter')
    }
    const attrs = { to: jid, id: messageId, type: mediaType ? 'media' : 'text' }
    if (mediaType) attrs.media_id = String(mediaHandle)

    return {
        tag: 'status',
        attrs,
        content: [{
            tag: 'plaintext',
            attrs: mediaType ? { mediatype: mediaType } : {},
            content: encodeNewsletterMessage(message)
        }]
    }
}

const readInt = (attrs, key) => {
    if (!isPresent(attrs?.[key])) return undefined
    const n = Number.parseInt(String(attrs[key]), 10)
    return Number.isFinite(n) ? n : undefined
}

const waitForServerId = (sock, { jid, messageId, timeoutMs }) => {
    let settle
    const promise = new Promise(resolve => {
        let done = false
        const finish = value => {
            if (done) return
            done = true
            clearTimeout(timer)
            sock.ws.off('CB:status', onStatus)
            resolve(value)
        }
        const onStatus = node => {
            if (node?.tag !== 'status') return
            const a = node.attrs || {}
            if (isPresent(a.from) && a.from !== jid) return
            if (isPresent(a.id) && a.id !== messageId) return
            const serverId = readInt(a, 'server_id')
            if (serverId !== undefined) finish({ serverId, node })
        }
        const timer = setTimeout(() => finish(undefined), timeoutMs)
        sock.ws.on('CB:status', onStatus)
        settle = finish
    })
    promise.cancel = () => settle(undefined)
    return promise
}

const checkAck = (node, { jid, messageId }) => {
    if (!node) throw new Error(`Newsletter status: el servidor no respondió el ACK de ${messageId}`)
    console.log('[ns] ack', JSON.stringify(node?.attrs || {}), 'tag=', node?.tag)
    if (node.tag !== 'ack') throw new Error(`Newsletter status: se esperaba <ack> y llegó <${node.tag}> attrs=${JSON.stringify(node.attrs || {})}`)
    const a = node.attrs || {}
    if (isPresent(a.id) && a.id !== messageId) throw new Error('Newsletter status: id del ack no coincide')
    if (isPresent(a.from) && a.from !== jid) throw new Error('Newsletter status: from del ack no coincide')
    if (isPresent(a.error)) {
        const hint = ['401', '403', 'not-authorized', 'forbidden'].includes(String(a.error))
            ? ' (el canal quizá no tiene permiso de publicar estados, o el bot no es admin)'
            : ''
        throw new Error(`Newsletter status rechazado por el servidor (${a.error})${hint} attrs=${JSON.stringify(a)}`)
    }
    return { from: a.from, id: a.id, t: readInt(a, 't'), serverId: readInt(a, 'server_id'), node }
}

export const makeNewsletterStatusSender = (sock, config) => async (jid, content, options = {}) => {
    if (!isJidNewsletter(jid)) throw new TypeError('El destino debe ser un JID @newsletter')
    if (!content || typeof content !== 'object' || Array.isArray(content)) {
        throw new TypeError('El contenido debe ser un objeto')
    }
    const userJid = sock.authState?.creds?.me?.id
    if (!userJid) throw new TypeError('Not authenticated')

    const { ackTimeoutMs, serverIdTimeoutMs, messageId: requestedId, ...messageOptions } = options

    let uploadedHandle
    const upload = async (...args) => {
        const result = await sock.waUploadToServer(...args)
        console.log('[newsletter-status] upload args:', args[1], 'result:', result)
        uploadedHandle = result?.handle ?? result?.media_id ?? result?.mediaId ?? result?.fbid ?? uploadedHandle
        return result
    }

    const fullMsg = await generateWAMessage(jid, withNewsletterStatusAttribution(content), {
        logger: config.logger,
        userJid,
        upload,
        mediaCache: config.mediaCache,
        options: config.options,
        ...messageOptions,
        messageId: requestedId || generateMessageIDV2(userJid)
    })

    const normalized = normalizeMessageContent(fullMsg.message)
    const mediaType = getMediaType(fullMsg.message)
    if (!mediaType && (normalized?.documentMessage || normalized?.stickerMessage)) {
        throw new TypeError('El status de canal solo soporta texto, imagen, video, gif y audio')
    }
    if (mediaType && !MEDIA_TYPES.has(mediaType)) throw new TypeError(`Tipo no soportado: ${mediaType}`)

    const node = buildStatusNode({
        jid,
        message: fullMsg.message,
        messageId: fullMsg.key.id,
        mediaType,
        mediaHandle: uploadedHandle
    })

    console.log('[ns] node', JSON.stringify(node, (k, v) => ((v && v.type === 'Buffer') || v instanceof Uint8Array) ? '<bytes>' : v))

    const echo = waitForServerId(sock, {
        jid,
        messageId: fullMsg.key.id,
        timeoutMs: serverIdTimeoutMs ?? SERVER_ID_TIMEOUT_MS
    })

    let ack
    try {
        const responsePromise = sock.waitForMessage(fullMsg.key.id, ackTimeoutMs ?? ACK_TIMEOUT_MS)
        await sock.sendNode(node)
        ack = checkAck(await responsePromise, { jid, messageId: fullMsg.key.id })
    } catch (e) {
        echo.cancel()
        throw e
    }

    const delivered = await echo
    fullMsg.status = WAMessageStatus.SERVER_ACK
    fullMsg.newsletterStatusServerId = ack.serverId ?? delivered?.serverId
    fullMsg.newsletterStatusAck = ack
    return fullMsg
}
