const chance = require('chance').Chance();
exports.run = (client, msg, args) => {
	const len = args.[1]
	if (!len) return msg.channel.send(`Generated password: ***${chance.string()}***')
	if (len.isNan) return msg.channel.send(`***${len}*** id not a valid length, only use numbers`)
	msg.channel.send(`Password: ***${chance.string({length: len})}***`)
}