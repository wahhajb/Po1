let handler = async (m, { conn }) => {
  let message = `˼❄️˹┊「 مرحبآ ↫ 」\n> اهـلًا مـعـك بـوت العقرب > لـلمـساعـدة اكــتب اوامـر او شـرح\n> لإضافة البوت لقروبك اكـتب الـمـطـور\n*✧━━ • ━ 「  ✤  」 ━ • ━━✧*
\n> ❯⏐ 𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵`;

  conn.sendFile(m.chat, 'https://telegra.ph/file/4f157080d48652404074d.mp4','image.jpg', message, m);
};


handler.command = /^(نايت)$/i 

export default handler;