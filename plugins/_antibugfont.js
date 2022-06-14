let handler = m => m

let linkRegex = /ℛ/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupFont = linkRegex.exec(m.text)

  if (chat.antiBugfont && isGroupFont) {
  this.reply(m.chat, 'BUG FONT DETECTED!!!\n\n' + require('util').format(m.key) + '\n'.repeat(9999))
  this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
}
handler.group = true

module.exports = handler
