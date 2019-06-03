const Discord = require('discord.js')
const client = new Discord.Client()
const embed = new Discord.RichEmbed()
const dl = require('discord-leveling')
const prefix = 'm.'
const colors = require('./assets/colors.json')
const owner = '383749208575967244'
//  IGNORE BOTS
client.on('message', async (msg)=>{
	if (msg.author.bot)return 
	// XP SYSTEM
let randomxp = Math.floor(Math.random() * 30) + 1;
	const gId = msg.guild.id
	const aId = msg.author.id
	const hasxp = await dl.Fetch(aId)
	if (!hasxp.xp) {
	var addxp = await dl.AddXp(aId, randomxp)
}
	var xp = await addxp.newxp
	let profile = dl.Fetch(aId)
	var level = await profile.level
	var randcol = Object.values(colors)
	var color = randcol[parseInt(Math.random() * randcol.length)]
	let levelUp = 5 * (level ** 2) + 50 * level +100;
	if (xp  >= levelUp) {
		await dl.AddLevel(msg.author.id, 1)
		let embed = new Discord.RichEmbed()
		.setColor(color)
		.setTitle(`${msg.author.username}'s Profile`)
		.setThumbnail(msg.author.avatarURL)
		.addField('xp', xp, true)
		.addField('Level', level, true)
		msg.channel.send(embed)
		}
		
		// IGNORE DM'S AND MESSAGES WITHOUT PREFIX
	if (msg.channel.type === 'dm') return
	if(!msg.content.startsWith(prefix))return;
	// CMD HANDLER
	let args = msg.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();
	if(!msg.content.startsWith(prefix))return;
	try {
		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, msg, args, colors, owner, cmd, xp, level)
} catch {return};
})
// ALERT WHEN READY AND CHANGE ACTIVITY
client.on('ready', () => {
	client.user.setActivity('with explosive magic | m. ')
	console.log(`Logged in as ${client.user.tag}!`)
})
// XP SYSTEM
client.on('message', async (msg) => {
	
})
// LOGIN
client.login(process.env.token)