exports.run = (client, msg, args) => {
	msg.channel.send(`Pong! ${Date.now() - msg.createdTimestamp} ms`)
}