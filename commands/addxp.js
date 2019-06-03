exports.run (client, msg, args, owner) => {
	if(!msg.author.id === owner) return msg.reply('only my owner can use this command')
	var amount = args[0]
    var user = message.mentions.users.first() || message.author
    var output = await dl.AddXp(user.id, amount)
    message.channel.send(`Hey <@${user.id}>!, You now have ${amount} xp!`);
}