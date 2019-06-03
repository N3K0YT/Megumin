exports.run (client, msg, args, owner) => {
	if(!msg.author.id === owner) return msg.reply('only my owner can use this command')
	var amount = args[0]
    var user = msg.mentions.users.first() || msg.author
    var output = await dl.AddXp(user.id, amount)
    msg.channel.send(`Hey <@${user.id}>!, You now have ${amount} xp!`);
}