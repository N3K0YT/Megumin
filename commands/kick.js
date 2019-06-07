exports.run = (client, msg, args) => {
	const toKick = msg.mentions.members.first()
	if (!msg.author.hasPermission(['KICK_MEMBERS', 'ADMINISTRATOR'])) return msg.reply('no.')
	toKick.kick().then(member => {msg.channel.send(`${member.username} has been kicked by ${msg.author.username}`)})
	console.log('lel')
}