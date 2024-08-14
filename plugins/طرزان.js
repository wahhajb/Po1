const handler = async (m, { conn, command, text }) => {
  const lovePercentage = Math.floor(Math.random() * 100);
  const isHighLove = lovePercentage >= 50;
  const loveDescription = isHighLove ? "" : "";
  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const response =
    `✦•━━━━ ∘⊰🔥⊱∘ ━━━━•✦\n` +
    `${text} •  ﺎلشيخ ﺎلأسمّر جالاد الخرفان  ` +
    `\n✦•━━━━ ∘⊰🔥⊱∘ ━━━━•✦` +
    ``    

  async function loading() {
var hawemod = [
      "⌯ عمك",
      "⌯ الشيخ",
      "⌯ • ﺎلشيخ ﺎلأسمّر ゑ . .",
      "⌯ هو جلاد الخرفان",
      "⌯ ونايك",
      "⌯ كسم المجال",
      "⌯ وفحل",
      "⌯ كمن",
      "⌯ شرموط",
      "⌯ يعمل",
      "⌯ في مطاردة",
      "⌯ الخرفان",
      "⌯ ونيك ارقامهم",
      "⌯ وتشرديهم",
      "⌯ من كل",
      "⌯ من كل مكان"
]
   let { key } = await conn.sendMessage(m.chat, {text: `⌯ تعريف فحل المجال`, mentions: conn.parseMention(response)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
};
handler.help = ['love'];
handler.tags = ['fun'];
handler.command = /^(الشيخ-الاسمر|اسمر)$/i;
export default handler;
