exports.run = (client, msg, args, con) => {
	if (!msg.member.hasPermission(['ADMINISTRATOR'])) return msg.reply('no.')
	if (!args[0]) return msg.reply ('please specify an argument.')
	con.query(`UPDATE prefixes SET prefix = args[0] WHERE guildId = msg.guild.id`)
	msg.channel.send(`Prefix set to **${args[0]}**`)
}