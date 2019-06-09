const dl = require('discord-leveling')
exports.run = (client, msg, args) => {
	if (!msg.author.id === '383749208575967244') return msg.reply('no.')
		const user = msg.maentions.users.first()
		dl.AddXp(user.id, args[0])
}
