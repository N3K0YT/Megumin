const Discord = require('discord.js')
const hugs = require('../assets/hugs.json')
const colors = require('../assets/colors.json')
exports.run = (client, msg, args) => {
	const values = Object.values(hugs)
		const hug = values[parseInt(Math.random() * values.length)]
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		var user = msg.mentions.users.first()
		const embed = new Discord.RichEmbed().setColor(color).setDescription(`<@${msg.author.id}> hugged <@${user.id}>!`).setImage(hug)
		msg.channel.send(embed)
		if (user.tag === 'Megumin#6443'){
			const embed = new Discord.RichEmbed().setTitle('UwU').setColor(color)
			msg.channel.send(embed)
}
}