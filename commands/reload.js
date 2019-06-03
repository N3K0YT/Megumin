exports.run = (client, msg, args, owner, cmd) => {
	if (msg.author.id !== owner) return msg.channel.send("You're not my owner")
	if (!args[0]) return msg.channel.send('Specify a command to reload')
	try{
	delete require.cache[require.resolve(`./${args[0]}.js`)]
} catch (e) {
	return msg.channel.send(`Hmmm... I couldn't reload ***${args[0]}***`)
}
	msg.channel.send(`Reloaded ***${args[0]}*** successfully!`)
}