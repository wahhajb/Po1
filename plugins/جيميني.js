import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    return conn.sendMessage(m.chat, {
	text: "⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢\n> *مرحبًا، أنا خدمة `Gemini Ai`، خدمة قادرة على كتابة المقالات وكتابة الاكواد البرمجية، على سبيل المثال:*\n\n- .ستيفن `كتابة مقال عن الذكاء الاصطناعي`\n⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢", 
  contextInfo: {
	externalAdReply: {
	title: 'بوت ستيفن',
	body: 'قسم الذكاء الاصطناعي',
	thumbnailUrl: 'https://telegra.ph/file/5e35efc0549eb8cbcfc5c.jpg',
	sourceUrl: 'https://chat.whatsapp.com/JRz2Z2IqhfbI10PbPE5Ydq',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})
  }

  try {

    const apiUrl = `https://aemt.me/gemini?text=${text}`;
    const response = await fetch(apiUrl);
    const res = await response.json();

    if (res.result.length > 0) {
      conn.sendMessage(m.chat, {
	text: res.result, 
  contextInfo: {
	externalAdReply: {
	title: 'بوت ستيفن',
	body: 'قسم الذكاء الاصطناعي',
	thumbnailUrl: 'https://telegra.ph/file/5e35efc0549eb8cbcfc5c.jpg',
	sourceUrl: 'https://chat.whatsapp.com/JRz2Z2IqhfbI10PbPE5Ydq',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})
    } else {
      throw '⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢\n> خطأ : لم يتم العثور على الإجابة، يرجى المحاولة مجددًا.\n⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢';
    }

  } catch (error) {
    console.error(error);
    throw '⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢\n> خطأ : انتهت مدة الجلسة، يرجى المحاولة لاحقًا.\n⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢';
  }
};

handler.command = ['gi', 'gemini', 'ستيفن','جيميني'];
handler.help = ['gemini'];
handler.tags = ['أدوات'];
export default handler;
