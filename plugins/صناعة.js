let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  String.fromCharCode(8206);
  let done = '🔨';
  m.react(done)
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = 'Guru'
  let wm = 'Asliguru'

let lgocraft = `
    *█▀▀▀▀█▀▀▀█▀▀▀▀█*
                         *ᴄʀᴀꜰᴛ  ᴛᴀʙʟᴇ*
           *طـاولـة الـصـنـاعـة*
    *█▄▄▄▄█▄▄▄█▄▄▄▄█*`
let caption = `

> *˼📌˹ مــــــثــــــال╿↶*
*╮──────────────────⟢ـ*
*┇▢〉🗡️‣ ❮  ˼${usedPrefix + command} ســيــف˹  ❯*
*╯──────────────────⟢ـ*
> *˼📜˹ وصـــــفـــــة╿↶*
*╮──────────────────⟢ـ*
*┇‣ ▧ مــعــول ⛏️*
*┇‣ ▧ ســيــف 🗡️*
*┇‣ ▧ صــنــارة 🎣*
*┇‣ ▧ دـرع 🥼*
*┇‣ ▧ بـطـاقـة الـصـراف الآلـي 💳* 
*╯──────────────────⟢ـ*
> *˼⛏️˹ مـــــعــــــول╿↶*
*╮──────────────────⟢ـ*
*┇▢〉🪵‣ 55 خــشــب*
*┇▢〉🪨‣ 25 حــجــر*
*┇▢〉🔩‣ 35 حــديــد*
*╯──────────────────⟢ـ*    
> *˼⚔️˹ ســــيــــف╿↶*
*╮──────────────────⟢ـ*
*┇▢〉🪵‣ 45 خــشــب*
*┇▢〉🔩‣ 95 حــديــد*
*╯──────────────────⟢ـ*   
> *˼🎣˹ صــــــنــــــارة╿↶*
*╮──────────────────⟢ـ*
*┇▢〉🪵‣ 95 خــشــب*
*┇▢〉🔩‣ 25 حــديــد*
*┇▢〉🕸‣ 35 خــيــط*
*╯──────────────────⟢ـ*  
> *˼🥼˹ درع╿↶*
*╮──────────────────⟢ـ*
*┇▢〉🔩‣ 95 حــديــد*
*┇▢〉 ✧ ‣ 12 زمــرد*
*┇▢〉💎‣ 15 الــمــاس*
*╯──────────────────⟢ـ*        
> *˼💳˹ بـــــطـــــاقـــــة╿↶*
*╮──────────────────⟢ـ*
*┇▢〉 ✧ ‣ 10 زمــرد*
*┇▢〉💎‣ 15 الــمــاس*
*┇▢〉🪙‣ ذهـــب 50k*
*┇▢〉💰‣ نــقــود 50k*
*╯──────────────────⟢ـ*`

  try {
    if (/craft|صناعة|صنع|wCrafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'معول':
          if (user.pickaxe > 0) return m.reply('*لــديــك مــعــول بــالــفعــل ⛏️*')
            if(user.rock < 20 || user.wood < 55 || user.iron < 35) return conn.sendMessage(m.chat, { text: `> *˼‼️˹ لا تــوجــد ســلــع كــافــيــة╿↶*\n> *لــصــنــع مــعــول⛏️تــحــتــاج╿↶*\n*╮──────────────────⟢ـ*\n*┇▢〉🪵‣ 55 خــشــب* \n*┇▢〉🔩‣ 35 حــديــد*\n*┇▢〉🪨‣ 25 حــجــر*\n*╯──────────────────⟢ـ*`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].wood -= 55
            global.db.data.users[m.sender].iron -= 35
            user.rock -= 25
            global.db.data.users[m.sender].pickaxe += 1
            user.pickaxedurability = 40
            conn.sendMessage(m.chat, { text: "*نــجــحــت فــي صــنــع مــعــول ⛏️*", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
          case 'سيف':
          if (user.sword > 0) return m.reply('*لــديــك ســيــف بــالــفعــل 🗡️*')
            if(user.wood < 45 || user.iron < 95) return conn.sendMessage(m.chat, { text: `> *˼‼️˹ لا تــوجــد ســلــع كــافــيــة╿↶*\n> *لــصــنــع ســيــف🗡️تــحــتــاج╿↶*\n*╮──────────────────⟢ـ*\n*┇▢〉🪵‣ 45 خــشــب*\n*┇▢〉🔩‣ 95 حــديــد*\n*╯──────────────────⟢ـ*`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].wood -= 45
            global.db.data.users[m.sender].iron -= 95
            global.db.data.users[m.sender].sword += 1
            user.sworddurability = 40
            conn.sendMessage(m.chat, { text: "*نــجــحــت فــي صــنــع ســيــف 🗡️*", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
          case 'صنارة':
          if (user.fishingrod > 0) return m.reply('*لــديــك صــنــارة بــالــفعــل 🎣*')
            if(user.wood < 95 || user.iron < 25 || user.string < 35) return conn.sendMessage(m.chat, { text: `*┌─⊷「❏ لا تــوجــد ســلــع كــافــيــة‼️」⊶*\n*لــصــنــع صــنــارة🎣تــحــتــاج  :*\n*└──────────────⊷*\n*┌───⊷*\n*▢〉🪵‣ 95 خــشــب*\n*▢〉🔩‣ 25 حــديــد* \n*▢〉🕸️‣ 35 خــيــط*\n*└──────────────⊷*`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].wood -= 95
            global.db.data.users[m.sender].iron -= 25
            global.db.data.users[m.sender].string -= 35
            global.db.data.users[m.sender].fishingrod += 1
            user.fishingroddurability = 40
            conn.sendMessage(m.chat, { text: "*نــجــحــت فــي صــنــع صــنــارة 🎣*", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
          case 'درع':
          if (user.armor > 0) return m.reply('*لــديــك درعًــا بــالــفعــل 🥼*')
            if(user.iron < 95 || user.emerald < 12 || user.diamond < 15) return conn.sendMessage(m.chat, { text: `> *˼‼️˹ لا تــوجــد ســلــع كــافــيــة╿↶*\n> *لــصــنــع درعًــا🥼تــحــتــاج╿↶*\n*╮──────────────────⟢ـ*\n*┇▢〉🔩‣ 95 حــديــد*\n*┇▢〉  ✧ ‣  12 زمــرد*\n*┇▢〉💎‣ 15 الــمــاس*\n*╯──────────────────⟢ـ*`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].emerald -= 12
            global.db.data.users[m.sender].iron -= 95
            global.db.data.users[m.sender].diamond -= 15
            global.db.data.users[m.sender].armor += 1
            user.armordurability = 50
            conn.sendMessage(m.chat, { text: "*نــجــحــت فــي صــنــع درعًــا 🥼*", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
            case 'بطاقة':
          if (user.atm > 0) return m.reply('*لــديــك بــطــاقــة بــالــفعــل 💳*')
            if(user.emerald < 10 || user.money < 50000 || user.credit < 50000 || user.diamond < 5) return conn.sendMessage(m.chat, { text: `> *˼‼️˹ لا تــوجــد ســلــع كــافــيــة╿↶*\n*لــصــنــع بــطــاقــة💳تــحــتــاج╿↶*\n*╮──────────────────⟢ـ*\n*┇▢〉💲‣ 50000 نــقــود*\n*┇▢〉  ✧ ‣  10 زمــرد*\n*┇▢〉🪙‣ 50000 ذهــب*\n*┇▢〉💎‣ 5 الــمــاس*\n*╯──────────────────⟢ـ*`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].emerald -= 10
            global.db.data.users[m.sender].money -= 50000
            global.db.data.users[m.sender].credit -= 50000
            global.db.data.users[m.sender].diamond -= 5
            global.db.data.users[m.sender].atm += 1
            conn.sendMessage(m.chat, { text: "*نــجــحــت فــي صــنــع بــطــاقــة 💳*", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
            default:
            return conn.sendMessage(m.chat, { text: lgocraft + caption, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
        }
      }
  } catch (e) {
    conn.reply(m.chat, '*عذرًا، حدث خطأ أثناء تشغيل الأمر*!', m)
    if (DevMode) {
      m.reply(`*خطأ:* ${util.format(e)}`)
    }
  }
}
handler.help = ['crafting','صنع','صناعة',]
handler.tags = ['rpg']
handler.command = /^(craft|صناعة|صنع)$/i
handler.group = true

export default handler
