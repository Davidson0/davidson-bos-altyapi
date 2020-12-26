const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const report = new Discord.WebhookClient('791994757874188299', 'G-Q_OD5wDezuGoY8HmXnY_POIKLRgM7OqoS3VrdyV1VIaSulbvzPx6UIkrT_VSRFjJVu');
    
    
    const reason = args.join(" ")


message.channel.send(`Reportunuz başarıyla ekibimize iletilmiştir. `)

var embed = new Discord.MessageEmbed()


.setAuthor(`${message.author.username} Kişisi reportladı.`)
.setColor(`RANDOM`)
.setDescription(`${reason}`)


report.send( {
	username: 'Akame Music Report',
	avatarURL: 'https://cdn.discordapp.com/emojis/790624077899104316.png?v=1',
	embeds: [embed],  
});



};


exports.conf = {
  aliases: [`report`],
  permLevel: 0
};

exports.help = {
  name: 'report',
  description: 'Reportlarmk',
  usage: 'report'
};