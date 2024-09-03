import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const name = conn.getName(m.sender);
  if (!text) {
    throw `يا هلا *${name}*، عاوز تتكلم؟ رد بقى مع *${usedPrefix + command}* (رسالتك)\n\n📌 مثال: *${usedPrefix + command}* هلا إزايك`;
  }

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `text=${encodeURIComponent(text)}&lc=en&key=`
  };

  const res = await fetch('https://api.simsimi.vn/v1/simtalk', options);
  const json = await res.json();

  if (json.status === '200') {
    const reply = json.message;

    // نتأكد إذا كان سيمسمي عاوز يتعلم حاجة ونعلمه
    if (reply.includes("Teach me")) {
      const teachOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `ask=${encodeURIComponent(text)}&ans=${encodeURIComponent(reply)}&lc=en&key=`
      };

      await fetch('https://api.simsimi.vn/v1/teach', teachOptions);
      throw `يا هلا *${name}*، سمسم اتعلم من ردك!`;
    }

    m.reply(reply);
  } else {
    throw json.message; // هنرمي الرسالة كخطأ لو في مشكلة
  }
};

handler.help = ['bot'];
handler.tags = ['fun'];
handler.command = ['سمسم'];
handler.owner = false;

export default handler;