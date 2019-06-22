const owner = '383749208575967244'
exports.run = async (client, msg) => {
	if (msg.author.id != owner) return msg.reply('only my owner can use this command')
	await client.destroy()
	client.login(process.env.token)
	msg.reply('Restart completed').then(yoink => {
		yoink.delete(10000)
})
	
}