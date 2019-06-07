const Discord = require('discord.js')
const client = new Discord.Client()
const embed = new Discord.RichEmbed()
const fs = require('fs')
const mysql = require('mysql')
//const jimp = require('jimp')
const prefix = 'm.'
const colors = require('./assets/colors.json')
const owner = '383749208575967244'
const addXp = Math.floor(Math.random() * 7) + 8
const con = mysql.createConnection({
	host: 'remotemysql.com',
			user: 'mzBFUTIoNt',
			port:  '3306',
			password: 'WmmCoYMmQc',
			database: 'mzBFUTIoNt'
})
client.on('guildMemberAdd', member => {
		
		//con.query(`INSERT INTO xplist (userId, xp) VALUES (${member.id}, 0)`)
		//con.query(`INSERT INTO moneylist (userId, amount ) VALUES (${member.id}, 0)`)
})
client.on('message', msg =>{
	// IGNORE BOTS
	if (msg.author.bot)return
	//const cPrefix = con.query(`SELECT prefix FROM prefixes WHERE guildId = ${msg.guild.id}`)
	
	//if (!cPrefix) return con.query(`INSERT INTO prefixes (guildId, prefix) VALUES (${msg.guild.id}, m.)`)
	
//const prefix = cPrefix || dPrefix

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
//CONNECT TO MYSQL DB
con.connect(err => {
	if(err) throw err
	//console.log('Connected to db')
	//con.query('SHOW TABLES', console.log())
})
// LOGIN
client.login('NTgzMzI2ODU3NDQ1NzY5MjI3.XO6vlQ.jmHvFjcu_ISZPZdQPHZoAoTwEPM')
