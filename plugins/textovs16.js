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
    const str = `𝐿𝐼𝑆𝑇𝐴 𝐷𝐸 𝐵𝑈𝐺𝑆 𝐵𝑈𝑁𝑁𝑌🐇🥕
🐇𝙼𝙾𝙳𝙰𝙻𝙻𝙳𝙰𝙳: *16vs16*
🥕𝙷𝙾𝚁𝙰: 

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1

🐇•
🥕•
🐇•
🥕•

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 2

🐇•
🥕•
🐇•
🥕•

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 3

🐇•
🥕•
🐇•
🥕•

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 4

🐇•
🥕•
🐇•
🥕•

𝗦𝗨𝗣𝗟𝗘𝗡𝗧𝗘𝗦/𝗥𝗢𝗧𝗔𝗖𝗜𝗢𝗡𝗘𝗦

🐇•
🥕•

𝗗𝗢𝗡𝗔𝗗𝗢𝗥 𝗗𝗘 𝗦𝗔𝗟𝗔

🐇•

•𝘾𝙐𝘼𝙇𝙌𝙐𝙄𝙀𝙍 𝘿𝙐𝘿𝘼 𝙌𝙐𝙀 𝙏𝙀𝙉𝙂𝘼𝙉 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼𝙍 

•𝗖𝗨𝗠𝗣𝗟𝗜𝗥 𝗖𝗢𝗡 𝗟𝗔𝗦 𝗥𝗘𝗚𝗟𝗔𝗦 𝗤𝗨𝗘 𝗦𝗘 𝗟𝗘𝗦 𝗗𝗔 𝗬 𝗘𝗦𝗧𝗔𝗥 10 𝗠𝗜𝗡𝗨𝗧𝗢𝗦 𝗔𝗡𝗧𝗘𝗦`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ â¹ï¸ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(pa16|16v16|16vs16)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
