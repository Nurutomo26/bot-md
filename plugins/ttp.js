let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  conn.sendFile(m.chat, global.API('xteam', '/ttp', { file: '', text: teks }), 'ttp.webp', '', m, false, { asSticker: true })
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']

handler.command = /^ttp$/i

module.exports = handler
