import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/monogay.mp3'
    const img = '';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `🗒️𝑹𝒆𝒈𝒍𝒂𝒔 𝑪𝑳𝑲🗒️
*𝑯𝑨𝑩𝑰𝑳𝑰𝑫𝑨𝑫 𝑨𝑪𝑻𝑰𝑽𝑨: 𝑨𝑳𝑶𝑲*

*𝑯𝑨𝑩𝑰𝑳𝑰𝑫𝑨𝑫𝑬𝑺 𝑷𝑨𝑺𝑰𝑽𝑨𝑺:* 𝑴𝒐𝒄𝒐, 𝑲𝒆𝒍𝒍𝒚 𝒚 𝑴𝒂𝒙𝒊𝒎

𝑷𝒓𝒊𝒎𝒆𝒓𝒂 𝑹𝒐𝒏𝒅𝒂 𝑫𝒆𝒔𝒆𝒓𝒕, 𝒅𝒆𝒔𝒑𝒖𝒆𝒔 𝒏𝒐 𝒗𝒂𝒍𝒆.

*𝑨𝒓𝒎𝒂𝒔:* 𝑺𝑶𝑳𝑶 𝑼𝑴𝑷
1 𝑴10 𝑷𝑶𝑹 𝑬𝑸𝑼𝑰𝑷𝑶

*𝑷𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐:* 

*𝑨𝒍𝒕𝒖𝒓𝒂𝒔:* 𝑺𝒐𝒍𝒐 𝒄𝒂𝒋𝒂𝒔, 𝒂𝒖𝒕𝒐𝒔 𝒚 𝒄𝒐𝒏𝒕𝒂𝒊𝒏𝒆𝒓𝒔 (𝑴𝒐𝒏𝒕𝒂𝒏̃𝒂 𝒅𝒆 𝒎𝒊𝒍𝒍 
𝒑𝒂𝒓𝒕𝒆 𝒂𝒍𝒕𝒂 𝒏𝒐 𝒗𝒂𝒍𝒆)

𝑵𝒊𝒏𝒈𝒖𝒏 𝒕𝒊𝒑𝒐 𝒅𝒆 𝒈𝒓𝒂𝒏𝒂𝒅𝒂𝒔.


𝑷𝒓𝒊𝒎𝒆𝒓𝒂 𝒔𝒂𝒍𝒂: 𝒓𝒊𝒗𝒂𝒍
𝑺𝒆𝒈𝒖𝒏𝒅𝒂: 𝑪𝒍𝒂𝒏
𝑻𝒆𝒓𝒄𝒆𝒓𝒂: 𝒑𝒆𝒓𝒅𝒆𝒅𝒐𝒓 𝒅𝒆 𝒑𝒓𝒊𝒎𝒆𝒓𝒂

𝑪𝒓𝒆𝒂𝒄𝒊𝒐𝒏 𝒅𝒆 𝒍𝒂 𝒔𝒂𝒍𝒂:
200𝑯𝒑
𝑨𝒅𝒊𝒕𝒂𝒎𝒆𝒏𝒕𝒐𝒔: 𝑵𝒐
𝑨𝒊𝒓𝒅𝒓𝒐𝒑: 𝑵𝒐
𝑨𝒊𝒓𝒅𝒓𝒐𝒑 𝒄𝒊𝒃𝒆𝒓𝒏𝒆𝒕𝒊𝒄𝒐: 𝑵𝒐
𝑨𝒕𝒓𝒊𝒃𝒖𝒕𝒐𝒔 𝒅𝒆𝒍 𝑨𝒓𝒎𝒂: 𝑵𝒐
𝑴𝒖𝒏𝒊𝒄𝒊𝒐𝒏𝒆𝒔 𝒍𝒊𝒎𝒊𝒕𝒂𝒅𝒂𝒔: 𝑺𝒊

𝑺𝑨𝑳𝑨   𝑨𝑽𝑨𝑵𝒁𝑨𝑫𝑨:
𝑫𝑬𝑺𝑬𝑹𝑻
𝑼𝑴𝑷
𝑴10
𝑷𝑨𝑹𝑬𝑫 𝑮𝑳𝑶𝑶
𝑪𝑨𝑱𝑨 𝑫𝑬 𝑹𝑬𝑷𝑨𝑹𝑨𝑪𝑰𝑶𝑵
𝑪𝑨𝑺𝑪𝑶 𝒀 𝑪𝑯𝑨𝑳𝑬𝑪𝑶 𝑵𝑽𝑳 2
𝑯𝑶𝑵𝑮𝑶 𝑵𝑽𝑳 3`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'monogay.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'monogay.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ â¹ï¸ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(Clk|CLK|clk|REGLAS|Reglas||reglas|REGLASCLK|ReglasCLK|reglasCLK|Reglasclk|ReglasCompe|reglascompe|REGLASCOMPE|COMPE|compe|Compe)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
