const Discord = require('discord.js')
const pokes = require('../assets/pokes.json')
const colors = require('../assets/colors.json')
exports.run = (client, msg, args) => {
	const values = Object.values(pokes)
		const poke = values[parseInt(Math.random() * values.length)]
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		var user = msg.mentions.users.first()
		const embed = new Discord.RichEmbed().setColor(color).setDescription(`<@${msg.author.id}> poked <@${user.id}>!`).setImage(poke)
		msg.channel.send(embed)
		if (user.tag === 'Megumin#6443'){
			const embed = new Discord.RichEmbed().setTitle('7u7').setColor(color)
			msg.channel.send(embed)
}
}