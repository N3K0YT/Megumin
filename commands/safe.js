const booru = require('booru')
const Discord = require('discord.js')
const colors = require('../assets/colors.json')
exports.run = (client, msg, args, owner, cmd) => {
	booru.search('sb', args[0], {limit: 4, random: true}).then(posts => {
			for (let post of posts){
				if (!post.fileUrl) return msg.channel.send(`Couldn't find anything matching tag ***${args[0]}***`);
				const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
				 embed.setTitle('Result from Safebooru').setColor(color).setImage(post.fileUrl).setFooter('Megumin by Aqua_')
				msg.channel.send(embed)
}
})
}