const prefixes = require('../assets/db/prefixes.json')
exports.run = (client, msg, args) => {
	if (!msg.member.hasPermission(['ADMINISTRATOR'])) return msg.reply('no.')
	if (!args[0]) return msg.reply ('please specify an argument.')
	prefixes[msg.guild.id].prefix = args[0]
	msg.channel.send(`Prefix set to **${args[0]}**`)
	fs.writeFile('../assets/db/prefixes.json', JSON.stringify(prefixes), (err) => {
	if (err) throw err;
})
}