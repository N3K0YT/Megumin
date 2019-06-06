const Discord = require('discord.js')
const client = new Discord.Client()
const embed = new Discord.RichEmbed()
const prefix = 'm.'
const jimp = require('jimp')
const didDaily = new Set();
const colors = require('./assets/colors.json')
const owner = '383749208575967244'
const profileCard = require('./assets/profile.js')

client.on('guildMemberAdd', member => {
	profileCard.run(client, member,jimp, colors)
		
})
client.on('message', msg =>{
	// IGNORE BOTS
	if (msg.author.bot)return 
		// IGNORE DM'S AND MESSAGES WITHOUT PREFIX
	if(!msg.content.startsWith(prefix))return;
	// CMD HANDLER
	let args = msg.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();
	if(!msg.content.startsWith(prefix))return;
	try {
		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, msg, args, colors, owner, con, cmd)
} catch {return};
})
// ALERT WHEN READY AND CHANGE ACTIVITY
client.on('ready', () => {
	client.user.setActivity('with explosive magic | m. ')
	console.log(`Logged in as ${client.user.tag}!`)
})
// XP SYSTEM
// LOGIN
client.login(process.env.token)
