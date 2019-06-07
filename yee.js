const Discord = require('discord.js')
const client = new Discord.Client()
const embed = new Discord.RichEmbed()
const prefix = 'm.'
const colors = require('./assets/colors.json')
const db = require('megadb')
const owner = '383749208575967244'
const sql = require('./assets/db.js')
let moneyDB = new db.crearDB('money')
let xpDB = new db.crearDB('xp')
//  SORT MESSAGES
client.on('message', msg =>{
	if (msg.channel.type === 'dm') return
	if(!msg.content.startsWith(prefix))return;
	if (msg.author.bot)return msg.channel.send("You's a bot my nigga")
	let args = msg.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();
	if(!msg.content.startsWith(prefix))return;
	if (msg.author.bot)return msg.channel.send("You's a bot my nigga")
	try {
		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, msg, args, owner, cmd)
} catch {return};
})
// ALERT WHEN READY AND CHANGE ACTIVITY
client.on('ready', () => {
	client.user.setActivity('with explosive magic | m. ')
	console.log(`Logged in as ${client.user.tag}!`)
})
// XP SYSTEM
client.on('message', async (msg) => {
	var randcol = Object.values(colors)
		var color = randcol[parseInt(Math.random() * randcol.length)]
	if (!xpDB.tiene(msg.guild.id)) xpDB.establecer(msg.guild.id, {});
	console.log(xpDB)
	if (!xpDB.tiene(msg.guild.id + msg.author.id)) xpDB.establecer(`${msg.guild.id}${msg.author.id}`,{ xp: 0, level: 1})
	console.log(xpDB)
	
	const xp = await xpDB.obtener(`${msg.guild.id}.${msg.author.id}.xp`)
	const level = await xpDB.obtener(`${msg.guild.id}.${msg.author.id}.level`)
	console.log(xp + ' | ' + level)
	let randomXp = Math.floor(Math.random() * 30) + 1;
	let levelUp = 5 * (level ** 2) + 50 * level +100;
	if ((xp + randomXp) >= levelUp){
		xpDB.establecer(`${msg.guild.id}.${msg.author.id}`, {xp: 0, level: parseInt(level+1)})
		let embed = new Discord.RichEmbed()
		.setColor(color)
		.setTitle(`${msg.author.username}'s Profile`)
		.setThumbnail(msg.author.avatarURL)
		.addField('xp', xp + randomXp, true)
		.addField('Level', level+1, true)
		msg.channel.send(embed)
}
})
// LOGIN
client.login('NTgzMzI2ODU3NDQ1NzY5MjI3.XO6vlQ.jmHvFjcu_ISZPZdQPHZoAoTwEPM')