exports.run = (client, msg, args) => {
	if (!msg.member.hasPermission(["ADMINISTRATROR"])) return msg.reply('no.')
	if (!args[0]) return msg.reply('please specify how many messages to delete.').then(yeet => {yeet.delete(6000)})
	msg.channel.bulkDelete(args[0]).then(yoink => {
		msg.channel.send(`Cleared ${args[0]} messages`).then(yee => {yee.delete(7000)})
})
}