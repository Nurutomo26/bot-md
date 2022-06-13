const { areJidsSameUser } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let promoteUser = []
    for (let user of users)
        if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
            const res = await conn.groupParticipantsUpdate(m.chat, [user], 'promote')
            promoteUser.concat(res)
            await delay(1 * 1000)
        }
    m.reply(`Berhasil promote ${promoteUser.map(v => '@' + v.split('@')[0])}`, null, { mentions: promoteUser })
}
handler.help = ['promote','admin','^', '↑'].map(v => v + ' @user')
handler.tags = ['group']

handler.command = /^(promote|admin|\^|↑)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))