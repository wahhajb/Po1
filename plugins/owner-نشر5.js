// الكود ده متعدل بواسطة: https://github.com/GataNina-Li & https://github.com/elrebelde21

import { randomBytes } from 'crypto'

let handler = async (m, { conn, command, participants, usedPrefix, text }) => { 
    if (!text) return '*⚠️ حط النص اللي عايز تبعته بقى!*' 
    let fkontak = { 
        "key": { 
            "participants":"0@s.whatsapp.net", 
            "remoteJid": "status@broadcast", 
            "fromMe": false, 
            "id": "Halo" 
        }, 
        "message": { 
            "contactMessage": { 
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${conn.user.jid.split('@')[0]}:${conn.user.jid.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
            }
        }, 
        "participant": "0@s.whatsapp.net" 
    } 
    
    let cc4 = text ? m : m.quoted ? await m.getQuotedObj() : false || m
    let teks4 = text ? text : cc4.text 
    let groups2 = Object.keys(await conn.groupFetchAllParticipating())
    let chats2 = Object.keys(global.db.data.users).filter(user => user.endsWith('@s.whatsapp.net'))
    
    await conn.reply(m.chat, '*🚀 جاري إرسال الرسالة لكل الشاتات*\n\n*🔔 ملحوظة: ممكن ما تتبعتش لكل الشاتات*', m)
    
    let start2 = new Date().getTime()
    let usersTag2 = participants.map(u => conn.decodeJid(u.id))
    let totalPri2 = 0
    
    for (let i = 0; i < groups2.length; i++) {
        const group = groups2[i];
        const delay = i * 6000; // 6 ثواني
        setTimeout(async () => {
            await conn.reply(group, `––––––『 *البث* 』––––––\n\n` + teks4, { mentions: usersTag2 }, { quoted: fkontak });
        }, delay)
    }
    
    for (let user of chats2) {
        await new Promise(resolve => setTimeout(resolve, 5000)) // 5 ثواني
        await conn.reply(user, `––––––『 *البث* 』––––––\n\n` + teks4, fkontak, null)
        totalPri2++
        if (totalPri2 >= 500000) { 
            break
        }
    }  
    
    let end2 = new Date().getTime()
    let totalPrivate2 = chats2.length
    let totalGroups2 = groups2.length
    let total2 = totalPrivate2 + totalGroups2
    let time2 = Math.floor((end2 - start2) / 1000)
    
    if (time2 >= 60) {
        let minutes = Math.floor(time2 / 60)
        let seconds = time2 % 60
        time2 = `${minutes} دقيقة و ${seconds} ثانية`
    } else {
        time2 = `${time2} ثانية`
    } 
    
    await m.reply(`📑 الرسالة اتبعتت لـ:
    \`\`\`الشاتات الخاصة >> ${totalPrivate2}\`\`\`
    \`\`\`شاتات الجروبات >> ${totalGroups2}\`\`\`
    \`\`\`كل الشاتات >> ${total2}\`\`\`\n\n*الوقت الكلي للإرسال: ${time2}*\n${totalPri2 >= 500000 ? `\n*ملحوظة: ممكن يكون فيه مشاكل في البث وما تتبعتش لكل الشاتات، سامحونا بقى*` : ''}`)        
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <نص>')
handler.tags = ['owner']
handler.command = /^(comunicar|بث|اذاعه|نشر|صيح|ذيع|comunicado|broadcastall|bc)$/i

handler.owner = true

export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

/*import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { conn.sendButton(id, `*╔══❰ 𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐃𝐎 ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '𝙀𝙎𝙏𝙀 𝙀𝙎 𝙐𝙉 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 𝙾𝚆𝙽𝙴𝚁 🤖', '.owner'],['💎 𝙳𝙾𝙽𝙰𝚁 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'ᴄᴏᴍᴜɴɪᴄᴀᴅᴏ ᴏғɪᴄɪᴀʟ ᴀ ᴛᴏᴅᴏs ʟᴏs ᴄʜᴀᴛs',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ', 
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
}
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰 𝚃𝙾𝙳𝙾𝚂 𝙻𝙾𝚂 𝙲𝙷𝙰𝚃𝚂*\n\n*𝐍𝐎𝐓𝐀: 𝙴𝚂 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝚀𝚄𝙴 𝚃𝙴𝙽𝙶𝙰 𝙵𝙰𝙻𝙻𝙾𝚂 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚈 𝙽𝙾 𝚂𝙴 𝙴𝙽𝚅𝙸𝙴 𝙰 𝚃𝙾𝙳𝙾𝚂 𝙻𝙾𝚂 𝙲𝙷𝙰𝚃𝚂, 𝙳𝙸𝚂𝙲𝚄𝙻𝙿𝙴 𝙿𝙾𝚁 𝙴𝙻 𝙼𝙾𝙼𝙴𝙽𝚃𝙾*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <نص>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler*/