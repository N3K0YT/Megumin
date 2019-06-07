const xp = require('../assets/db/xp.json')
const fs = require('fs')
const owner = '383749208575967244'
exports.run = (client, msg, args) => {
	if (msg.author.id != owner) return msg.reply('only my owner can use this command')
	var amount = args[1]
    var user = message.mentions.users.first()
    if (user) {
	xp[user.id].xp += amount
message.channel.send(`You added *${amount}* xp to ${user.username}!`);
}
xp[owner].xp += amount
msg.channel.send(`You added yourself *${amount}* xp O\/\/\/O`)
fs.writeFile('../assets/db/xp.json', JSON.stringify(xp), (err) => {
				if (err) throw err;
})
}