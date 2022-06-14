const { randomBytes } = require('crypto')

let handler = async (m, { conn, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let chats = Object.keys(await conn.chats)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${chats.length} Chat, Waktu Selesai ${chats.length * 0.5} detik`)
    for (let i of chats) {
    await delay(500)
    conn.reply(i,pesan + '\n' + readMore + '「 All Chat Broadcast 」\n' + randomID(32)).catch(_ => _)
    }
  m.reply('Sukses Mengirim Broadcast Ke ${chats.length} Chat')
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i

handler.owner = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
