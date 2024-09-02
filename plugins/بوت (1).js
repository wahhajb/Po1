.gps ahme | import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
    if (!text) throw اكتب نص عشان أعمل صورة بـ DALL-E (الذكاء الاصطناعي)\n\n*مثال:\n*ɞ ${usedPrefix + command} قطط بتعيط\n*ɞ ${usedPrefix + command} قطة لونها بنفسجي مع أزرق موجودة على كوكب المشترى، بتنور الكون بجمالها بتأثير مينيملست.;
    
    await conn.sendMessage(m.chat, {text: '⌛ استنى لحظة من فضلك...'}, {quoted: m});
    
    try {
        const response = await fetch(https://api-xovvip.vercel.app/text2img?text=${encodeURIComponent(text)});
        if (!response.ok) throw new Error('Network response was not ok');
        
        const buffer = await response.buffer();
        
        await conn.sendMessage(m.chat, {image: buffer}, {quoted: m});
    } catch {
        throw حصل خطأ، (السيرفر واقع) جرب تاني بعد شوية.;
    }
}

handler.command = ['h'];
export default handler;
