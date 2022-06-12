let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let anu = await fetch(global.API('neoxr', '/api/tiktok', { url: args[0] }, 'apikey'))
    let json = await anu.json()
    conn.sendFile(m.chat, json.data.video, 'tiktok.mp4', `
- Author: ${json.author}
- Caption: ${json.caption}`.trim(), m)
}
handler.help = ['tiktok', 'tiktoknowm', 'tt'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tt|tik(tok)?(dl|nowm)?)$/i

module.exports = handler
