const Discord = require('discord.js')
const faps = require('../assets/faps.json')
const colors = require('../assets/colors.json')
exports.run = (client, msg, args) => {
  if (!msg.channel.nsfw) return msg.reply('no.')
	    const values = Object.values(faps)
		const fap = values[parseInt(Math.random() * values.length)]
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		const embed = new Discord.RichEmbed().setColor(color).setDescription(`<@${msg.author.id}> masturbated!`).setImage(fap)
		msg.channel.send(embed)
		if (user.tag === 'Megumin#6443'){
			const embed = new Discord.RichEmbed().setTitle('O/\/\/)O').setColor(color)
			msg.channel.send(embed)
    }
}