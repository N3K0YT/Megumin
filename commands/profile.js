const Discord = require('discord.js')
const eco = require('discord-economy')
const dl = require('discord-leveling')
exports.run = async (client, msg, colors) => {
	const user = msg.mentions.users.first() || msg.author
	mprofile =await eco.fetchBalance(user.id)
	xprofile = await dl.Fetch(user.id)
	var randcol = Object.values(colors)
	var color = randcol[parseInt(Math.random() * randcol.length)]
	const embed = new Discord.RichEmbed()
	.setColor(color)
	.setTitle(`${user.username}'s profile`)
	.setThumbnail(user.avatarURL)
	.addField('Money', mprofile.balance, true)
	.addField('XP', xprofile.xp, true)
	.addField('Level', xprofile.level, true)
	.setFooter('Megumin', client.user.avatarURL)
	msg.channel.send(embed)
	
}