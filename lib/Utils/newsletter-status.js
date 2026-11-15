import { proto } from '../../WAProto/index.js'
import { generateMessageIDV2 } from './generics.js'
import { generateWAMessageContent } from './messages.js'
import { isJidNewsletter } from '../WABinary/jid-utils.js'

const ACK_TIMEOUT_MS = 20000
const DEFAULT_TEXT_COLOR = '#9C27B0'

export const makeNewsletterStatusSender = (sock, config) => async (jid, content, options = {}) => {
    if (!isJidNewsletter(jid)) throw new TypeError('El destino debe ser un JID @newsletter')
    if (!content || typeof content !== 'object' || Array.isArray(content)) {
        throw new TypeError('El contenido debe ser un objeto')
    }
    const userJid = sock.authState?.creds?.me?.id
    if (!userJid) throw new TypeError('Not authenticated')

    const { ackTimeoutMs, backgroundColor, messageId: requestedId, ...messageOptions } = options
    const isTextOnly = typeof content.text === 'string' && !content.image && !content.video && !content.audio

    const message = await generateWAMessageContent(content, {
        logger: config?.logger,
        mediaCache: config?.mediaCache,
        options: config?.options,
        ...messageOptions,
        ...(isTextOnly ? { backgroundColor: backgroundColor || DEFAULT_TEXT_COLOR } : {}),
        jid,
        upload: sock.waUploadToServer
    })

    const id = requestedId || generateMessageIDV2(userJid)
    const plaintext = proto.Message.encode(message).finish()
    const node = {
        tag: 'status',
        attrs: { to: jid, id, type: 'text' },
        content: [{ tag: 'plaintext', attrs: {}, content: plaintext }]
    }

    const ackPromise = typeof sock.waitForMessage === 'function'
        ? sock.waitForMessage(id, ackTimeoutMs ?? ACK_TIMEOUT_MS).catch(() => undefined)
        : Promise.resolve(undefined)

    await sock.sendNode(node)

    const ack = await ackPromise
    if (ack?.attrs?.error) {
        throw new Error(`Newsletter status rechazado por el servidor (${ack.attrs.error})`)
    }

    return { key: { remoteJid: jid, fromMe: true, id }, message, ack }
}
