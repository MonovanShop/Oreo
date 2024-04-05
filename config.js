import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""
global.confirmCode = ""

global.owner = [
  ['5217299350963', 'ð Bugs Bunny - Creador ð', true],
];

global.suittag = ['5217299350963'];
global.prems = ['5217299350963'];

global.packname = 'Bugs Bunny';
global.author = 'Bugs Bunny';
global.wm = 'Bugs Bunny';
global.titulowm = 'Bugs Bunny';
global.titulowm2 = `Bugs Bunny`
global.igfg = 'Bugs Bunny';
global.wait = '*[ â³ ] Cargando...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/bermudavs.png');
global.imagen3 = fs.readFileSync('./src/Purgatoriovs.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/kalaharivs.png');
global.imagen6 = fs.readFileSync('./Menu3.png');
global.imagen7 = fs.readFileSync('./src/Cuadrilateros.png');
global.imagen8 = fs.readFileSync('./src/hexagonals.png');
global.imagen9 = fs.readFileSync('./src/+18.jpg');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.aÃ±o = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nCapibot Premium`;
global.gt = 'Capibot Premium';
global.mysticbot = 'CapiBot Premium';
global.md = 'wa.me/5217299350963';
global.mysticbot = 'wa.me/5217299350963';
global.waitt = '*[ â³ ] Cargando...*';
global.waittt = '*[ â³ ] Cargando...*';
global.waitttt = '*[ â³ ] Cargando...*';
global.nomorown = '5217299350963';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = 'âââââââã';
global.cmenub = 'ââ¦ ';
global.cmenuf = 'â°âââââââââââà¹\n';
global.cmenua = '\nâ ââââââââââââââââââââââââââââââââ â\n     ';
global.dmenut = '*âââââââ©*';
global.dmenub = '*âÂ»*';
global.dmenub2 = '*â*';
global.dmenuf = '*â°âââââââââââ¦*';
global.htjava = 'â«¹â«º';
global.htki = '*â­â¢Ì©Ì©Íâ±â¢â¢â¢â¢ âª*';
global.htka = '*âª â¢â¢â¢â¢Ì©Ì©Íâ°â¢â­*';
global.comienzo = 'â¢ â¢ ââââââ';
global.fin = 'ââââââ â¢ â¢';
global.botdate = `*[ ð ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ â³ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
