const Discord = require('discord.js')
const client = new Discord.Client()
const imdb = require('imdb-api');
const embed = new Discord.RichEmbed()
exports.run = (client, msg, args) => {
	const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
	imdb.get({name: args.shift()}, {apiKey: '6370150c', timeout: 30000}).then(json => {console.log(json);
    embed.setColor(color).setTitle(json.title).setDescription(json.plot).addField('Actor/s', json.actors, true).addField('Year', json.year, true).setThumbnail(json.poster).addField('Runtime', json.runtime, true)
    msg.channel.send(embed)
})
}