const booru = require('booru')
exports.run = (client, msg, args, owner, cmd, colors, embed) => {
	booru.search('r34', args[0], {limit: 4, random: true}).then(posts => {
			for (let post of posts){
				if (!post.fileUrl) return msg.channel.send(`Couldn't find anything matching tag ***${args[0]}***`);
				const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
				 embed.setTitle('Result from Rule 34').setColor(color).setImage(post.fileUrl).setFooter('Megumin by Aqua_')
				msg.channel.send(embed)
}
})
}