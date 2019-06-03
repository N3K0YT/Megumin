const Discord = require('discord.js')
const eco = require('discord-economy')
const embed = new Discord.RichEmbed()
exports.run = (client, msg, colors) => {
	const user = msg.mentions.users.first() || msg.author
	var output = await eco.FetchBalance(user.id)
	var randcol = Object.values(colors)
	var color = randcol[parseInt(Math.random() * randcol.length)]
    embed.setDescription(`Hey <@${user.id}>! You own ${output.balance} coins.`).setColor(color).setFooter('Megumin', client.user.avatarURL)
msg.channel.send(embed)
}


