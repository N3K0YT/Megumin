const Chance = require('chance');
const chance = new Chance();
exports.run = (client, msg) => {
	msg.channel.send(`Generated password: ***${chance.string()}***`)
}