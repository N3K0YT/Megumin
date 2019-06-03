exports.run = (client, msg, args, owner) => {
	if (!msg.author.id === owner) return msg.reply('only my owner can use this command')
	var amount = args[0]
    var user = msg.mentions.users.first() || msg.author
    var output = await dl.SetLevel(user.id, amount)
    msg.channel.send(`Hey ${user.tag}! You now are level ${amount}!`);
}