const Discord = require('discord.js');

exports.run = (client, message, args) => {
 
var davidsonananısikiyor = new Discord.MessageEmbed()

.setColor(`BLACK`)
.setTitle(`${message.author.tag} adlı kullacının avatarı`)
.setAuthor(message.author.username, message.author.avatarURL ({size:1024, dynamic:true, format: `png`})) 
.setDescription(`${message.author.tag} isimli kullanıcı profil fotoğrafını istedi`)
.setImage(message.author.avatarURL ({size:1024, dynamic:true, format: `png`})) 
message.channel.send(davidsonananısikiyor)
};


exports.conf = {
  aliases: [`avatar`],
  permLevel: 0
};

exports.help = {
  name: 'userpp',
  description: 'Kullacının avatarına bakabileceksiniz',
  usage: 'avatar'
};