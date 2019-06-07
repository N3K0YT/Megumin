exports.run = (client, msg, args) => {
	msg.delete()
	if (!msg.member.hasPermission(["ADMINISTRATROR"])) return msg.reply('no.')
	if (!args[0]) return msg.reply('please specify how many messages to delete.').then(yeet => {yeet.delete(6000)})
	if (args[0] > 100) return msg.reply('you can\'t delete more than 100 messages').then(lel => {lel.delete(5000)})
	msg.channel.bulkDelete(args[0]).then(yoink => {
		msg.channel.send(`Cleared ${args[0]} messages`).then(yee => {yee.delete(7000)})
})
}