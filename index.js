const Discord = require('discord.js')
const client = new Discord.Client()
const embed = new Discord.RichEmbed()
const fs = require('fs')
//const jimp = require('jimp')
const prefix = 'm.'
const dl = require('discord-leveling')
const colors = require('./assets/colors.json')
const owner = '383749208575967244'
const rXp = Math.floor(Math.random() * 7) + 8
console.log("I'm working. :D")
client.on('guildMemberAdd', member => {
		
})
client.on('message', msg =>{
	// IGNORE BOTS
	if (msg.author.bot)return
	dl.AddXp(msg.author.id, rXp).then(lol => {
		console.log(`Added ${rXp} xp to ${msg.author.username}`)
	})
	if(!msg.content.startsWith(prefix))return;
	// CMD HANDLER
	let args = msg.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();
	if(!msg.content.startsWith(prefix))return;
	try {
		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, msg, args, colors, owner, cmd, con)
} catch {return};
})
// ALERT WHEN READY AND CHANGE ACTIVITY
client.on('ready', () => {
	client.user.setActivity(`with explosive magic in ${client.guilds.size} guilds | m.  `)
	console.log(`Logged in as ${client.user.tag}!`)
})
// LOGIN
client.login(process.env.token)

