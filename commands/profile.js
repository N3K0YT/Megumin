const Discord = require('discord.js')
const xp = require('../assets/db/xp.json')
const money = require('../assets/db/money.json')
const colors = require('../assets/colors.json')
exports.run = (client, msg) => {
	const user = msg.mentions.users.first() || msg.author
	const lvl = xp[user.id].level
	const xpamount = xp[user.id].xp
	const cashamount = money[user.id].amount
	const randcol = Object.values(colors)
	const color = randcol[parseInt(Math.random() * randcol.length)]
	const embed = new Discord.RichEmbed()
	.setColor(color)
	.setTitle(`${user.username}'s profile`)
	.setThumbnail(user.avatarURL)
	.addField('Money', cashamount, true)
	.addField('XP', xpamount, true)
	.addField('Level', lvl, true)
	.setFooter('Megumin XP', client.user.avatarURL)
	msg.channel.send(embed)
	
}