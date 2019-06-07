exports.run = (client, msg) => {
	const toBan = msg.mentions.members.first()
	if (!msg.author.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) return msg.reply('no.')
	toBan.ban().then(member => {msg.channel.send(`${member.username} has been banned by ${msg.author.username}`)})
	
}