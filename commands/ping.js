exports.run = (client, msg, args) => {
	msg.channel.send(`Pong! ${Math.floor(Date.now() - msg.createdTimestamp)}ms`)
}