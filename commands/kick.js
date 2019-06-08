exports.run = (client, msg) => {
	user = msg.mentions.members.first()
	if (!msg.author.hasPermission['ADMINISTRATOR']) return msg.reply('no.')
	if (!user) return msg.channel.send('huh?')
	user.kick()
	
}