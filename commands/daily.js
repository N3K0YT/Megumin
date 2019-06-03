const eco = require('discord-economy')
exports.run = (client, msg) => {
	var output = await eco.Daily(msg.author.id)
    //output.updated will tell you if the user already claimed his/her daily.
    if (output.updated) {
      var profile = await eco.AddToBalance(msh.author.id, 100)
      message.reply(`You claimed your daily coins succesfully! You now own ${profile.newbalance} coins.`);
    } else {
      message.channel.send(`Sorry, you already claimed your daily coins!\nBut no worries, over ${output.timetowait} you can daily again!`)
    }
}