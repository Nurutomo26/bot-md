let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
    if (m.messageStubType === 68) {
        let log = {
            key: m.key,
            content: m.msg,
            sender: m.sender
        }
        this.reply(m.chat, 'VIRUS DETECTED\n\n' + require('util').format(log) + '\n'.repeat(9999))
    }
}

module.exports = handler
