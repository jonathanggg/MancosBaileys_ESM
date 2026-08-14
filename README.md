# 🌱 Mancos Baileys ESM ☄️

[![Logo](https://files.catbox.moe/c5s9g0.jpg)](https://www.npmjs.com/package/mancos-baileys-esm)

<p align="center">
   Baileys v7 mejorado con correcciones para la subida de multimedia en canales (newsletters), además de soporte para mensajes interactivos, álbumes y tipos de mensajes adicionales.
   <br><br>
   <a href="https://www.npmjs.com/package/mancos-baileys-esm">
      <img src="https://img.shields.io/npm/v/mancos-baileys-esm?style=for-the-badge&logo=npm"/>
   </a>
   <a href="https://www.npmjs.com/package/mancos-baileys-esm">
      <img src="https://img.shields.io/npm/dm/mancos-baileys-esm?style=for-the-badge&logo=npm"/>
   </a>
   <a href="#">
      <img src="https://img.shields.io/github/stars/mancos/baileys-esm?style=for-the-badge&logo=github"/>
   </a>
   <a href="LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge"/>
   </a>
   <a href="https://nodejs.org">
      <img src="https://img.shields.io/badge/node-%3E%3D20-339933?logo=node.js&labelColor=green&logoColor=white&style=for-the-badge"/>
   </a>
   <a href="#">
      <img src="https://img.shields.io/badge/ESM-only?logo=javascript&labelColor=yellow&logoColor=black&style=for-the-badge"/>
   </a>
</p>

### ✨ Puntos Destacados

Este fork está diseñado para uso en producción con un enfoque en la claridad y la seguridad:

- 🚫 Sin ofuscación. Fácil de leer y auditar.
- 🚫 Sin comportamiento de auto-seguimiento de canales (newsletters).

> [!NOTE]
> 📄 Este proyecto se mantiene con un alcance limitado y no pretende reemplazar al Baileys original.

### 📋 Tabla de Contenidos
- [📋 Tabla de Contenidos](#-tabla-de-contenidos)
- [✨ Puntos Destacados](#-puntos-destacados)
- [🛠️ Ajustes Internos](#%EF%B8%8F-ajustes-internos)
- [📨 Manejo de Mensajes y Compatibilidad](#-manejo-de-mensajes-y-compatibilidad)
- [🧩 Opciones Adicionales de Mensaje](#-opciones-adicionales-de-mensaje)
- [📥 Instalación](#-instalación)
   - [🧩 Importación (ESM & CJS)](#-importación-esm--cjs)
- [🌐 Conectar a WhatsApp (Paso Rápido)](#-conectar-a-whatsapp-paso-rápido)
   - [🔐 Estado de Autenticación (Auth State)](#-estado-de-autenticación-auth-state)
- [🗄️ Implementando Data Store](#%EF%B8%8F-implementando-data-store)
- [🪪 Explicación de los IDs de WhatsApp](#-explicación-de-los-ids-de-whatsapp)
- [✉️ Enviando Mensajes](#%EF%B8%8F-enviando-mensajes)
   - [🔠 Texto](#-texto)
   - [🔔 Mención](#-mención)
   - [😁 Reacción](#-reacción)
   - [📌 Fijar Mensaje](#-fijar-mensaje)
   - [🔖 Mantener Chat](#-mantener-chat)
   - [➡️ Reenviar Mensaje](#%EF%B8%8F-reenviar-mensaje)
   - [👤 Contacto](#-contacto)
   - [📍 Ubicación](#-ubicación)
   - [🗓️ Evento](#%EF%B8%8F-evento)
   - [👥 Invitación a Grupo](#-invitación-a-grupo)
   - [🛍️ Producto](#%EF%B8%8F-producto)
   - [📊 Encuesta](#-encuesta)
   - [💭 Respuesta de Botón](#-respuesta-de-botón)
   - [✨ Respuesta Enriquecida](#-respuesta-enriquecida)
   - [🧾 Mensaje con Bloque de Código](#-mensaje-con-bloque-de-código)
   - [🌏 Mensaje con Entidades en Línea](#-mensaje-con-entidades-en-línea)
   - [📋 Mensaje con Tabla](#-mensaje-con-tabla)
   - [🎞️ Mención de Estado](#%EF%B8%8F-mención-de-estado)
- [📁 Enviando Mensajes Multimedia](#-enviando-mensajes-multimedia)
   - [🖼️ Imagen](#%EF%B8%8F-imagen)
   - [🎥 Video](#-video)
   - [📃 Sticker](#-sticker)
   - [💽 Audio](#-audio)
   - [🗂️ Documento](#%EF%B8%8F-documento)
   - [🖼️ Álbum (Imagen y Video)](#%EF%B8%8F-álbum-imagen--video)
   - [📦 Paquete de Stickers](#-paquete-de-stickers)
- [👉🏻 Enviando Mensajes Interactivos](#-enviando-mensajes-interactivos)
   - [🔘 Botones](#-botones)
   - [📋 Lista](#-lista)
   - [🗄️ Interactivo](#%EF%B8%8F-interactivo)
   - [🫙 Plantilla Hidratada (Hydrated Template)](#-plantilla-hidratada-hydrated-template)
- [💳 Enviando Mensajes de Pago](#-enviando-mensajes-de-pago)
   - [➕ Invitar al Pago](#-invitar-al-pago)
   - [🧾 Factura (Invoice)](#-factura-invoice)
   - [🛍️ Pedido (Order)](#%EF%B8%8F-pedido-order)
   - [💳 Solicitar Pago](#-solicitar-pago)
- [👁️ Otras Opciones de Mensaje](#%EF%B8%8F-otras-opciones-de-mensaje)
   - [🤖 Icono de IA](#-icono-de-ia)
   - [🕒 Efímero (Temporal)](#-efímero)
   - [📰 Respuesta de Anuncio Externo (External Ad Reply)](#-respuesta-de-anuncio-externo-external-ad-reply)
   - [🧑‍🧑‍🧒 Estado de Grupo](#%E2%80%8D%E2%80%8D-estado-de-grupo)
   - [🐱 Sticker Lottie](#-sticker-lottie)
   - [🧩 Raw (Puro)](#-raw)
   - [🏷️ Etiqueta de Servicio Meta Seguro](#%EF%B8%8F-etiqueta-de-servicio-meta-seguro)
   - [📑 Spoiler](#-spoiler)
   - [👁️ Ver Una Vez](#%EF%B8%8F-ver-una-vez)
   - [👁️ Ver Una Vez V2](#%EF%B8%8F-ver-una-vez-v2)
   - [👁️ Ver Una Vez V2 Extensión](#%EF%B8%8F-ver-una-vez-v2-extensión)
- [♻️ Modificar Mensajes](#%EF%B8%8F-modificar-mensajes)
   - [🗑️ Borrar Mensajes](#%EF%B8%8F-borrar-mensajes)
   - [✏️ Editar Mensajes](#%EF%B8%8F-editar-mensajes)
- [🧰 Contenidos Adicionales](#-contenidos-adicionales)
   - [🏷️ Encontrar ID de Usuario (JID|PN/LID)](#%EF%B8%8F-encontrar-id-de-usuario-jidpnlid)
   - [🔑 Solicitar Código de Emparejamiento Personalizado](#-solicitar-código-de-emparejamiento-personalizado)
   - [🖼️ Procesamiento de Imágenes](#%EF%B8%8F-procesamiento-de-imágenes)
   - [📣 Gestión de Canales (Newsletters)](#-gestión-de-canales-newsletters)
   - [👥 Gestión de Grupos](#-gestión-de-grupos)
   - [👥 Gestión de Comunidades](#-gestión-de-comunidades)
   - [👤 Gestión de Perfil](#-gestión-de-perfil)
   - [🛒 Gestión de Negocios](#-gestión-de-negocios)
   - [🔐 Gestión de Privacidad](#-gestión-de-privacidad)
   - [📡 Eventos](#-eventos)
- [📣 Créditos](#-créditos)

### 🛠️ Ajustes Internos
- 🖼️ Se solucionó un problema por el cual los archivos multimedia no se podían enviar a canales (newsletters) debido a un error de origen.
- 📁 Se reintrodujo `makeInMemoryStore` con una adaptación ESM mínima y pequeños ajustes para Baileys v7.
- 📦 Se cambió la ejecución de FFmpeg de `exec` a `spawn` para un manejo de procesos más seguro.
- 🗃️ Se añadió `@napi-rs/image` como backend de procesamiento de imágenes compatible en `getImageProcessingLibrary()`, ofreciendo un equilibrio entre rendimiento y compatibilidad.

### 📨 Manejo de Mensajes y Compatibilidad
- 📩 Soporte ampliado de mensajes para:
   - 🖼️ Mensaje de Álbum
   - 👤 Mensaje de Estado de Grupo
   - 👉🏻 Mensaje Interactivo (botones, listas, native flows, plantillas, carruseles).
   - 🎞️ Mensaje de Mención de Estado
   - 📦 Mensaje de Paquete de Stickers
   - ✨ Mensaje de Respuesta Enriquecida **[NUEVO]**
   - 🧾 Mensaje con Bloques de Código **[NUEVO]**
   - 🌏 Mensaje con Entidades en Línea **[NUEVO]**
   - 📋 Mensaje con Tabla **[NUEVO]**
   - 💳 Mensaje relacionado con pagos (solicitudes de pago, invitaciones, pedidos, facturas).
- 📰 Se simplificó el envío de mensajes con miniaturas de anuncios usando `externalAdReply`, sin necesidad de crear un `contextInfo` manualmente.
- 💭 Soporte añadido para citar mensajes dentro de los canales (newsletters). **[NUEVO]**
- 🎀 Soporte añadido para icono de botón personalizado. **[NUEVO]**

### 🧩 Opciones Adicionales de Mensaje
- 👁️ Banderas booleanas opcionales añadidas para el manejo de mensajes:  
   - 🤖 `ai` - Icono de IA en el mensaje
   - 📣 `mentionAll` - Mencionar a todos los participantes del grupo sin requerir sus JIDs en `mentions` o `mentionedJid` **[NUEVO]**
   - 🔧 `ephemeral`, `groupStatus`, `isLottie`, `spoiler`, `viewOnce`, `viewOnceV2`, `viewOnceV2Extension`, `interactiveAsTemplate` - Envoltorios de mensajes
   - 🔒 `secureMetaServiceLabel` - Etiqueta de servicio meta seguro en el mensaje **[NUEVO]**
   - 📄 `raw` - Construye tu mensaje manualmente **(NO USAR PARA EXPLOTACIÓN)**

### 📥 Instalación

- 📄 Vía `package.json`

```json
# NPM
"dependencies": {
   "mancos-baileys-esm": "latest"
}

# GitHub
"dependencies": {
   "mancos-baileys-esm": "github:mancos/baileys-esm"
}
