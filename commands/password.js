const Chance = require('chance');
const chance = new Chance();
exports.run = (client, msg) => {
	const passwd = chance.string()
	msg.channel.send(`Generated password: ***${passwd}***`)
}