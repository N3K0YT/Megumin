const eco = require('discord-leveling')
exports.run = (client, msg, args) => {
	 var flip = args[1] //Heads or Tails
    var amount = args[2] //Coins to gamble
    if (!flip || !['heads', 'tails'].includes(flip)) return msg.reply('Pls specify the flip, either heads or tails!')
    if (!amount) return msg.reply('Specify the amount you want to gamble!')
    var output = await eco.FetchBalance(msg.author.id)
    if (output.balance < amount) return msg.reply('You have less coins than the amount you want to gamble!')
    var gamble = await eco.Coinflip(msg.author.id, flip, amount).catch(console.error)
    msg.reply(`You ${gamble.output}! New balance: ${gamble.newbalance}`)
}