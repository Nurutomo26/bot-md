const { randomBytes } = require('crypto')

let handler = async (m, { conn, isOwner, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let chat = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive)
    let chats = Object.entries(chat).slice(0).map(entry => entry[1])
    let anu = chats.map(v => v.id)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5} detik`)
    for (let i of anu) {
    await delay(500)
    conn.reply(i,pesan + '\n' + readMore + '「 All Chat Broadcast 」\n' + randomID(32)).catch(_ => _)
    }
  m.reply('Sukses Mengirim Broadcast Ke ${anu.length} Chat')
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i

handler.owner = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
