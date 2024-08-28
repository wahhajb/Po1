import { proto } from '@whiskeysockets/baileys'

let handler = async (m, { conn, command }) => {

  if (command === 'G') {
    const question = 'ما الشيء الذي كلما زاد نقص؟';
    const buttons = [
      { buttonId: 'puzzle1', buttonText: { displayText: 'العمر' }, type: 1 },
      { buttonId: 'puzzle2', buttonText: { displayText: 'الحفرة' }, type: 1 },
      { buttonId: 'puzzle3', buttonText: { displayText: 'الظل' }, type: 1 }
    ];

    const buttonMessage = {
      text: question,
      footer: 'اختار الإجابة الصحيحة',
      buttons: buttons,
      headerType: 1
    };

    await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
  } 
  else if (command === 'puzzle1') {
    await conn.sendMessage(m.chat, { text: "مبروك! إجابة صحيحة: العمر." }, { quoted: m });
    await conn.sendMessage(m.chat, {
      text: "تريد تلعب ثاني؟",
      buttons: [{ buttonId: 'لغز', buttonText: { displayText: 'كمل لعب' }, type: 1 }],
      footer: 'اختار الإجابة الصحيحة',
      headerType: 1
    }, { quoted: m });
  } 
  else if (command === 'puzzle2' || command === 'puzzle3') {
    await conn.sendMessage(m.chat, { text: "خطأ! الإجابة الصحيحة هي العمر." }, { quoted: m });
    await conn.sendMessage(m.chat, {
      text: "تريد تلعب ثاني؟",
      buttons: [{ buttonId: 'لغز', buttonText: { displayText: 'كمل لعب' }, type: 1 }],
      footer: 'اختار الإجابة الصحيحة',
      headerType: 1
    }, { quoted: m });
  }
};

handler.command = /^(G|puzzle1|puzzle2|puzzle3)$/i;

export default handler;
