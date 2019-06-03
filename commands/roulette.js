const Chance = require('chance')
const chance = new Chance()
const eco = require('discord-economy')
const Discord = require('discord.js')
const colors = require('../assets/colors.json')
exports.run = (client, msg, args) => {
const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		const nani = client.emojis.get("583450493745889285")
		var message;
		
		const result =chance.bool()
		if (result === true){
			message = 'You survived :D'
			eco.AddToBalance(msg.author.id, 20)
			msg.channel.send('I added 20 credits to your balance :D')
}
		if (result === false){
			message = `Oof, you've been shot ${nani}`
			eco.SubstractFromBalance(msg.author.id, 20)
			console.log(message)
}
		const embed = new Discord.RichEmbed().setColor(color).setTitle(message).addBlankField().setFooter(msg.author.username, msg.author.avatarURL)
		msg.channel.send(embed)
		msg.channel.send("Today\'s not your lucky day, you\'ve been charged 20 credits")
}