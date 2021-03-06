const Discord = require('discord.js')
const client = new Discord.Client()
const embed = new Discord.RichEmbed()
const lvl = require('./leveling.js')
const prefix = 'm.'
const colors = require('./assets/colors.json')
const owner = '383749208575967244'

client.on('guildMemberAdd', member => {
})
client.on('message', msg =>{
	const rXp = Math.floor(Math.random() * 7) + 8;
	// IGNORE DM'S
	if(!msg.guild) return
	// IGNORE BOTS
	if (msg.author.bot)return
	lvl.run(client, msg)
	// IGNORE MESSAGES NOT STARTING WITH PREFIX
	if(!msg.content.startsWith(prefix))return;
	// CMD HANDLER
	let args = msg.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();
	if(!msg.content.startsWith(prefix))return;
	try {
		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, msg, args, colors, owner, cmd)
} catch {return};
})
// ALERT WHEN READY AND SET ACTIVITY
client.on('ready', () => {
	client.user.setActivity(`with explosive magic in ${client.guilds.size} guilds | m.`)
	console.log(`Logged in as ${client.user.tag}!`)
})
// LOGIN
client.login(process.env.token)
