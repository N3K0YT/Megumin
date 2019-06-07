const Discord = require('discord.js')
const client = new Discord.Client()
const embed = new Discord.RichEmbed()
const fs = require('fs')
//const jimp = require('jimp')
const dPrefix = 'm.'
const money = require('./assets/db/money.json')
const xp = require('./assets/db/xp.json')
const prefixes = require('./assets/db/prefixes.json')
const colors = require('./assets/colors.json')
const owner = '383749208575967244'
const addXp = Math.floor(Math.random() * 7) + 8

client.on('guildMemberAdd', member => {
	if (!xp[member.id]){
		xp[member.id] = {
			xp: 0,
			level: 1
}
}
	if (!money[member.id]) {
		money[member.id] ={
		amount: 100
}
}
		
})
client.on('message', msg =>{
	// IGNORE BOTS
	if (msg.author.bot)return
	// ADD TO XP DB
	if (!xp[msg.author.id]){
		xp[msg.author.id] = {
			xp: 0,
			level: 1
}
}	//ADD TO MONEY DB
	if (!money[msg.author.id]) {
		money[msg.author.id] ={
		amount: 100
}
}
	// ADD RANDOM AMOUNT OF XP ON MESSAGE
		xp[msg.author.id].xp += addXp;
		const nxtLvl = xp[msg.author.id].level * 350
		if (xp[msg.author.id].xp >= nxtLvl){
			xp[msg.author.id].level += 1
			xp[msg.author.id].xp = 0
			msg.channel.send(`Yea boiiiii <@${msg.author.id}> you just leveled up`)
}
	fs.writeFile('./assets/db/xp.json', JSON.stringify(xp), (err) => {
				if (err) throw err;
})
fs.writeFile('./assets/db/money.json', JSON.stringify(money), (err) => {
	if (err) throw err;
})
fs.writeFile('./assets/db/prefixes.json', JSON.stringify(prefixes), (err) => {
	if (err) throw err;
})
		// IGNORE DM'S AND MESSAGES WITHOUT PREFIX
const prefix = prefixes[msg.guild.id].prefix || dPrefix
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
// ALERT WHEN READY AND CHANGE ACTIVITY
client.on('ready', () => {
	client.user.setActivity('with explosive magic | m. ')
	console.log(`Logged in as ${client.user.tag}!`)
})
// LOGIN
client.login('NTgzMzI2ODU3NDQ1NzY5MjI3.XO6vlQ.jmHvFjcu_ISZPZdQPHZoAoTwEPM')
