const { areJidsSameUser } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let demoteUser = []
    for (let user of users)
        if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
            const res = await conn.groupParticipantsUpdate(m.chat, [user], 'demote')
            demoteUser.concat(res)
            await delay(1 * 1000)
        }
    m.reply(`Berhasil demote ${demoteUser.map(v => '@' + v.split('@')[0])}`, null, { mentions: demoteUser })
}
handler.help = ['demote','member','↓'].map(v => v + ' @user')
handler.tags = ['group']

handler.command = /^(demote|member|↓)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))