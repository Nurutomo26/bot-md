const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Gulfi;;;'
                    + 'FN:Gulfi\n' // full name
                    + 'ORG:Gulfi;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=12053866602:+1 (205)386-6602\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Gulfi', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
