import speed from "performance-now";

let handler = async (m, { conn }) => {
  let ini_timestamp = speed();
  let ini_latensi = speed() - ini_timestamp;
  let text_ping = `                               *⟬ 𝐁𝐨𝐭 ⟭*\n*رجاء الانتظار قليلا يتم قياس السرعة...*\n*The result after bot checking network connect↓*\n〔 𝖯𝗂𝗇𝗀 ↣ ${ini_latensi.toFixed(4)}〕\n         *╰────⎔⟬ 𝐁𝐨𝐭 ⟭⎔────╯*`;
  conn.reply(m.chat,text_ping);
};
handler.command = ["ping" ,  "بنج" ,  "test"]
handler.rowner = true
export default handler; 
