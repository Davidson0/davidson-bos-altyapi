const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../settings.json')

module.exports = client => {

console.log("Bot Hazır");

var randomMesajlar = [

    "Davidson Project",
    "V2"
]




setInterval(function() {
    var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
    client.user.setActivity(`${randomMesajlar1}`);

}, 2 * 30000);

client.user.setStatus("invisible");
/*
idle yerine yazılabilecekler
dnd 
idle
online
ofline
*/


}