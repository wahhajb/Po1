 const canal2 = 'https://telegra.ph/file/078014e17aedf4f7a6cd9.jpg'; 

let handler = async (m, { conn, usedPrefix, command, Text }) => {
  if (command === 'فزورة') {
    const question = 'ما الشيء الذي كلما زاد نقص؟';
    const buttons = [
      { buttonId: 'answer1', buttonText: { displayText: 'العمر' }, type: 1 },
      { buttonId: 'answer2', buttonText: { displayText: 'الحفرة' }, type: 1 },
      { buttonId: 'answer3', buttonText: { displayText: 'الظل' }, type: 1 }
    ];

    const buttonMessage = {
      text: question,
      footer: 'اختَر الإجابة الصحيحة',
      buttons: buttons,
    };

    await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
  } 
  else if (['answer1', 'answer2', 'answer3'].includes(command)) {
    let response;
    if (command === 'answer1') {
      response = "مبروك! إجابة صحيحة: العمر.";
    } else {
      response = "خطأ! الإجابة الصحيحة هي العمر.";
    }

    await conn.sendMessage(m.chat, { text: response }, { quoted: m });
    await conn.sendMessage(m.chat, {
      text: "تريد تلعب تاني؟",
      buttons: [{ buttonId: 'فزورة', buttontext: { displayText: 'كمل لعب' }, type: 1 }],
      footer: 'اختَر الإجابة الصحيحة',
      headerType: 1
    }, { quoted: m });
  }
};

handler.command = /^(فز|answer1|answer2|answer3)$/i;

export default handler;