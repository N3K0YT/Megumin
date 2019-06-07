const Chance = require('chance')
const chance = new Chance()
const fs = require('fs')
const money = require('../assets/db/money.json')
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
			money[msg.author.id].amount += 20
			msg.channel.send('I added 20 credits to your balance :D')
}
		if (result === false){
			message = `Oof, you've been shot ${nani}`
			money[msg.author.id].amount -= 20
			msg.channel.send("Today\'s not your lucky day, you\'ve been charged 20 credits")
}
		
		msg.channel.send(message)
		fs.writeFile('./assets/db/money.json', JSON.stringify(money), (err) => {
		if (err) throw err;
})
}