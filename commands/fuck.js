const Discord = require('discord.js')
const fucks = require('../assets/fucks.json')
const colors = require('../assets/colors.json')
exports.run = (client, msg, args) => {
  if (!msg.channel.nsfw) return msg.reply('no.')
	    const values = Object.values(fucks)
		const fuck = values[parseInt(Math.random() * values.length)]
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		var user = msg.mentions.users.first()
		const embed = new Discord.RichEmbed().setColor(color).setDescription(`<@${msg.author.id}> fucked <@${user.id}>!`).setImage(fuck)
		msg.channel.send(embed)
}