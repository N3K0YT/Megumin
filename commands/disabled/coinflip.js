const money = require('../assets/db/money.json')
const Chance = require('chance')
const chance = new Chance()
exports.run = (client, msg, args) => {
	 const flip = args[1] //Heads or Tails
    const amount = args[2] //Coins to gamble
    if (!amount) return msg.reply('Specify the amount you want to gamble!')
    var output = money[msg.author.id].amount
    if (output < amount) return msg.reply('You have less coins than the amount you want to gamble!')
    const res = chance.bool()
	if (res === true) { 
	msg.reply(`You gambled ${amount}! and won New balance:` + (output + amount))
	money[msg.author.id].amount = output + amount
}
	if (res === false) {
		msg.reply(`You gambled ${amount} and lost! New balance:` += amount * 2)
		money[msg.author.id].amount -= amount * 2
}
	fs.writeFile('../assets/db/money.json', JSON.stringify(money)(err) => {
	if (err) throw err;
})
}