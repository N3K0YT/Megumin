const Discord = require('discord.js')
const colors = require('../assets/colors.json')
exports.run = async (client, msg, con) => {
	const user = msg.mentions.users.first() || msg.author
	mprofile =await eco.FetchBalance(user.id)
	xprofile = con.query(`SELECT FROM xplist WHERE userId = ${user.id}`)
	var randcol = Object.values(colors)
	var color = randcol[parseInt(Math.random() * randcol.length)]
	const embed = new Discord.RichEmbed()
	.setColor(color)
	.setTitle(`${user.username}'s profile`)
	.setThumbnail(user.avatarURL)
	.addField('Money', mprofile.balance, true)
	.addField('XP', xprofile.xp, true)
	//.addField('Level', xprofile.level, true)
	.setFooter('Megumin', client.user.avatarURL)
	msg.channel.send(embed)
	
}