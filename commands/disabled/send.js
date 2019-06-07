const eco = require('discord-economy')
exports.run = (client, msg, args) => {
	var user = msg.mentions.users.first()
    var amount = args[1]
    if (!user) return msg.reply('Reply the user you want to send money to!')
    if (!amount) return msg.reply('Specify the amount you want to pay!')
    var output = await eco.FetchBalance(msg.author.id)
    if (output.balance < amount) return msg.reply('You have less coins than the amount you want to transfer!')
    var transfer = await eco.Transfer(msg.author.id, user.id, amount)
    msg.reply(`Transfering coins succesfully done!\nBalance from ${msg.author.tag}: ${transfer.FromUser}\nBalance from ${user.tag}: ${transfer.ToUser}`);
}