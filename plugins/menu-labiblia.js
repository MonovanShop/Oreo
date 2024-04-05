import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `*[â] Los comandos +18 estÃ¡n desactivados en este grupo, si es admin y desea activarlos use ${usedPrefix}enable modohorny*`; 
  try {
    const pp = imagen9;
    const vn = './media/La biblia.mp3';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `ââ _*BUGS BUNNY*_ ââ

 ð°ð¥  *Hola,* ${taguser}

         ââ _*LA BIBLIA*_ ââ

ð°ð¥ _${usedPrefix}pack_
ð°ð¥ _${usedPrefix}pack2_
ð°ð¥ _${usedPrefix}pack3_
ð°ð¥ _${usedPrefix}videoxxx_
ð°ð¥ _${usedPrefix}videolesbixxx_
ð°ð¥ _${usedPrefix}tetas_
ð°ð¥ _${usedPrefix}booty_
ð°ð¥ _${usedPrefix}ecchi_
ð°ð¥ _${usedPrefix}furro_
ð°ð¥ _${usedPrefix}imagenlesbians_
ð°ð¥ _${usedPrefix}panties_
ð°ð¥ _${usedPrefix}pene_
ð°ð¥ _${usedPrefix}porno_
ð°ð¥ _${usedPrefix}randomxxx_
ð°ð¥ _${usedPrefix}pechos_
ð°ð¥ _${usedPrefix}yaoi_
ð°ð¥ _${usedPrefix}yaoi2_
ð°ð¥ _${usedPrefix}yuri_
ð°ð¥ _${usedPrefix}yuri2_
ð°ð¥ _${usedPrefix}trapito_
ð°ð¥ _${usedPrefix}hentai_
ð°ð¥ _${usedPrefix}nsfwloli_
ð°ð¥ _${usedPrefix}nsfworgy_
ð°ð¥ _${usedPrefix}nsfwfoot_
ð°ð¥ _${usedPrefix}nsfwass_
ð°ð¥ _${usedPrefix}nsfwbdsm_
ð°ð¥ _${usedPrefix}nsfwcum_
ð°ð¥ _${usedPrefix}nsfwero_
ð°ð¥ _${usedPrefix}nsfwfemdom_
ð°ð¥ _${usedPrefix}nsfwglass_
ð°ð¥ _${usedPrefix}hentaipdf *<texto>*_
ð°ð¥ _${usedPrefix}hentaisearch *<texto>*_`.trim();
    if (m.isGroup) {
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
      await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
      await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    }
  } catch {
    conn.reply(m.chat, '*[âððððâ] ð´ð» ð¼ð´ð½ð ðð¸ð´ð½ð´ ðð½ ð´ððð¾ð ð ð½ð¾ ðµðð´ ð¿ð¾ðð¸ð±ð»ð´ ð´ð½ðð¸ð°ðð»ð¾, ðð´ð¿ð¾ððð´ð»ð¾ ð°ð» ð¿ðð¾ð¿ð¸ð´ðð°ðð¸ð¾ ð³ð´ð» ð±ð¾ð*', m);
  }
};
handler.command = /^(menulabiblia|labiblia|Labiblia)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
