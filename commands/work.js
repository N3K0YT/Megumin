const eco = require('discord-leveling')
exports.run = (client, msg) => {
	var output = await eco.Work(msg.author.id, {failurerate: 20,
      money: Math.floor(Math.random() * 250)+ 1,
      jobs: ['cashier', 'shopkeeper', 'youtuber', 'librarian', 'dumpster diver', 'hoe', 'stripper', 'soundcloud rapper']})
    //50% chance to fail and earn nothing. You earn between 1-100 coins. And you get one out of 20 random jobs.
    if (output.earned == 0) return msg.reply('You fell asleep at work and you were fired!')
	if (output.job === 'soundcloud rapper'){
	msg.channel.send(`${msg.author.username}, you worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}, but you were scammed by your manager, which took all the money you earned lol`)
	eco.SubstractFromBalance(msg.author.id, output.earned)
}
    msg.channel.send(`${msg.author.username}, you worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}, you now have :money_with_wings: ${output.balance}`)
}