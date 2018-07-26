const Discord = require("discord.js");
//const clientt = require('nekos.life');
//const neko = new clientt();
const request = require("request");
const { inspect } = require("util");
const config = require('./config.json');
const vm = require("vm");
const fs = require("fs");
const codeContext =  {};
const os = require('os');
const cheerio = require('cheerio');
const snekfetch = require('snekfetch');
const querystring = require('querystring');
const client = new Discord.Client();
const prefix = "<@441667160025333762>";
const creators = ['361951318929309707'];
const emojis = {
	nya:'435849475865575424',
	google:'466553119745114122'
};
let userData = JSON.parse(fs.readFileSync("save.json", "utf8"));
let money = 0; 
let actFUN = 0;  // actFUN = actFUN + 1;actALL = actALL +1;
let actMOD = 0;  // actMOD = actMOD + 1;actALL = actALL +1;
let actRCT = 0;  // actRCT = actRCT + 1;actALL = actALL +1;
let actNSFW = 0; // actNSFW = actNSFW + 1;actALL = actALL +1;
let actOWN = 0; //  actOWN = actOWN + 1;actALL = actALL +1;
let actIMG = 0; //  actIMG = actIMG + 1;actALL = actALL +1;
let actALL = 0; //  actALL = actALL +1;actALL = actALL +1;
let gameCount = 0;
const talkedRecently = new Set();
let serversPlay = {}
vm.createContext(codeContext);
//массив цветов
const colors = ['ff2828','ff3d28','ff4b28','ff5a28','ff6828','ff7628','ff8c28','ffa128','ffac28','ffb728','ffc228','ffd028','ffd728','ffe228','fff028','fffb28','edff28','deff28','d0ff28','c2ff28','b3ff28','9aff28','8cff28','7dff28','6fff28','5aff28','3dff28','28ff2b','28ff41','28ff56','28ff6c','28ff81','28ff93','28ffa9','28ffba','28ffc9','28ffde','28fff4','28ffff','28f0ff','28deff','28deff','28d3ff','28c5ff','28baff','28b0ff','28a5ff','289eff','2893ff','2885ff','2876ff','2864ff','2856ff','284bff','2841ff','2836ff','2828ff','3228ff','4428ff','5328ff','6828ff','7628ff','7e28ff','8828ff','9328ff','a128ff','b028ff','be28ff','c928ff','d328ff','db28ff','e528ff','f028ff','ff28ff','ff28f7','ff28e5','ff28de','ff28d0','ff28c9','ff28ba','ff28b3','ff28a5','ff289a','ff288c','ff2881','ff287a','ff2873','ff2868','ff2861','ff2856','ff284f','ff2848','ff2844','ff282b'];
