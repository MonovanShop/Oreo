import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
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
    const str = `— MONKEY —◉

 🐾🍪  Hola, ${taguser}

         ◉— TUS ESTADISTICAS —◉

 🐾🍪 Nivel: ${level}
 🐾🍪  Experiencia: ${exp}
 🐾🍪  Rango: ${role}
 🐾🍪 Diamantes: ${limit}
 🐾🍪  MonkeyCoins: ${money}
 🐾🍪 Tokens: ${joincount}
 🐾🍪  Premium: ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
 ${readMore}

          ◉— MENUS —◉
  
  🍪  ${usedPrefix}menuaudios
  🍪  ${usedPrefix}menuanimes
  🍪  ${usedPrefix}labiblia (🔞)



     ◉— LISTADO DE VS —◉
  
  🍪  ${usedPrefix}4vs4
  🍪  ${usedPrefix}6vs6
  🍪  ${usedPrefix}8vs8 
  🍪  ${usedPrefix}12vs12
  🍪 ${usedPrefix}16vs16
  🍪 ${usedPrefix}scrimlist
  🍪  ${usedPrefix}cuadrilist
  🍪  ${usedPrefix}hexalist


        ◉— MAPAS —◉
        
  🍪  ${usedPrefix}exagonal
  🍪  ${usedPrefix}cuadrilatero
  🍪  ${usedPrefix}bermuda
  🍪  ${usedPrefix}purgatorio
  🍪  _${usedPrefix}kalahari


        ◉— REGLAS —◉
        
  🍪  ${usedPrefix}Clk
 
        ◉— INFO —◉

  🍪 ${usedPrefix}terminosycondiciones
  🍪 ${usedPrefix}grupos
  🍪 ${usedPrefix}estado
  🍪 ${usedPrefix}infobot
  🍪 ${usedPrefix}speedtest
  🍪 ${usedPrefix}donar
  🍪 ${usedPrefix}owner
  🍪 ${usedPrefix}script
  🍪 ${usedPrefix}reporte <txt>
  🍪 ${usedPrefix}join <wagp_url>
  🍪${usedPrefix}fixmsgespera
  🍪bot (sin prefijo)


         ◉— ENABLE/RESTRICT —◉

 
  🍪 ${usedPrefix}enable restrict
  🍪 ${usedPrefix}disable restrict
  🍪 ${usedPrefix}enable autoread
  🍪 ${usedPrefix}disable autoread
  🍪 ${usedPrefix}enable antispam
  🍪 ${usedPrefix}disable antispam
  🍪 ${usedPrefix}enable anticall
  🍪 ${usedPrefix}disable anticall
  🍪 ${usedPrefix}enable modoia
  🍪 ${usedPrefix}disable modoia
  🍪 ${usedPrefix}enable audios_bot
  🍪${usedPrefix}disable audios_bot
  🍪${usedPrefix}enable antiprivado
  🍪 ${usedPrefix}disable antiprivado
  

             ◉— JUEGOS —◉

  🍪  ${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
  🍪  ${usedPrefix}fake <txt1> <@tag> <txt2>
  🍪  ${usedPrefix}ppt <papel / tijera /piedra>
  🍪  ${usedPrefix}prostituto <nombre / @tag>
  🍪  ${usedPrefix}prostituta <nombre / @tag>
  🍪  ${usedPrefix}gay2 <nombre / @tag>
  🍪  ${usedPrefix}lesbiana <nombre / @tag>
  🍪  ${usedPrefix}pajero <nombre / @tag>
  🍪  ${usedPrefix}pajera <nombre / @tag>
  🍪  ${usedPrefix}puto <nombre / @tag>
  🍪  ${usedPrefix}puta <nombre / @tag>
  🍪  ${usedPrefix}manco <nombre / @tag>
  🍪  ${usedPrefix}manca <nombre / @tag>
  🍪  ${usedPrefix}rata <nombre / @tag>
  🍪  ${usedPrefix}love <nombre / @tag>
  🍪  ${usedPrefix}doxear <nombre / @tag>
  🍪  ${usedPrefix}pregunta <txt>
  🍪  ${usedPrefix}suitpvp <@tag>
  🍪  ${usedPrefix}slot <apuesta>
  🍪  ${usedPrefix}ttt <nombre sala>
  🍪  ${usedPrefix}delttt
  🍪  ${usedPrefix}acertijo
  🍪  ${usedPrefix}simi <txt>
  🍪  ${usedPrefix}top <txt>
  🍪  ${usedPrefix}topgays
  🍪  ${usedPrefix}topotakus
  🍪  ${usedPrefix}formarpareja
  🍪  ${usedPrefix}verdad
  🍪  ${usedPrefix}reto
  🍪  ${usedPrefix}cancion
  🍪  ${usedPrefix}pista
  🍪  ${usedPrefix}akinator
  🍪  _${usedPrefix}ruleta
  🍪  _${usedPrefix}suerte
  🍪  ${usedPrefix}wordfind


       ◉— ACT./DESACT. FUNC. —◉

  🍪  ${usedPrefix}enable welcome
  🍪  ${usedPrefix}disable welcome
  🍪  ${usedPrefix}enable modohorny
  🍪  ${usedPrefix}disable modohorny
  🍪  ${usedPrefix}enable antilink
  🍪  ${usedPrefix}disable antilink
  🍪  ${usedPrefix}enable antilink2
  🍪  ${usedPrefix}disable antilink2
  🍪  ${usedPrefix}enable detect
  🍪  ${usedPrefix}disable detect
  🍪  ${usedPrefix}enable audios
  🍪  ${usedPrefix}disable audios
  🍪  ${usedPrefix}enable autosticker
  🍪  ${usedPrefix}disable autosticker
  🍪  ${usedPrefix}enable antiviewonce
  🍪  ${usedPrefix}disable antiviewonce
  🍪  ${usedPrefix}enable antitoxic
  🍪  ${usedPrefix}disable antitoxic
  🍪  ${usedPrefix}enable antitraba
  🍪  ${usedPrefix}disable antitraba
  🍪  ${usedPrefix}enable antiarabes
  🍪  ${usedPrefix}disable antiarabes
  🍪  ${usedPrefix}enable modoadmin
  🍪  ${usedPrefix}disable modoadmin
  🍪  ${usedPrefix}enable antidelete
  🍪  ${usedPrefix}disable antidelete


   ◉— DESCARGAS —◉

 🍪  ${usedPrefix}play <txt>
 🍪  ${usedPrefix}play2 <txt>
 🍪  ${usedPrefix}play.1 <txt>
 🍪  ${usedPrefix}play.2 <txt>
 🍪  ${usedPrefix}playdoc <txt>
 🍪  ${usedPrefix}playdoc2 <txt>
 🍪  ${usedPrefix}playlist <txt>
 🍪  ${usedPrefix}ytshort <url>
 🍪  ${usedPrefix}ytmp3 <url>
 🍪  ${usedPrefix}ytmp3doc <url>
 🍪  ${usedPrefix}ytmp4 <url>
 🍪  ${usedPrefix}ytmp4doc <url>
 🍪  ${usedPrefix}videodoc <url>
 🍪  ${usedPrefix}spotify <txt>
 🍪  ${usedPrefix}facebook <url>
 🍪  ${usedPrefix}instagram <url>
 🍪  ${usedPrefix}igstory <usr>
 🍪  ${usedPrefix}tiktok <url>
 🍪  ${usedPrefix}tiktokimg <url>
 🍪  ${usedPrefix}pptiktok <usr>
 🍪  ${usedPrefix}mediafire <url> 
 🍪  ${usedPrefix}pinterest <txt>
 🍪  ${usedPrefix}gitclone <url>
 🍪  ${usedPrefix}gdrive <url>
 🍪  ${usedPrefix}twitter <url>
 🍪  ${usedPrefix}ringtone <txt>
 🍪  ${usedPrefix}soundcloud <txt>
 🍪  ${usedPrefix}stickerpack <url>
 🍪  ${usedPrefix}wallpaper <txt> 
 🍪  ${usedPrefix}dapk2 <url>
 🍪  ${usedPrefix}xnxxdl <url> (🔞)
 🍪  ${usedPrefix}xvideosdl <url> (🔞)



          ◉— BUSCADORES —◉ 


  🍪 ${usedPrefix}githubsearch <txt>
  🍪 ${usedPrefix}pelisplus <txt>
  🍪 ${usedPrefix}modapk <txt>
  🍪 ${usedPrefix}stickersearch <txt>
  🍪 ${usedPrefix}stickersearch2 <txt>
  🍪 ${usedPrefix}xnxxsearch <txt>
  🍪 ${usedPrefix}animeinfo <txt>
  🍪 ${usedPrefix}google <txt>
  🍪 ${usedPrefix}letra <txt>
  🍪 ${usedPrefix}wikipedia <txt>
  🍪 ${usedPrefix}ytsearch <txt>
  🍪 ${usedPrefix}playstore <txt>


       ◉— GRUPOS —◉

  🍪 ${usedPrefix}add num>
  🍪 ${usedPrefix}kick <@tag>
  🍪 ${usedPrefix}kick2 <@tag>
  🍪 ${usedPrefix}listanum <txt>
  🍪 ${usedPrefix}kicknum <txt>
  🍪 ${usedPrefix}grupo <abrir/cerrar>
  🍪 ${usedPrefix}grouptime <opcion> <tiempo>
  🍪 ${usedPrefix}promote <@tag>
  🍪 ${usedPrefix}demote <@tag>
  🍪 ${usedPrefix}infogroup
  🍪 ${usedPrefix}resetlink
  🍪 ${usedPrefix}link
  🍪 ${usedPrefix}setname <txt>
  🍪 ${usedPrefix}setdesc <txt>
  🍪 ${usedPrefix}invocar <txt>
  🍪 ${usedPrefix}setwelcome <txt>
  🍪 ${usedPrefix}setbye <txt>
  🍪 ${usedPrefix}hidetag <txt>
  🍪 ${usedPrefix}hidetag <audio>
  🍪 ${usedPrefix}hidetag <video>
  🍪 ${usedPrefix}hidetag <img>
  🍪 ${usedPrefix}warn <@tag>
  🍪 ${usedPrefix}unwarn <@tag>
  🍪 ${usedPrefix}listwarn
  🍪 ${usedPrefix}fantasmas
  🍪 ${usedPrefix}destraba
  🍪 ${usedPrefix}setpp <img>
  🍪 admins <txt> (sin prefijo)

       ◉— CONVERTIDORES —◉

  🍪 ${usedPrefix}toanime <img>
  🍪 ${usedPrefix}togifaud <video>
  🍪 ${usedPrefix}toimg <sticker>
  🍪 ${usedPrefix}tomp3 <video>
  🍪 ${usedPrefix}tomp3 <nota de voz>
  🍪 ${usedPrefix}toptt <video / audio>
  🍪 ${usedPrefix}tovideo <sticker>
  🍪 ${usedPrefix}tourl <video / img / audio>
  🍪 ${usedPrefix}tts <idioma> <txt>
  🍪 ${usedPrefix}tts <efecto> <txt>


         ◉— EFECTOS Y LOGOS —◉

  🍪 ${usedPrefix}logos <efecto> <txt>
  🍪 ${usedPrefix}logochristmas <txt>
  🍪 ${usedPrefix}logocorazon <txt>
  🍪 ${usedPrefix}ytcomment <txt>
  🍪 ${usedPrefix}hornycard <@tag>
  🍪 ${usedPrefix}simpcard <@tag>
  🍪 ${usedPrefix}lolice <@tag>
  🍪 ${usedPrefix}itssostupid
  🍪 ${usedPrefix}pixelar
  🍪 ${usedPrefix}blur


       ◉— FRASES —◉

  🍪 ${usedPrefix}piropo
  🍪 ${usedPrefix}consejo
  🍪 ${usedPrefix}fraseromantica


        ◉— ALEATORIO —◉

  🍪 ${usedPrefix}kpop <blackpink/exo/bts>
  🍪 ${usedPrefix}cristianoronaldo
 🍪 ${usedPrefix}messi
  🍪 ${usedPrefix}cat
  🍪 ${usedPrefix}dog
  🍪 ${usedPrefix}meme
  🍪 ${usedPrefix}itzy
  🍪 ${usedPrefix}blackpink
  🍪 ${usedPrefix}navidad
  🍪 ${usedPrefix}wpmontaña
  🍪 ${usedPrefix}pubg
  🍪 ${usedPrefix}wpgaming
  🍪 ${usedPrefix}wpaesthetic
  🍪 ${usedPrefix}wpaesthetic2
  🍪 ${usedPrefix}wprandom
  🍪 ${usedPrefix}wallhp
  🍪 ${usedPrefix}wpvehiculo
  🍪 ${usedPrefix}wpmoto
  🍪 ${usedPrefix}coffee
  🍪 ${usedPrefix}pentol
  🍪 ${usedPrefix}caricatura
  🍪 ${usedPrefix}ciberespacio
  🍪 ${usedPrefix}technology
  🍪 ${usedPrefix}doraemon
  🍪 ${usedPrefix}hacker
  🍪 ${usedPrefix}planeta
  🍪 ${usedPrefix}randomprofile



   ◉— EFECTOS DE AUDIO —◉


  🍪 ${usedPrefix}bass
  🍪 ${usedPrefix}blown
  🍪 ${usedPrefix}deep
  🍪 ${usedPrefix}earrape
  🍪 ${usedPrefix}fast
  🍪 ${usedPrefix}fat
  🍪 ${usedPrefix}nightcore
  🍪 ${usedPrefix}reverse
  🍪 ${usedPrefix}robot
  🍪 ${usedPrefix}slow
  🍪 ${usedPrefix}smooth
  🍪 ${usedPrefix}tupai


    ◉— CHAT ANONIMA —◉

  🍪 ${usedPrefix}start
  🍪 ${usedPrefix}next
  🍪 ${usedPrefix}leave

      ◉— HERRAMIENTAS —◉
 
  🍪 ${usedPrefix}inspect <wagc_url>
  🍪 ${usedPrefix}chatgpt <txt>
  🍪 _${usedPrefix}delchatgpt
  🍪 ${usedPrefix}gptvoz <txt>
  🍪 ${usedPrefix}dall-e <txt>
  🍪 ${usedPrefix}tamaño <cant> <img / video>
  🍪 ${usedPrefix}readviewonce <img / video>
  🍪 ${usedPrefix}clima <país> <ciudad>
  🍪 ${usedPrefix}encuesta <txt1|txt2>
  🍪 ${usedPrefix}afk <motivo>
  🍪 ${usedPrefix}ocr <responde a img>
  🍪 ${usedPrefix}hd <responde a img>
  🍪 ${usedPrefix}acortar <url>
  🍪 ${usedPrefix}calc <operacion>
  🍪 ${usedPrefix}del <msj>
  🍪 ${usedPrefix}whatmusic <audio>
  🍪 ${usedPrefix}readqr <img>
  🍪 ${usedPrefix}qrcode <txt>
  🍪 ${usedPrefix}readmore <txt1|txt2>
  🍪 ${usedPrefix}styletext <txt>
  🍪 ${usedPrefix}traducir <txt>
  🍪 ${usedPrefix}nowa num>
  🍪 ${usedPrefix}covid <pais>
  🍪 ${usedPrefix}horario
  🍪 ${usedPrefix}dropmail
  🍪 ${usedPrefix}igstalk <usr>
  🍪 ${usedPrefix}tiktokstalk <usr>
  🍪 ${usedPrefix}img <txt>



      ◉— ECONOMIA —◉

  🍪 ${usedPrefix}adventure
  🍪 ${usedPrefix}cazar
  🍪 ${usedPrefix}cofre
  🍪 ${usedPrefix}balance
  🍪 ${usedPrefix}claim
  🍪 ${usedPrefix}heal
  🍪 ${usedPrefix}lb
  🍪 ${usedPrefix}levelup
  🍪 ${usedPrefix}myns
  🍪 ${usedPrefix}perfil
  🍪 ${usedPrefix}work
  🍪 ${usedPrefix}minar
  🍪 ${usedPrefix}minar2
  🍪 ${usedPrefix}buy
  🍪 ${usedPrefix}buyall
  🍪 ${usedPrefix}verificar
  🍪 ${usedPrefix}robar <cant> <@tag>
  🍪 _${usedPrefix}crime
  🍪 ${usedPrefix}transfer <tipo> <cant> <@tag>
  🍪 ${usedPrefix}unreg <sn>


        ◉— STICKERS —◉

 
  🍪 ${usedPrefix}sticker <responder a img o video>
  🍪 ${usedPrefix}sticker <url>
  🍪 ${usedPrefix}sticker2 <responder a img o video>
  🍪 ${usedPrefix}sticker2 <url>
  🍪 ${usedPrefix}s <responder a img o video>
  🍪 ${usedPrefix}s <url>
  🍪 ${usedPrefix}emojimix <emoji 1>&<emoji 2>
  🍪 ${usedPrefix}scircle <img>
  🍪 ${usedPrefix}sremovebg <img>
  🍪 ${usedPrefix}semoji <tipo> <emoji>
  🍪 ${usedPrefix}qc <txt>
  🍪 ${usedPrefix}attp <txt>
  🍪 ${usedPrefix}attp2 <txt>
  🍪 ${usedPrefix}attp3 <txt>
  🍪 ${usedPrefix}ttp <txt>
  🍪 ${usedPrefix}ttp2 <txt>
  🍪 ${usedPrefix}ttp3 <txt>
  🍪 ${usedPrefix}ttp4 <txt>
  🍪 ${usedPrefix}ttp5 <txt>
  🍪 ${usedPrefix}pat <@tag>
  🍪 ${usedPrefix}slap <@tag>
  🍪 ${usedPrefix}kiss <@tag>
  🍪 ${usedPrefix}dado
  🍪 ${usedPrefix}wm <packname> <autor>
  🍪 ${usedPrefix}stickermarker <efecto> <img>
  🍪 ${usedPrefix}stickerfilter <efecto> <img>

  ◉— PROPIETARIOS Y MODS —◉

  🍪 > <funcion>
  🍪 => <funcion>
  🍪 $ <funcion>
  🍪 ${usedPrefix}dsowner
  🍪 ${usedPrefix}setprefix <prefijo>
  🍪 ${usedPrefix}resetprefix
  🍪 ${usedPrefix}autoadmin
  🍪 ${usedPrefix}grouplist
  🍪 ${usedPrefix}chetar
  🍪 ${usedPrefix}leavegc
  🍪 ${usedPrefix}cajafuerte
  🍪 ${usedPrefix}blocklist
  🍪 ${usedPrefix}addowner <@tag / num>
   🍪 ${usedPrefix}delowner <@tag / num>
  🍪 ${usedPrefix}block <@tag / num>
  🍪 ${usedPrefix}unblock <@tag / num>
  🍪 ${usedPrefix}enable restrict
  🍪 ${usedPrefix}disable restrict
  🍪 ${usedPrefix}enable autoread
  🍪 ${usedPrefix}disable autoread
  🍪 ${usedPrefix}enable public
  🍪 ${usedPrefix}disable public
  🍪 ${usedPrefix}enable pconly
  🍪 ${usedPrefix}disable pconly
  🍪 ${usedPrefix}enable gconly
  🍪 ${usedPrefix}disable gconly
  🍪 ${usedPrefix}enable anticall
  🍪 ${usedPrefix}disable anticall
  🍪 ${usedPrefix}enable antiprivado
  🍪 ${usedPrefix}disable antiprivado
  🍪 ${usedPrefix}enable modejadibot
  🍪 ${usedPrefix}disable modejadibot
  🍪 ${usedPrefix}enable audios_bot
  🍪 ${usedPrefix}disable audios_bot
  🍪 ${usedPrefix}enable antispam
  🍪 ${usedPrefix}disable antispam
  🍪 ${usedPrefix}msg <txt>
  🍪 ${usedPrefix}banchat
  🍪 ${usedPrefix}unbanchat
  🍪 ${usedPrefix}resetuser <@tag>
  🍪 ${usedPrefix}banuser <@tag>
  🍪 ${usedPrefix}unbanuser <@tag>
  🍪 ${usedPrefix}dardiamantes <@tag> <cant>
  🍪 ${usedPrefix}añadirxp <@tag> <cant>
  🍪 ${usedPrefix}banuser <@tag>
  🍪 ${usedPrefix}bc <txt>
  🍪 ${usedPrefix}bcchats <txt>
  🍪 ${usedPrefix}bcgc <txt>
  🍪 ${usedPrefix}bcgc2 <aud>
  🍪 ${usedPrefix}bcgc2 <vid>
  🍪 ${usedPrefix}bcgc2 <img>
  🍪 ${usedPrefix}bcbot <txt>
  🍪 ${usedPrefix}cleartpm
  🍪 ${usedPrefix}restart
  🍪 ${usedPrefix}update
  🍪 ${usedPrefix}banlist
  🍪 ${usedPrefix}addprem <@tag> <tiempo>
  🍪 ${usedPrefix}addprem2 <@tag> <tiempo>
   🍪 ${usedPrefix}addprem3 <@tag> <tiempo>
   🍪 ${usedPrefix}addprem4 <@tag> <tiempo>
   🍪 ${usedPrefix}delprem <@tag>
   🍪 ${usedPrefix}listcmd
   🍪 ${usedPrefix}setppbot <responder a img>
   🍪 ${usedPrefix}addcmd <txt>
   🍪 ${usedPrefix}delcmd
   🍪 ${usedPrefix}saveimage
  🍪 ${usedPrefix}viewimage`.trim();
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
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
