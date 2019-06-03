const Discord = require('discord.js')
const colors = require('../assets/colors.json')
exports.run = (client, msg, args) => {
	var user = msg.mentions.users.first()
	if (user){
		var randcol = Object.values(colors)
		var color = randcol[parseInt(Math.random() * randcol.length)]
		const embed = new Discord.RichEmbed().setColor(color).setTitle(`${user.username}'s avatar`).setImage(user.avatarURL)
		msg.channel.send(embed)
}
if (!user){
		var randcol = Object.values(colors)
		var color = randcol[parseInt(Math.random() * randcol.length)]
		const embed = new Discord.RichEmbed().setColor(color).setTitle(`${msg.author.username}'s avatar`).setImage(msg.author.avatarURL)
		msg.channel.send(embed)
		}
}