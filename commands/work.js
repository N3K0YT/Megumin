const Chance = require('chance')
const chance = new Chance()
const money = require('../assets/db/money.json')
exports.run = (client, msg) => {
    const pay =  Math.floor(Math.random() * 70)+ 1,
	let lul = chance.bool()
	if (lul === true) {
	money[msg.author.id].amount += pay
	msg.reply(`you worked and earned earned *\$${pay}*`)
}
	fs.writeFile('../assets/db/money.json', JSON.stringify(money), (err) => {
	if (err) throw err;
})
}