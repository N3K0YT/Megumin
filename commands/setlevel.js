exports.run = (client, msg, args, owner) => {
	if (!msg.author.id === owner) return msg.reply('only my owner can use this command')
	var amount = args[0]
    var user = message.mentions.users.first() || message.author
    var output = await dl.SetLevel(user.id, amount)
    message.channel.send(`Hey ${user.tag}! You now are level ${amount}!`);
}