const dl = require('discord-leveling')
const Discord = require('discord.js')
const colors = require('../assets/colors.json')
exports.run = (client, msg) => {
	const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
	user = msg.mentions.users.first() || msg.author
	dl.Fetch(user.id).then(res => {
		const embed = new Discord.RichEmbed()
		.setColor(color)
		.setTitle(`${user.username}\'s profile`)
		.addField('XP', res.xp,true)
		.addField('Level', res.level, true)
		.setThumbnail(user.avatarURL)
		.setFooter('Megumin', client.user.avatarURL)
	msg.channel.send(embed)
	})
}
