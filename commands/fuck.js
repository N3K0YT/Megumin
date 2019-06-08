const Discord = require('discord.js')
const oofs = require('../assets/oofs.json')
const colors = require('../assets/colors.json')
exports.run = (client, msg, args) => {
  if (!msg.channel.nsfw) return msg.reply('no.')
	    const values = Object.values(oofs)
		const kill = values[parseInt(Math.random() * values.length)]
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		var user = msg.mentions.users.first()
		const embed = new Discord.RichEmbed().setColor(color).setDescription(`<@${msg.author.id}> killed <@${user.id}>!`).setImage(kill)
		msg.channel.send(embed)
}