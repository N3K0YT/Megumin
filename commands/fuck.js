const Discord = require('discord.js')
const fucks = require('../assets/fucks.json')
const colors = require('../assets/colors.json')
exports.run = (client, msg, args) => {
  if (!msg.channel.nsfw) return msg.reply('no.')
  if (user.tag === 'Megumin#6443'){
    if (!msg.author.id === '383749208575967244' ){
    const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		const embed = new Discord.RichEmbed().setTitle('Not with me').setColor(color)
		msg.channel.send(embed)
    return
    } else {
      const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		const embed = new Discord.RichEmbed().setTitle('UwU').setColor(color)
		msg.channel.send(embed)
    }
} else {
	const values = Object.values(fucks)
		const fuck = values[parseInt(Math.random() * values.length)]
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		var user = msg.mentions.users.first()
		const embed = new Discord.RichEmbed().setColor(color).setDescription(`<@${msg.author.id}> fucked <@${user.id}>!`).setImage(fuck)
		msg.channel.send(embed)
		if (user.tag === 'Megumin#6443'){
			const embed = new Discord.RichEmbed().setTitle('O/\/\/)O').setColor(color)
			msg.channel.send(embed)
    }
}
}