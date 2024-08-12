import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) return conn.sendMessage(m.chat, {
	text: "> *مرحباً، أنا خدمة `Black Box Ai`، خدمة قادرة على برمجة الأكواد بجميع اللغات وحل مشاكل البرمجة، على سبيل المثال :*\n\n- #بلاك كيفية إنشاء صفحة تسجيل دخول باستخدام `html`", 
  contextInfo: {
	externalAdReply: {
	title: 'بوت ستيفن',
	body: 'قسم الذكاء الاصطناعي',
	thumbnailUrl: 'https://telegra.ph/file/5e35efc0549eb8cbcfc5c.jpg',
	sourceUrl: 'https://chat.whatsapp.com/JRz2Z2IqhfbI10PbPE5Ydq',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})
  try {
    var apii = await fetch(`https://zoro-api-zoro-bot-5b28aebf.koyeb.app/api/blackbox?text=${encodeURIComponent(text)}`);
    var res = await apii.json();
let view = res.result;

    if (res.result && text.trim().length > 0) {
      await conn.sendMessage(m.chat, {
	text: view, 
        contextInfo: {
	externalAdReply: {
	title: 'بوت ستيفن',
	body: 'قسم الذكاء الاصطناعي',
	thumbnailUrl: 'https://telegra.ph/file/5e35efc0549eb8cbcfc5c.jpg',
	sourceUrl: 'https://chat.whatsapp.com/JRz2Z2IqhfbI10PbPE5Ydq',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})

    } else if (res.result) {
      await conn.sendFile(m.chat, 'https://telegra.ph/file/34bd1de01d59fb18833cc.jpg', res.result, m);
    } else {
      throw '> *خطأ ⚠️*';
    }

  } catch (error) {
    console.error(error);
    throw '> *وقت الصمت 🤫🧏🏻‍♂️ (خطأ في واجهة برمجة التطبيقات)*';
  }
};

handler.command = ['bb', 'blackbox', 'iabox','بلاك','بوكس'];
handler.help = ['blackbox'];
handler.tags = ['أدوات'];
export default handler;
