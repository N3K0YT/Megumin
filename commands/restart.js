const owner = '383749208575967244'
exports.run = async (client, msg) => {
	if (msg.author.id != owner) return msg.reply('only my owner can hse this command')
	await client.destroy()
	client.login('NTgzMzI2ODU3NDQ1NzY5MjI3.XO6vlQ.jmHvFjcu_ISZPZdQPHZoAoTwEPM')
	msg.reply('Restart completed')
	
}