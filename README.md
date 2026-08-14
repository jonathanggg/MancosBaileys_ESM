#🌱 Mancos Baileys ESM ☄️
Logo
<p align="center">
Baileys v7 mejorado con correcciones para la subida de multimedia en canales (newsletters), además de soporte para mensajes interactivos, álbumes y tipos de mensajes adicionales.



<a href="[https://www.npmjs.com/package/mancos-baileys-esm](https://www.npmjs.com/package/mancos-baileys-esm)">
<img src="[https://img.shields.io/npm/v/mancos-baileys-esm?style=for-the-badge&logo=npm](https://img.shields.io/npm/v/mancos-baileys-esm?style=for-the-badge&logo=npm)"/>
</a>
<a href="[https://www.npmjs.com/package/mancos-baileys-esm](https://www.npmjs.com/package/mancos-baileys-esm)">
<img src="[https://img.shields.io/npm/dm/mancos-baileys-esm?style=for-the-badge&logo=npm](https://img.shields.io/npm/dm/mancos-baileys-esm?style=for-the-badge&logo=npm)"/>
</a>
<a href="#">
<img src="[https://img.shields.io/github/stars/mancos/baileys-esm?style=for-the-badge&logo=github](https://img.shields.io/github/stars/mancos/baileys-esm?style=for-the-badge&logo=github)"/>
</a>
<a href="LICENSE">
<img src="[https://img.shields.io/badge/license-MIT-blue?style=for-the-badge](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)"/>
</a>
<a href="[https://nodejs.org](https://nodejs.org)">
<img src="[https://img.shields.io/badge/node-%3E%3D20-339933?logo=node.js&labelColor=green&logoColor=white&style=for-the-badge](https://img.shields.io/badge/node-%3E%3D20-339933?logo=node.js&labelColor=green&logoColor=white&style=for-the-badge)"/>
</a>
<a href="#">
<img src="[https://img.shields.io/badge/ESM-only?logo=javascript&labelColor=yellow&logoColor=black&style=for-the-badge](https://img.shields.io/badge/ESM-only?logo=javascript&labelColor=yellow&logoColor=black&style=for-the-badge)"/>
</a>
</p>
✨ Puntos Destacados
Este fork está diseñado para uso en producción con un enfoque en la claridad y la seguridad:
 * 🚫 Sin ofuscación. Fácil de leer y auditar.
 * 🚫 Sin comportamiento de auto-seguimiento de canales (newsletters).
> [!NOTE]
> 📄 Este proyecto se mantiene con un alcance limitado y no pretende reemplazar al Baileys original.
> 
📋 Tabla de Contenidos
 * 📋 Tabla de Contenidos
 * ✨ Puntos Destacados
 * 🛠️ Ajustes Internos
 * 📨 Manejo de Mensajes y Compatibilidad
 * 🧩 Opciones Adicionales de Mensaje
 * 📥 Instalación
   * 🧩 Importación (ESM & CJS)
 * 🌐 Conectar a WhatsApp (Paso Rápido)
   * 🔐 Estado de Autenticación (Auth State)
 * 🗄️ Implementando Data Store
 * 🪪 Explicación de los IDs de WhatsApp
 * ✉️ Enviando Mensajes
   * 🔠 Texto
   * 🔔 Mención
   * 😁 Reacción
   * 📌 Fijar Mensaje
   * 🔖 Mantener Chat
   * ➡️ Reenviar Mensaje
   * 👤 Contacto
   * 📍 Ubicación
   * 🗓️ Evento
   * 👥 Invitación a Grupo
   * 🛍️ Producto
   * 📊 Encuesta
   * 💭 Respuesta de Botón
   * ✨ Respuesta Enriquecida
   * 🧾 Mensaje con Bloque de Código
   * 🌏 Mensaje con Entidades en Línea
   * 📋 Mensaje con Tabla
   * 🎞️ Mención de Estado
 * 📁 Enviando Mensajes Multimedia
   * 🖼️ Imagen
   * 🎥 Video
   * 📃 Sticker
   * 💽 Audio
   * 🗂️ Documento
   * 🖼️ Álbum (Imagen y Video)
   * 📦 Paquete de Stickers
 * 👉🏻 Enviando Mensajes Interactivos
   * 🔘 Botones
   * 📋 Lista
   * 🗄️ Interactivo
   * 🫙 Plantilla Hidratada (Hydrated Template)
 * 💳 Enviando Mensajes de Pago
   * ➕ Invitar al Pago
   * 🧾 Factura (Invoice)
   * 🛍️ Pedido (Order)
   * 💳 Solicitar Pago
 * 👁️ Otras Opciones de Mensaje
   * 🤖 Icono de IA
   * 🕒 Efímero (Temporal)
   * 📰 Respuesta de Anuncio Externo (External Ad Reply)
   * 🧑‍🧑‍🧒 Estado de Grupo
   * 🐱 Sticker Lottie
   * 🧩 Raw (Puro)
   * 🏷️ Etiqueta de Servicio Meta Seguro
   * 📑 Spoiler
   * 👁️ Ver Una Vez
   * 👁️ Ver Una Vez V2
   * 👁️ Ver Una Vez V2 Extensión
 * ♻️ Modificar Mensajes
   * 🗑️ Borrar Mensajes
   * ✏️ Editar Mensajes
 * 🧰 Contenidos Adicionales
   * 🏷️ Encontrar ID de Usuario (JID|PN/LID)
   * 🔑 Solicitar Código de Emparejamiento Personalizado
   * 🖼️ Procesamiento de Imágenes
   * 📣 Gestión de Canales (Newsletters)
   * 👥 Gestión de Grupos
   * 👥 Gestión de Comunidades
   * 👤 Gestión de Perfil
   * 🛒 Gestión de Negocios
   * 🔐 Gestión de Privacidad
   * 📡 Eventos
 * 📣 Créditos
🛠️ Ajustes Internos
 * 🖼️ Se solucionó un problema por el cual los archivos multimedia no se podían enviar a canales (newsletters) debido a un error de origen.
 * 📁 Se reintrodujo makeInMemoryStore con una adaptación ESM mínima y pequeños ajustes para Baileys v7.
 * 📦 Se cambió la ejecución de FFmpeg de exec a spawn para un manejo de procesos más seguro.
 * 🗃️ Se añadió @napi-rs/image como backend de procesamiento de imágenes compatible en getImageProcessingLibrary(), ofreciendo un equilibrio entre rendimiento y compatibilidad.
📨 Manejo de Mensajes y Compatibilidad
 * 📩 Soporte ampliado de mensajes para:
   * 🖼️ Mensaje de Álbum
   * 👤 Mensaje de Estado de Grupo
   * 👉🏻 Mensaje Interactivo (botones, listas, native flows, plantillas, carruseles).
   * 🎞️ Mensaje de Mención de Estado
   * 📦 Mensaje de Paquete de Stickers
   * ✨ Mensaje de Respuesta Enriquecida [NUEVO]
   * 🧾 Mensaje con Bloques de Código [NUEVO]
   * 🌏 Mensaje con Entidades en Línea [NUEVO]
   * 📋 Mensaje con Tabla [NUEVO]
   * 💳 Mensaje relacionado con pagos (solicitudes de pago, invitaciones, pedidos, facturas).
 * 📰 Se simplificó el envío de mensajes con miniaturas de anuncios usando externalAdReply, sin necesidad de crear un contextInfo manualmente.
 * 💭 Soporte añadido para citar mensajes dentro de los canales (newsletters). [NUEVO]
 * 🎀 Soporte añadido para icono de botón personalizado. [NUEVO]
🧩 Opciones Adicionales de Mensaje
 * 👁️ Banderas booleanas opcionales añadidas para el manejo de mensajes:
   * 🤖 ai - Icono de IA en el mensaje
   * 📣 mentionAll - Mencionar a todos los participantes del grupo sin requerir sus JIDs en mentions o mentionedJid [NUEVO]
   * 🔧 ephemeral, groupStatus, isLottie, spoiler, viewOnce, viewOnceV2, viewOnceV2Extension, interactiveAsTemplate - Envoltorios de mensajes
   * 🔒 secureMetaServiceLabel - Etiqueta de servicio meta seguro en el mensaje [NUEVO]
   * 📄 raw - Construye tu mensaje manualmente (NO USAR PARA EXPLOTACIÓN)
📥 Instalación
 * 📄 Vía package.json
# NPM
"dependencies": {
   "mancos-baileys-esm": "latest"
}

# GitHub
"dependencies": {
   "mancos-baileys-esm": "github:mancos/baileys-esm"
}

 * ⌨️ Vía terminal
# NPM
npm i mancos-baileys-esm@latest

# GitHub
npm i github:mancos/baileys-esm

🧩 Importación (ESM & CJS)
// --- ESM
import { makeWASocket } from 'mancos-baileys-esm'

// --- CJS (probado y funcionando en Node.js 20 ✅)
const { makeWASocket } = require('mancos-baileys-esm')

🌐 Conectar a WhatsApp (Paso Rápido)
import { makeWASocket, delay, DisconnectReason, useMultiFileAuthState } from 'mancos-baileys-esm'
import { Boom } from '@hapi/boom'
import pino from 'pino'

// --- Conectar con código de emparejamiento
const myPhoneNumber = '6288888888888'

const logger = pino({ level: 'silent' })

const connectToWhatsApp = async () => {
   const { state, saveCreds } = await useMultiFileAuthState('session')
    
   const sock = makeWASocket({
      logger,
      auth: state
   })

   sock.ev.on('creds.update', saveCreds)

   sock.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect } = update
      if (connection === 'connecting' && !sock.authState.creds.registered) {
         await delay(1500)
         const code = await sock.requestPairingCode(myPhoneNumber)
         console.log('🔗 Código de emparejamiento', ':', code)
      }
      else if (connection === 'close') {
         const shouldReconnect = new Boom(connection?.lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut
         console.log('⚠️ Conexión cerrada porque', lastDisconnect.error, ', reconectando ', shouldReconnect)
         if (shouldReconnect) {
            connectToWhatsApp()
         }
      }
      else if (connection === 'open') {
         console.log('✅ Conectado exitosamente a WhatsApp')
      }
   })

   sock.ev.on('messages.upsert', async ({ messages }) => {
      for (const message of messages) {
         if (!message.message) continue

         console.log('🔔 Nuevo mensaje recibido', ':', message)
         await sock.sendMessage(message.key.remoteJid, {
            text: '👋🏻 Hola mundo'
         })
      }
   })
}

connectToWhatsApp()

🔐 Estado de Autenticación (Auth State)
> [!NOTE]
> Puedes utilizar los experimentales useSingleFileAuthState y useSqliteAuthState como alternativa a useMultiFileAuthState. Sin embargo, useSingleFileAuthState ya incluye un mecanismo de caché interno, por lo que no es necesario envolver state.keys con makeCacheableSignalKeyStore.
> 
🗄️ Implementando Data Store
> [!CAUTION]
> Recomiendo encarecidamente construir tu propio data store, ya que mantener un historial de chat completo en memoria puede provocar un uso excesivo de RAM.
> 
import { makeWASocket, makeInMemoryStore, delay, DisconnectReason, useMultiFileAuthState } from 'mancos-baileys-esm'
import { Boom } from '@hapi/boom'
import pino from 'pino'

const myPhoneNumber = '6288888888888'

// --- Crear la ruta de tu store
const storePath = './store.json'

const logger = pino({ level: 'silent' })

const connectToWhatsApp = async () => {
   const { state, saveCreds } = await useMultiFileAuthState('session')
    
   const sock = makeWASocket({
      logger,
      auth: state
   })

   const store = makeInMemoryStore({
      logger,
      socket: sock
   })

   store.bind(sock.ev)

   sock.ev.on('creds.update', saveCreds)

   sock.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect } = update
      if (connection === 'connecting' && !sock.authState.creds.registered) {
         await delay(1500)
         const code = await sock.requestPairingCode(myPhoneNumber)
         console.log('🔗 Código de emparejamiento', ':', code)
      }
      else if (connection === 'close') {
         const shouldReconnect = new Boom(connection?.lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut
         console.log('⚠️ Conexión cerrada porque', lastDisconnect.error, ', reconectando ', shouldReconnect)
         if (shouldReconnect) {
            connectToWhatsApp()
         }
      }
      else if (connection === 'open') {
         console.log('✅ Conectado exitosamente a WhatsApp')
      }
   })

   sock.ev.on('chats.upsert', () => {
      console.log('✉️ Chats obtenidos', store.chats.all())
   })

   sock.ev.on('contacts.upsert', () => {
      console.log('👥 Contactos obtenidos', Object.values(store.contacts))
   })

   // --- Leer store desde un archivo
   store.readFromFile(storePath)

   // --- Guardar store cada 3 minutos
   setInterval(() => {
      store.writeToFile(storePath)
   }, 180000)
}

connectToWhatsApp()

🪪 Explicación de los IDs de WhatsApp
id es el ID de WhatsApp, también llamado jid y lid, de la persona o grupo al que le estás enviando el mensaje.
 * Debe estar en el formato [código de país][número de teléfono]@s.whatsapp.net
   * Ejemplo para personas: 19999999999@s.whatsapp.net y 12699999999@lid.
   * Para grupos, debe estar en el formato 123456789-123345@g.us.
   * Para Meta AI, es 11111111111@bot.
   * Para listas de difusión, es [marca de tiempo de creación]@broadcast.
   * Para estados, el ID es status@broadcast.
✉️ Enviando Mensajes
> [!NOTE]
> Puedes obtener el jid de message.key.remoteJid en el primer ejemplo.
> 
🔠 Texto
// --- Enviar un mensaje de texto normal
sock.sendMessage(jid, {
   text: '👋🏻 Hola'
}, {
   quoted: message
})

// --- Enviar un mensaje de texto con vista previa de enlace
const urlA = 'https://www.npmjs.com/package/mancos-baileys-esm'

sock.sendMessage(jid, {
   text: urlA + ' 👆🏻 ¡Echa un vistazo!',
   linkPreview: {
      'matched-text': urlA,
      title: '🌱 Mancos Baileys ESM ☄️',
      description: 'Librería mejorada',
      previewType: 0, // --- Usa 1 para reproducción de video en la vista previa del enlace
      jpegThumbnail: fs.readFileSync('./path/to/image.jpg')
   }
})

// --- Enviar un mensaje de texto con vista previa grande de enlace y favicon
import { prepareWAMessageMedia } from 'mancos-baileys-esm'

const urlB = 'https://www.npmjs.com/package/mancos-baileys-esm#readme'

const { imageMessage: image } = await prepareWAMessageMedia({
   image: {
      url: './path/to/image.jpg'
   }
}, {
   upload: sock.waUploadToServer,
   mediaTypeOverride: 'thumbnail-link'
})

// --- Establecer el tamaño de visualización de la miniatura
image.height = 720
image.width = 480

sock.sendMessage(jid, {
   text: urlB + ' 👆🏻 ¡Echa un vistazo!',
   linkPreview: {
      'matched-text': urlB,
      title: '🌱 Mancos Baileys ESM ☄️',
      description: 'Librería mejorada',
      previewType: 0,
      jpegThumbnail: fs.readFileSync('./path/to/image.jpg'),
      highQualityThumbnail: image,
      linkPreviewMetadata: {
         linkMediaDuration: 0, // --- Duración en segundos (para contenido de video/audio)
         socialMediaPostType: 1, // --- Enum: 0 = NONE, 1 = REEL, 2 = LIVE_VIDEO, 3 = LONG_VIDEO, 4 = SINGLE_IMAGE, 5 = CAROUSEL
      } // --- Metadatos adicionales para vista previa grande
   },
   favicon: {
      url: './path/to/tiny-image.ico'
   }
})

🔔 Mención
// --- Mención normal
sock.sendMessage(jid, {
   text: '👋🏻 Hola @628123456789',
   mentions: ['628123456789@s.whatsapp.net']
}, {
   quoted: message
})

// --- Mencionar a todos
sock.sendMessage(jid, {
   text: '👋🏻 Hola @all',
   mentionAll: true
}, {
   quoted: message
})

😁 Reacción
sock.sendMessage(jid, {
   react: {
      key: message.key,
      text: '✨'
   }
})

📌 Fijar Mensaje
sock.sendMessage(jid, {
   pin: message.key,
   time: 86400, // --- Establece el valor en segundos: 86400 (1d), 604800 (7d), o 2592000 (30d)
   type: 1 // --- O 2 para quitar
})

🔖 Mantener Chat
> [!NOTE]
> Mantener Chat solo puede usarse en chats o grupos con mensajes temporales activados.
> 
sock.sendMessage(jid, {
   keep: message.key,
   type: 1 // --- O 2 para quitar
})

➡️ Reenviar Mensaje
sock.sendMessage(jid, {
   forward: message,
   force: true // --- Opcional
})

👤 Contacto
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Lia Wynn\n'
            + 'ORG:Waitress;\n'
            + 'TEL;type=CELL;type=VOICE;waid=628123456789:+62 8123 4567 89\n'
            + 'END:VCARD'

sock.sendMessage(jid, {
   contacts: {
      displayName: 'Lia Wynn',
      contacts: [
         { vcard }
      ]
   }
}, {
   quoted: message
})

📍 Ubicación
sock.sendMessage(jid, {
   location: {
      degreesLatitude: 24.121231,
      degreesLongitude: 55.1121221,
      name: '👋🏻 Estoy aquí'
   }
}, {
   quoted: message
})

🗓️ Evento
sock.sendMessage(jid, {
   event: {
      name: '🎶 Fiesta Meet & Mingle',
      description: 'Una reunión casual y divertida para conectar, charlar y hacer amigos.',
      call: 'audio', // --- O "video", este campo es opcional
      startDate: new Date(Date.now() + 3600000),
      endDate: new Date(Date.now() + 28800000),
      isCancelled: false, // --- Opcional
      isScheduleCall: false, // --- Opcional
      extraGuestsAllowed: false, // --- Opcional
      location: {
         name: 'Jakarta',
         degreesLatitude: -6.2,
         degreesLongitude: 106.8
      }
   }
}, {
   quoted: message
})

👥 Invitación a Grupo
const inviteCode = groupUrl
   .split('chat.whatsapp.com/')[1]
   ?.split('?')[0]

const groupJid = '1201111111111@g.us'
const groupName = 'Mancos Baileys ESM'

sock.sendMessage(jid, {
   groupInvite: {
      inviteCode,
      inviteExpiration: Date.now() + 86400000,
      text: '👋🏻 Hola, te invitamos a unirte a nuestro grupo.',
      jid: groupJid,
      subject: groupName,
   }
}, {
   quoted: message
})

🛍️ Producto
import { randomUUID } from 'crypto'

sock.sendMessage(jid, {
   image: {
      url: './path/to/image.jpg'
   },
   body: '👋🏻 ¡Revisa mi producto aquí!',
   footer: 'Mancos Baileys ESM',
   product: {
      currencyCode: 'IDR',
      description: '🛍️ ¡Producto interesante!',
      priceAmount1000: 70_000_000,
      productId: randomUUID(),
      productImageCount: 1,
      salePriceAmount1000: 65_000_000,
      signedUrl: 'https://www.npmjs.com/package/mancos-baileys-esm',
      title: '📦 Starseed (Premium)',
      url: 'https://www.npmjs.com/package/mancos-baileys-esm'
   },
   businessOwnerJid: '0@s.whatsapp.net'
})

📊 Encuesta
// --- Mensaje de encuesta normal
sock.sendMessage(jid, {
   poll: {
      name: '🔥 Hora de votar',
      values: ['Sí', 'No'],
      selectableCount: 1,
      toAnnouncementGroup: false,
      endDate: new Date(Date.now() + 28800000), // --- Opcional
      hideVoter: false, // --- Opcional
      canAddOption: false // --- Opcional
   }
}, {
   quoted: message
})

// --- Cuestionario/Quiz (solo para canales)
sock.sendMessage('1211111111111@newsletter', {
   poll: {
      name: '🔥 Quiz',
      values: ['Sí', 'No'],
      correctAnswer: 'Sí',
      pollType: 1
   }
}, {
   quoted: message
})

// --- Resultado de encuesta
sock.sendMessage(jid, {
   pollResult: {
      name: '📝 Resultado de Encuesta',
      votes: [{
         name: 'Genial',
         voteCount: 10
      }, {
         name: 'Nah',
         voteCount: 2
      }],
      pollType: 0 // O 1 para quiz
   }
}, {
   quoted: message
})

// --- Actualización de encuesta
sock.sendMessage(jid, {
   pollUpdate: {
      metadata: {},
      key: message.key,
      vote: {
         enclv: /* <Buffer> */,
         encPayload: /* <Buffer> */
      }
   }
}, {
   quoted: message
})

💭 Respuesta de Botón
// --- Usando buttonsResponseMessage
sock.sendMessage(jid, {
   type: 'plain',
   buttonReply: {
      id: '#Menu',
      displayText: '✨ Menú Interesante'
   }
}, {
   quoted: message
})

// --- Usando interactiveResponseMessage
sock.sendMessage(jid, {
   flowReply: {
      format: 0,
      text: '💭 Respuesta',
      name: 'menu_options',
      paramsJson: JSON.stringify({
         id: '#Menu',
         description: '✨ Menú Interesante'
      })
   }
}, {
   quoted: message
})

// --- Usando listResponseMessage
sock.sendMessage(jid, {
   listReply: {
      title: '📄 Ver Más',
      description: '✨ Menú Interesante',
      id: '#Menu'
   }
}, {
   quoted: message
})

// --- Usando templateButtonReplyMessage
sock.sendMessage(jid, {
   type: 'template',
   buttonReply: {
      id: '#Menu',
      displayText: '✨ Menú Interesante',
      index: 1
   }
}, {
   quoted: message
})

✨ Respuesta Enriquecida
> [!NOTE]
> richResponse[] es una representación de submessages[] dentro de richResponseMessage.
> 
> [!TIP]
> Aún puedes usar el campo original submessages[] directamente.
> El ejemplo de código a continuación es solo una implementación usando un ayudante, no una estructura requerida.
> 
sock.sendMessage(jid, {
   disclaimerText: 'Ejemplo de estructura submessages RAW',
   richResponse: [{
      text: 'Uso de Ejemplo',
   }, {
      language: 'javascript',
      code: [{
         highlightType: 0,
         codeContent: 'console.log("¡Hola, Mundo!")'
      }]
   }, {
      text: 'Bastante simple, ¿verdad?\n'
   }, {
      text: 'Comparación entre Node.js, Bun y Deno',
   }, {
      title: 'Comparación de Runtime',
      table: [{
         isHeading: true,
         items: ['', 'Node.js', 'Bun', 'Deno']
      }, {
         isHeading: false,
         items: ['Motor', 'V8 (C++)', 'JavaScriptCore (C++)', 'V8 (C++)']
      }, {
         isHeading: false,
         items: ['Rendimiento', '4/5', '5/5', '4/5']
      }]
   }, {
      text: '¿Esto ayuda a aclarar las diferencias?'
   }]
})

> [!TIP]
> Puedes agregar fácilmente resaltado de sintaxis importando tokenizeCode directamente de Baileys.
> 
import { tokenizeCode } from 'mancos-baileys-esm'

const language = 'javascript'
const code = 'console.log("¡Hola, Mundo!")'

sock.sendMessage(jid, {
   disclaimerText: 'Ejemplo de tokenización de Bloque de Código',
   richResponse: [{
      text: 'Uso de Ejemplo',
   }, {
      language,
      code: tokenizeCode(code, language)
   }, {
      text: 'Bastante simple, ¿verdad?'
   }]
})

> 💡 Lenguajes Soportados: css, html, javascript, typescript, python, golang, rust, c, c#, c++, bash, bat, powershell.
> 
🧾 Mensaje con Bloque de Código
> [!NOTE]
> Esta función ya incluye un tokenizador incorporado con tokenizeCode.
> 
sock.sendMessage(jid, {
   disclaimerText: 'Bloque de Código',
   headerText: '## Uso de Ejemplo',
   contentText: '---',
   code: 'console.log("¡Hola, Mundo!")',
   language: 'javascript',
   footerText: 'Bastante simple, ¿verdad?'
})

🌏 Mensaje con Entidades en Línea
sock.sendMessage(jid, {
   disclaimerText: 'Entidades en Línea',
   headerText: '## ¡Échale un vistazo!',
   contentText: '---',
   links: [{
      text: '1. Google',
      title: 'Motor de Búsqueda Popular',
      url: 'https://www.google.com/'
   }, {
      text: '2. YouTube',
      title: 'Plataforma de Streaming Popular',
      url: 'https://www.youtube.com/'
   }, {
      text: '3. Mancos Baileys ESM',
      title: 'Librería mejorada',
      url: 'https://www.npmjs.com/package/mancos-baileys-esm'
   }],
   footerText: '---'
})

📋 Mensaje con Tabla
sock.sendMessage(jid, {
   disclaimerText: 'Tabla',
   headerText: '## Comparación entre Node.js, Bun y Deno',
   contentText: '---',
   title: 'Comparación de Runtime',
   table: [
      ['', 'Node.js', 'Bun', 'Deno'],
      ['Motor', 'V8 (C++)', 'JavaScriptCore (C++)', 'V8 (C++)'],
      ['Rendimiento', '4/5', '5/5', '4/5']
   ],
   noHeading: false, // --- Opcional
   footerText: '¿Esto ayuda a aclarar las diferencias?'
})

🎞️ Mención de Estado
sock.sendMessage([jidA, jidB, jidC], {
   text: '¡Hola! 👋🏻'
})

📁 Enviando Mensajes Multimedia
> [!NOTE]
> Para mensajes multimedia, puedes pasar un Buffer directamente, o un objeto con { stream: Readable } o { url: string } (ruta local o URL HTTP/HTTPS).
> 
🖼️ Imagen
sock.sendMessage(jid, {
   image: {
      url: './path/to/image.jpg'
   },
   caption: '🔥 Genial'
}, {
   quoted: message
})

🎥 Video
sock.sendMessage(jid, {
   video: {
      url: './path/to/video.mp4'
   },
   gifPlayback: false, // --- Establece en true si quieres enviar el video como GIF
   ptv: false,  // --- Establece en true si quieres enviar el video como PTV (Mensaje de video circular)
   caption: '🔥 Genial'
}, {
   quoted: message
})

📃 Sticker
sock.sendMessage(jid, {
   sticker: {
      url: './path/to/sticker.webp'
   }
}, {
   quoted: message
})

💽 Audio
sock.sendMessage(jid, {
   audio: {
      url: './path/to/audio.mp3'
   },
   ptt: false // --- Establece en true si quieres enviar el audio como Nota de Voz
}, {
   quoted: message
})

🗂️ Documento
sock.sendMessage(jid, {
   document: {
      url: './path/to/document.pdf'
   },
   mimetype: 'application/pdf',
   caption: '✨ ¡Mi trabajo!'
}, {
   quoted: message
})

🖼️ Álbum (Imagen y Video)
sock.sendMessage(jid, {
   album: [{
      image: {
         url: './path/to/image.jpg'
      },
      caption: '1ra imagen'
   }, {
      video: {
         url: './path/to/video.mp4'
      },
      caption: '1er video'
   }, {
      image: {
         url: './path/to/image.jpg'
      },
      caption: '2da imagen'
   }, {
      video: {
         url: './path/to/video.mp4'
      },
      caption: '2do video'
   }]
}, {
   quoted: message
})

📦 Paquete de Stickers
> [!IMPORTANT]
> Si sharp o @napi-rs/image no están instalados, el cover (portada) y los stickers ya deben estar en formato WebP.
> 
sock.sendMessage(jid, {
   cover: {
      url: './path/to/image.webp'
   },
   stickers: [{
      data: {
         url: './path/to/image.webp'
      }
   }, {
      data: {
         url: './path/to/image.webp'
      }
   }, {
      data: {
         url: './path/to/image.webp'
      }
   }],
   name: '📦 Mi Paquete de Stickers',
   publisher: '🌟 Lia Wynn',
   description: 'Mancos Baileys ESM'
}, {
   quoted: message
})

👉🏻 Enviando Mensajes Interactivos
🔘 Botones
// --- Mensaje de botones normales
sock.sendMessage(jid, {
   text: '👆🏻 ¡Botones!',
   footer: 'Mancos Baileys ESM',
   buttons: [{
      text: '👋🏻 Registrarse',
      id: '#SignUp'
   }]
}, {
   quoted: message
})

// --- Botones con Multimedia y Native Flow
sock.sendMessage(jid, {
   image: {
      url: './path/to/image.jpg'
   },
   caption: '👆🏻 ¡Botones y Native Flow!',
   footer: 'Mancos Baileys ESM',
   buttons: [{
      text: '👋🏻 Calificar',
      id: '#Rating'
   }, {
      text: '📋 Seleccionar',
      sections: [{
         title: '✨ Sección 1',
         rows: [{
            header: '',
            title: '💭 Ingrediente Secreto',
            description: '',
            id: '#SecretIngredient'
         }]
      }, {
         title: '✨ Sección 2',
         highlight_label: '🔥 Popular',
         rows: [{
            header: '',
            title: '🏷️ Cupón',
            description: '',
            id: '#CouponCode'
         }]
      }]
   }]
}, {
   quoted: message
})

📋 Lista
> [!NOTE]
> Solo funciona en chats privados (@s.whatsapp.net).
> 
sock.sendMessage(jid, {
   text: '📋 ¡Lista!',
   footer: 'Mancos Baileys ESM',
   buttonText: '📋 Seleccionar',
   title: '👋🏻 Hola',
   sections: [{
      title: '🚀 Menú 1',
      rows: [{
         title: '✨ IA',
         description: '',
         rowId: '#AI'
      }]
   }, {
      title: '🌱 Menú 2',
      rows: [{
         title: '🔍 Buscar',
         description: '',
         rowId: '#Search'
      }]
   }]
}, {
   quoted: message
})

🗄️ Interactivo
// --- Native Flow
sock.sendMessage(jid, {
   image: {
      url: './path/to/image.jpg'
   },
   caption: '🗄️ ¡Interactivo!',
   footer: 'Mancos Baileys ESM',
   optionText: '👉🏻 Opciones', // --- Opcional, agrupa todo el native flow en una sola lista
   optionTitle: '📄 Opciones', // --- Opcional
   offerText: '🏷️ ¡Nuevo Cupón!', // --- Opcional, añade una oferta al mensaje
   offerCode: 'mancos-baileys-esm', // --- Opcional
   offerUrl: 'https://www.npmjs.com/package/mancos-baileys-esm', // --- Opcional
   offerExpiration: Date.now() + 3_600_000, // --- Opcional
   nativeFlow: [{
      text: '👋🏻 Saludo',
      id: '#Greeting',
      icon: 'review' // --- Opcional
   }, {
      text: '📞 Llamar',
      call: '628123456789'
   }, {
      text: '📋 Copiar',
      copy: 'mancos-baileys-esm'
   }, {
      text: '🌐 Fuente',
      url: 'https://www.npmjs.com/package/mancos-baileys-esm',
      useWebview: true // --- Opcional
   }, {
      text: '📋 Seleccionar',
      sections: [{
         title: '✨ Sección 1',
         rows: [{
            header: '',
            title: '🏷️ Cupón',
            description: '',
            id: '#CouponCode'
         }]
      }, {
         title: '✨ Sección 2',
         highlight_label: '🔥 Popular',
         rows: [{
            header: '',
            title: '💭 Ingrediente Secreto',
            description: '',
            id: '#SecretIngredient'
         }]
      }],
      icon: 'default' // --- Opcional
   }],
   interactiveAsTemplate: false, // --- Opcional, envuelve el mensaje interactivo en una plantilla
}, {
   quoted: message
})

// --- Carrusel y Native Flow
sock.sendMessage(jid, {
   text: '🗂️ ¡Interactivo con Carrusel!',
   footer: 'Mancos Baileys ESM',
   cards: [{
      image: {
         url: './path/to/image.jpg'
      },
      caption: '🖼️ Imagen 1',
      footer: '🏷️ Pinterest',
      nativeFlow: [{
         text: '🌐 Fuente',
         url: 'https://www.npmjs.com/package/mancos-baileys-esm',
         useWebview: true
      }]
   }, {
      image: {
         url: './path/to/image.jpg'
      },
      caption: '🖼️ Imagen 2',
      footer: '🏷️ Pinterest',
      offerText: '🏷️ ¡Nuevo Cupón!',
      offerCode: 'mancos-baileys-esm',
      offerUrl: 'https://www.npmjs.com/package/mancos-baileys-esm',
      offerExpiration: Date.now() + 3_600_000,
      nativeFlow: [{
         text: '🌐 Fuente',
         url: 'https://www.npmjs.com/package/mancos-baileys-esm'
      }]
   }, {
      image: {
         url: './path/to/image.jpg'
      },
      caption: '🖼️ Imagen 3',
      footer: '🏷️ Pinterest',
      optionText: '👉🏻 Opciones',
      optionTitle: '👉🏻 Opciones',
      offerText: '🏷️ ¡Nuevo Cupón!',
      offerCode: 'mancos-baileys-esm',
      offerUrl: 'https://www.npmjs.com/package/mancos-baileys-esm',
      offerExpiration: Date.now() + 3_600_000,
      nativeFlow: [{
         text: '🛒 Producto',
         id: '#Product',
         icon: 'default'
      }, {
         text: '🌐 Fuente',
         url: 'https://www.npmjs.com/package/mancos-baileys-esm'
      }]
   }]
}, {
   quoted: message
})

// --- Native Flow con Audio en el pie de página
sock.sendMessage(jid, {
   text: '🔈 ¡Música en el footer!',
   audioFooter: {
      url: './path/to/audio.mp3'
   }, // --- Al igual que otros métodos multimedia, soporta buffers y streams
   nativeFlow: [{
      text: '👍🏻 Bien, siguiente',
      id: '#Next',
      icon: 'review'
   }, {
      text: '👎🏻 Saltar',
      id: '#Skip',
      icon: 'default'
   }]
}, {
   quoted: message
})

🫙 Plantilla Hidratada (Hydrated Template)
sock.sendMessage(jid, {
   title: '👋🏻 Hola',
   image: {
      url: './path/to/image.jpg'
   },
   caption: '🫙 ¡Plantilla!',
   footer: 'Mancos Baileys ESM',
   templateButtons: [{
      text: '👉🏻 Toca Aquí',
      id: '#Order'
   }, {
      text: '🌐 Fuente',
      url: 'https://www.npmjs.com/package/mancos-baileys-esm'
   }, {
      text: '📞 Llamar',
      call: '628123456789'
   }]
}, {
   quoted: message
})

💳 Enviando Mensajes de Pago
➕ Invitar al Pago
sock.sendMessage(jid, {
   paymentInviteServiceType: 3 // 1, 2, o 3
})

🧾 Factura (Invoice)
> [!NOTE]
> Los mensajes de factura aún no están soportados completamente.
> 
sock.sendMessage(jid, {
   image: {
      url: './path/to/image.jpg'
   },
   invoiceNote: '🏷️ Factura'
})

🛍️ Pedido (Order)
sock.sendMessage(chat, {
   orderText: '🛍️ Pedido',
   thumbnail: fs.readFileSync('./path/to/image.jpg') // --- Debe estar en formato buffer
}, {
   quoted: message
})

💳 Solicitar Pago
sock.sendMessage(jid, {
   text: '💳 Solicitar Pago',
   requestPaymentFrom: '0@s.whatsapp.net'
})

👁️ Otras Opciones de Mensaje
🤖 Icono de IA
> [!NOTE]
> Solo funciona en chats privados (@s.whatsapp.net).
> 
sock.sendMessage(jid, {
   image: {
      url: './path/to/image.jpg'
   },
   caption: '🤖 ¡Con icono de IA!',
   ai: true
}, {
   quoted: message
})

🕒 Efímero (Temporal)
> [!NOTE]
> Envuelve el mensaje en ephemeralMessage
> 
sock.sendMessage(jid, {
   image: {
      url: './path/to/image.jpg'
   },
   caption: '👁️ Efímero',
   ephemeral: true
})

📰 Respuesta de Anuncio Externo (External Ad Reply)
> [!NOTE]
> Añade una miniatura de anuncio a los mensajes (podría no mostrarse en algunas versiones de WhatsApp).
> 
sock.sendMessage(jid, {
   text: '📰 Respuesta de Anuncio Externo',
   externalAdReply: {
      title: '📝 ¿Sabías que?',
      body: '❓ No lo sé',
      thumbnail: fs.readFileSync('./path/to/image.jpg'), // --- Debe estar en formato buffer
      largeThumbnail: false, // --- O true para una miniatura más grande
      url: 'https://www.npmjs.com/package/mancos-baileys-esm' // --- Opcional, usado para el almacenamiento en caché interno de WhatsApp y URL directa
   }
}, {
   quoted: message
})

🧑‍🧑‍🧒 Estado de Grupo
> [!NOTE]
> Solo funciona en chat de grupo (@g.us)
> 
sock.sendMessage(jid, {
   image: {
      url: './path/to/image.jpg'
   },
   caption: '👥 ¡Estado de Grupo!',
   groupStatus: true
})

🐱 Sticker Lottie
> [!NOTE]
> Envuelve el mensaje en lottieStickerMessage
> 
sock.sendMessage(jid, {
   sticker: {
      url: './path/to/sticker.webp'
   },
   isLottie: true
})

🧩 Raw (Puro)
sock.sendMessage(jid, {
   extendedTextMessage: {
      text: '📃 Construido manualmente desde cero usando la estructura raw proto de WhatsApp',
      contextInfo: {
         externalAdReply: {
            title: 'Mancos Baileys ESM',
            thumbnail: fs.readFileSync('./path/to/image.jpg'),
            sourceApp: 'whatsapp',
            showAdAttribution: true,
            mediaType: 1
         }
      }
   },
   raw: true
}, {
   quoted: message
})

🏷️ Etiqueta de Servicio Meta Seguro
sock.sendMessage(jid, {
   text: '🏷️ ¡Solo una etiqueta!',
   secureMetaServiceLabel: true
})

📑 Spoiler
> [!NOTE]
> Envuelve el mensaje en spoilerMessage
> 
sock.sendMessage(jid, {
   image: {
      url: './path/to/image.jpg'
   },
   caption: '❔ Spoiler',
   spoiler: true
})

👁️ Ver Una Vez
> [!NOTE]
> Envuelve el mensaje en viewOnceMessage
> 
sock.sendMessage(jid, {
   image: {
      url: './path/to/image.jpg'
   },
   caption: '👁️ Ver Una Vez',
   viewOnce: true
})

👁️ Ver Una Vez V2
> [!NOTE]
> Envuelve el mensaje en viewOnceMessageV2
> 
sock.sendMessage(jid, {
   image: {
      url: './path/to/image.jpg'
   },
   caption: '👁️ Ver Una Vez V2',
   viewOnceV2: true
})

👁️ Ver Una Vez V2 Extensión
> [!NOTE]
> Envuelve el mensaje en viewOnceMessageV2Extension
> 
sock.sendMessage(jid, {
   image: {
      url: './path/to/image.jpg'
   },
   caption: '👁️ Ver Una Vez V2 Extensión',
   viewOnceV2Extension: true
})

♻️ Modificar Mensajes
🗑️ Borrar Mensajes
sock.sendMessage(jid, {
   delete: message.key
})

✏️ Editar Mensajes
// --- Editar texto sin formato
sock.sendMessage(jid, {
   text: '✨ ¡Quiero decir, genial!',
   edit: message.key
})

// --- Editar la descripción (caption) de los mensajes multimedia
sock.sendMessage(jid, {
   caption: '✨ ¡Me refiero a que aquí está la imagen!',
   edit: message.key
})

🧰 Contenidos Adicionales
🏷️ Encontrar ID de Usuario (JID|PN/LID)
> [!NOTE]
> El ID debe contener solo números (sin +, (), o -) y debe incluir el código del país con el formato de ID de WhatsApp.
> 
// --- PN (Número de Teléfono)
const phoneNumber = '6281111111111@s.whatsapp.net'

const ids = await sock.findUserId(phoneNumber)

console.log('🏷️ ID de usuario obtenido', ':', ids)

// --- LID (Identificador Local)
const lid = '43411111111111@lid'

const ids = await sock.findUserId(lid)

console.log('🏷️ ID de usuario obtenido', ':', ids)

// --- Salida
// {
//    phoneNumber: '6281111111111@s.whatsapp.net',
//    lid: '43411111111111@lid'
// }
// --- Salida en caso de error
// {
//    phoneNumber: '6281111111111@s.whatsapp.net',
//    lid: undefined
// }
// --- Misma estructura de salida independientemente del tipo de entrada

🔑 Solicitar Código de Emparejamiento Personalizado
> [!NOTE]
> El número de teléfono debe contener solo números (sin +, (), o -) y debe incluir el código del país.
> 
const phoneNumber = '6281111111111'
const customPairingCode = 'STARFALL'

await sock.requestPairingCode(phoneNumber, customPairingCode)

console.log('🔗 Código de emparejamiento', ':', customPairingCode)

🖼️ Procesamiento de Imágenes
> [!NOTE]
> Utiliza automáticamente la biblioteca de procesamiento de imágenes disponible: sharp, @napi-rs/image, o jimp
> 
import { getImageProcessingLibrary } from 'mancos-baileys-esm'
import { readFile } from 'fs/promises'

const lib = await getImageProcessingLibrary()

const bufferOrFilePath = './path/to/image.jpg'
const width = 512

let output

// --- Si sharp está instalado
if (lib.sharp?.default) {
   const img = lib.sharp.default(bufferOrFilePath)

   output = await img.resize(width)
      .jpeg({ quality: 80 })
      .toBuffer()
}

// --- Si @napi-rs/image está instalado
else if (lib.image?.Transformer) {
   // --- Debe estar en formato buffer
   const inputBuffer = Buffer.isBuffer(bufferOrFilePath)
      ? bufferOrFilePath
      : await readFile(bufferOrFilePath)

   const img = new lib.image.Transformer(inputBuffer)

   output = await img.resize(width, undefined, 0)
      .jpeg(50)
}

// --- Si jimp está instalado
else if (lib.jimp?.Jimp) {
   const img = await lib.jimp.Jimp.read(bufferOrFilePath)

   output = await img
      .resize({ w: width, mode: lib.jimp.ResizeStrategy.BILINEAR })
      .getBuffer('image/jpeg', { quality: 50 })
}

// --- Alternativa (Fallback)
else {
   throw new Error('No hay procesamiento de imágenes disponible')
}

console.log('✅ ¡Proceso completado!')
console.dir(output, { depth: null })

📣 Gestión de Canales (Newsletters)
// --- Crear uno nuevo
sock.newsletterCreate('Mancos Baileys ESM', '📣 Actualizaciones frescas semanales')

// --- Obtener info
const metadata = sock.newsletterMetadata('1231111111111@newsletter')
console.dir(metadata, { depth: null })

// --- Obtener conteo de suscriptores
const subscribers = await sock.newsletterSubscribers('1231111111111@newsletter')
console.dir(subscribers, { depth: null })

// --- Seguir y Dejar de seguir
sock.newsletterFollow('1231111111111@newsletter')
sock.newsletterUnfollow('1231111111111@newsletter')

// --- Silenciar y Desilenciar
sock.newsletterMute('1231111111111@newsletter')
sock.newsletterUnmute('1231111111111@newsletter')

// --- Degradar admin
sock.newsletterDemote('1231111111111@newsletter', '6281111111111@s.whatsapp.net')

// --- Cambiar propietario
sock.newsletterChangeOwner('1231111111111@newsletter', '6281111111111@s.whatsapp.net')

// --- Actualizar canal
sock.newsletterUpdate('1231111111111@newsletter', { name: 'Mancos Baileys ESM' })

// --- Cambiar nombre
sock.newsletterUpdateName('1231111111111@newsletter', '📦 Mancos Baileys ESM')

// --- Cambiar descripción
sock.newsletterUpdateDescription('1231111111111@newsletter', '📣 Actualizaciones frescas semanales')

// --- Cambiar foto
sock.newsletterUpdatePicture('1231111111111@newsletter', {
   url: 'path/to/image.jpg'
})

// --- Eliminar foto
sock.newsletterRemovePicture('1231111111111@newsletter')

// --- Reaccionar a un mensaje
sock.newsletterReactMessage('1231111111111@newsletter', '100', '💛')

// --- Obtener conteo de administradores
const count = await sock.newsletterAdminCount('1231111111111@newsletter')

// --- Obtener todos los canales suscritos
const newsletters = await sock.newsletterSubscribed()
console.dir(newsletters, { depth: null })

// --- Obtener mensajes del canal
const messages = sock.newsletterFetchMessages('jid', '1231111111111@newsletter', 50, 0, 0)
console.dir(messages, { depth: null })

// --- Eliminar canal
sock.newsletterDelete('1231111111111@newsletter')

👥 Gestión de Grupos
// --- Crear uno nuevo y añadir participantes usando sus JIDs
const group = sock.groupCreate('Mancos Baileys ESM', ['628123456789@s.whatsapp.net'])
console.dir(group, { depth: null })

// --- Obtener info
const metadata = await sock.groupMetadata(jid)
console.dir(metadata, { depth: null })

// --- Obtener código de invitación del grupo
const inviteCode = await sock.groupInviteCode(jid)
console.dir(inviteCode, { depth: null })

// --- Revocar enlace de invitación
sock.groupRevokeInvite(jid)

// --- Aceptar invitación al grupo
sock.groupAcceptInvite(inviteCode)

// --- Salir del grupo
sock.groupLeave(jid)

// --- Añadir participantes
sock.groupParticipantsUpdate(jid, ['628123456789@s.whatsapp.net'], 'add')

// --- Eliminar participantes
sock.groupParticipantsUpdate(jid, ['628123456789@s.whatsapp.net'], 'remove')

// --- Promover a administrador
sock.groupParticipantsUpdate(jid, ['628123456789@s.whatsapp.net'], 'promote')

// --- Degradar de administrador
sock.groupParticipantsUpdate(jid, ['628123456789@s.whatsapp.net'], 'demote')

// --- Aprobar solicitudes de unión
sock.groupRequestParticipantsUpdate(jid, ['628123456789@s.whatsapp.net'], 'approve')

// --- Cambiar nombre
sock.groupUpdateSubject(jid, '📦 Mancos Baileys ESM')

// --- Cambiar descripción
sock.groupUpdateDescription(jid, 'Descripción actualizada')

// --- Cambiar foto
sock.updateProfilePicture(jid, {
   url: 'path/to/image.jpg'
})

// --- Eliminar foto
sock.removeProfilePicture(jid)

// --- Configurar el grupo para que solo los admins puedan chatear
sock.groupSettingUpdate(jid, 'announcement')

// --- Configurar el grupo abierto a todos para chatear
sock.groupSettingUpdate(jid, 'not_announcement')

// --- Configurar para que solo los admins puedan editar la info del grupo
sock.groupSettingUpdate(jid, 'locked')

// --- Configurar para que todos los participantes puedan editar la info del grupo
sock.groupSettingUpdate(jid, 'unlocked')

// --- Configurar para que solo los admins puedan añadir participantes
sock.groupMemberAddMode(jid, 'admin_add')

// --- Configurar para que todos los participantes puedan añadir participantes
sock.groupMemberAddMode(jid, 'all_member_add')

// --- Activar o desactivar los mensajes temporales (en formato de segundos)
sock.groupToggleEphemeral(jid, 86400)

// --- Desactivar los mensajes temporales
sock.groupToggleEphemeral(jid, 0)

// --- Activar o desactivar el modo de aprobación de miembros
sock.groupJoinApprovalMode(jid, 'on')
sock.groupJoinApprovalMode(jid, 'off')

// --- Obtener todos los metadatos de los grupos a los que se pertenece
const groups = await sock.groupFetchAllParticipating()
console.dir(groups, { depth: null })

// --- Obtener lista de solicitudes pendientes
const requests = await sock.groupRequestParticipantsList(jid)
console.dir(requests, { depth: null })

// --- Obtener info del grupo desde el enlace
const group = await sock.groupGetInviteInfo('ABC123456789')
console.log('👥 Info de grupo obtenida con el código de invitación', ':', group)

// --- Actualizar la etiqueta (label) de miembro bot
sock.updateMemberLabel(jid, 'Mancos Baileys ESM')

👥 Gestión de Comunidades
// --- Crear una nueva y añadir descripción
const community = await sock.communityCreate('Mancos Baileys ESM', '📣 Actualizaciones frescas semanales')
console.dir(community, { depth: null })

// --- Crear un subgrupo para la comunidad y añadir participantes usando sus JIDs
const group = await sock.communityCreateGroup('📢 Anuncios', ['628123456789@s.whatsapp.net'], communityJid)

// --- Vincular un grupo existente
sock.communityLinkGroup(groupJid, communityJid)

// --- Desvincular un grupo existente
sock.communityUnlinkGroup(groupJid, communityJid)

// --- Obtener info
const metadata = await sock.communityMetadata(jid)
console.dir(metadata, { depth: null })

// --- Obtener código de invitación de la comunidad
const inviteCode = await sock.communityInviteCode(jid)
console.dir(inviteCode, { depth: null })

// --- Revocar enlace de invitación
sock.communityRevokeInvite(jid)

// --- Aceptar invitación a la comunidad
sock.communityAcceptInvite(inviteCode)

// --- Salir de la comunidad
sock.communityLeave(jid)

// --- Aprobar solicitudes de unión
sock.communityRequestParticipantsUpdate(jid, ['628123456789@s.whatsapp.net'], 'approve')

// --- Cambiar nombre
sock.communityUpdateSubject(jid, '📦 Mancos Baileys ESM')

// --- Cambiar descripción
sock.communityUpdateDescription(jid, 'Descripción actualizada')

// --- Configurar comunidad para que solo los admins puedan chatear
sock.communitySettingUpdate(jid, 'announcement')

// --- Configurar comunidad abierta para que todos puedan chatear
sock.communitySettingUpdate(jid, 'not_announcement')

// --- Configurar para que solo los admins puedan editar la info de la comunidad
sock.communitySettingUpdate(jid, 'locked')

// --- Configurar para que todos puedan editar la info de la comunidad
sock.communitySettingUpdate(jid, 'unlocked')

// --- Configurar para que solo los admins puedan añadir participantes
sock.communityMemberAddMode(jid, 'admin_add')

// --- Configurar para que todos los participantes puedan añadir participantes
sock.communityMemberAddMode(jid, 'all_member_add')

// --- Activar o desactivar los mensajes temporales (en formato de segundos)
sock.communityToggleEphemeral(jid, 86400)

// --- Desactivar los mensajes temporales
sock.communityToggleEphemeral(jid, 0)

// --- Activar o desactivar el modo de aprobación de miembros
sock.communityJoinApprovalMode(jid, 'on')
sock.communityJoinApprovalMode(jid, 'off')

// --- Obtener metadatos de todas las comunidades participantes
const communities = await sock.communityFetchAllParticipating()
console.dir(communities, { depth: null })

// --- Obtener todos los grupos vinculados a una comunidad
const linked = await sock.communityFetchLinkedGroups(jid)
console.dir(linked, { depth: null })

// --- Obtener la lista de solicitudes de unión pendientes
const requests = await sock.communityRequestParticipantsList(jid)
console.dir(requests, { depth: null })

// --- Obtener info de la comunidad desde el enlace
const community = await sock.communityGetInviteInfo('ABC123456789')
console.log('👥 Info de comunidad obtenida con el código de invitación', ':', community)

👤 Gestión de Perfil
// --- Obtener la foto de perfil de un usuario
const url = await sock.profilePictureUrl(jid, 'image')
console.log('🖼️ URL de la foto de perfil obtenida', url)

// --- Actualizar foto de perfil
sock.updateProfilePicture(jid, buffer)
sock.updateProfilePicture(jid, { url })

// --- Eliminar foto de perfil
sock.removeProfilePicture(jid)

// --- Actualizar nombre de perfil
sock.updateProfileName('Mi Nombre')

// --- Actualizar estado (info) del perfil
sock.updateProfileStatus('Disponible')

// --- Presencia
sock.sendPresenceUpdate('available', jid)
sock.presenceSubscribe(jid)

// --- Confirmaciones de lectura (Read receipts)
sock.readMessages([message.key])
sock.sendReceipt(jid, participant, [messageId], 'read')

// --- Bloquear usuario
sock.updateBlockStatus(jid, 'block')

// --- Desbloquear usuario
sock.updateBlockStatus(jid, 'unblock')

// --- Obtener lista de bloqueados
const blocked = await sock.fetchBlocklist()
console.dir(blocked, { depth: null })

// --- Modificar chats
sock.chatModify({
   archive: true,
   lastMessageOrig: message,
   lastMessage: message
}, jid)

// --- Mensajes destacados (Star messages)
sock.star(jid, [{ id: messageId, fromMe: true }], true)

// --- Contacto
sock.addOrEditContact(jid, { displayName: 'Starseed' })
sock.removeContact(jid)

// --- Etiquetas (Labels)
sock.addChatLabel(jid, labelId)
sock.removeChatLabel(jid, labelId)
sock.addMessageLabel(jid, messageId, labelId)

// --- Sincronización del estado de la app
sock.resyncAppState(['regular', 'critical_block'], true)

// --- Obtener el perfil de negocio (business profile)
const profile = await sock.getBusinessProfile(jid)
console.dir(profile, { depth: null })

🛒 Gestión de Negocios
// --- Crear un nuevo producto
const product = await sock.productCreate({
   name: '🧩 Starseed (Premium)',
   description: '¡Obtén la versión completa de Starseed!',
   price: 100000,
   currency: 'IDR',
   originCountryCode: 'ID',
   images: [
      bufferImage,
      {
         url: './path/to/image.jpg'
      }
   ]
})
console.dir(product, { depth: null })

// --- Actualizar producto
await sock.productUpdate(productId, {
   name: '🧩 Starseed (Premium)',
   description: '¡Obtén la versión completa de Starseed con más características!',
   price: 75000,
   currency: 'IDR',
   images: [
      {
         url: './path/to/image.jpg'
      }
   ]
})

// --- Eliminar producto
sock.productDelete([productId])

// --- Obtener información del catálogo
const { products, nextPageCursor } = await sock.getCatalog({
  jid: '628123456789@s.whatsapp.net',
  limit: 10
})

// --- Obtener colecciones
const collections = await sock.getCollections('628123456789@s.whatsapp.net', 10)
console.dir(collections, { depth: null })

// --- Obtener detalles de un pedido
const order = await sock.getOrderDetails(orderId, tokenBase64)
console.dir(order, { depth: null })

// --- Actualizar perfil de negocio
await sock.updateBusinessProfile({
   address: 'Jakarta, Indonesia',
   description: '🛒 Tienda Oficial',
   websites: ['https://www.npmjs.com/package/mancos-baileys-esm'],
   email: 'more-more@gmail.com',
   hours: {
      timezone: 'Asia/Jakarta',
      days: [{ day: 'mon', mode: 'open_24h' }]
   }
})

// --- Actualizar foto de portada
sock.updateCoverPhoto({
   url: './path/to/image.jpg'
})

// --- Eliminar foto de portada
sock.removeCoverPhoto(coverId)

// --- Añadir o editar respuestas rápidas (quick replies)
sock.addOrEditQuickReply({
  shortcut: 'hola',
  message: 'Hola desde la cuenta de negocio',
})

// --- Eliminar respuesta rápida
sock.removeQuickReply(timestamp)

🔐 Gestión de Privacidad
// --- Actualizar la privacidad de la última vez (last seen)
sock.updateLastSeenPrivacy('all')
sock.updateLastSeenPrivacy('contacts')
sock.updateLastSeenPrivacy('contact_blacklist')
sock.updateLastSeenPrivacy('nobody')

// --- Actualizar la privacidad del "en línea"
sock.updateOnlinePrivacy('all')
sock.updateOnlinePrivacy('match_last_seen')

// --- Actualizar la privacidad de la foto de perfil
sock.updateProfilePicturePrivacy('contacts')

// --- Actualizar la privacidad del estado
sock.updateStatusPrivacy('contacts')

// --- Actualizar la privacidad de confirmación de lectura
sock.updateReadReceiptsPrivacy('all')
sock.updateReadReceiptsPrivacy('none')

// --- Actualizar la privacidad de quién puede añadirte a grupos
sock.updateGroupsAddPrivacy('all')
sock.updateGroupsAddPrivacy('contacts')

// --- Actualizar la privacidad de los mensajes
sock.updateMessagesPrivacy('all')
sock.updateMessagesPrivacy('contacts')
sock.updateMessagesPrivacy('nobody')

// --- Actualizar la privacidad de llamadas
sock.updateCallPrivacy('everyone')

// --- Actualizar el modo de desaparición por defecto (en segundos)
sock.updateDefaultDisappearingMode(86400)

// --- Desactivar vistas previas de enlaces
sock.updateDisableLinkPreviewsPrivacy(true)

📡 Eventos
sock.ev.on('connection.update', (update) => {})
sock.ev.on('creds.update', (update) => {})
sock.ev.on('messaging-history.set', (update) => {})
sock.ev.on('messaging-history.status', (update) => {})
sock.ev.on('chats.upsert', (update) => {})
sock.ev.on('chats.update', (update) => {})
sock.ev.on('chats.delete', (update) => {})
sock.ev.on('chats.lock', (update) => {})
sock.ev.on('lid-mapping.update', (update) => {})
sock.ev.on('presence.update', (update) => {})
sock.ev.on('contacts.upsert', (update) => {})
sock.ev.on('contacts.update', (update) => {})
sock.ev.on('messages.delete', (update) => {})
sock.ev.on('messages.update', (update) => {})
sock.ev.on('messages.media-update', (update) => {})
sock.ev.on('messages.upsert', (update) => {})
sock.ev.on('messages.reaction', (update) => {})
sock.ev.on('message-receipt.update', (update) => {})
sock.ev.on('groups.upsert', (update) => {})
sock.ev.on('groups.update', (update) => {})
sock.ev.on('group-participants.update', (update) => {})
sock.ev.on('group.join-request', (update) => {})
sock.ev.on('group.member-tag.update', (update) => {})
sock.ev.on('blocklist.set', (update) => {})
sock.ev.on('blocklist.update', (update) => {})
sock.ev.on('call', (update) => {})
sock.ev.on('labels.edit', (update) => {})
sock.ev.on('labels.association', (update) => {})
sock.ev.on('newsletter.reaction', (update) => {})
sock.ev.on('newsletter.view', (update) => {})
sock.ev.on('newsletter-participants.update', (update) => {})
sock.ev.on('newsletter-settings.update', (update) => {})
sock.ev.on('settings.update', (update) => {})

📣 Créditos
Este fork usa definiciones de Protocol Buffer mantenidas por WPP Connect vía wa-proto
El crédito total es atribuido a los mantenedores y contribuidores originales de Baileys:
 * purpshell
 * jlucaso1
 * adiwajshing
Este fork también incluye mejoras adicionales de la comunidad, adaptado y mantenido ahora bajo Mancos Baileys ESM.
> [!CAUTION]
> ⚠️ El código base e historia de modificaciones pertenece a sus respectivos autores. Este es un fork derivado.
> 
