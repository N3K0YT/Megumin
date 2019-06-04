const Discord = require('discord.js')
const client = new Discord.Client()
const embed = new Discord.RichEmbed()
const prefix = 'm.'
const didDaily = new Set();
const mysql = require('mysql')
const colors = require('./assets/colors.json')
const owner = '383749208575967244'

client.on('guildMemberAdd', member => {
	con.query(`INSERT INTO xplist (userId, xp) VALUES (${member.id}, 0)`, function (err) => {
		if (err) throw err
		console.log(`Successfully added ${member.username} to database`)
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
// DB CONNECTION
con = mysql.createConnection({
			host: 'remotemysql.com',
			user: 'mzBFUTIoNt',
			port:  '3306',
			password: 'WmmCoYMmQc',
			database: 'mzBFUTIoNt'
})
con.connect( function (err) => {
	if (err) throw err;
	console.log('Sucessfully connected to db')
}
// XP SYSTEM
client.on('message', async (msg) => {
	if (msg.content.startsWith(prefix)) return;
	if (msg.author.bot) return;
	let randomxp = Math.floor(Math.random() * 30) + 
	con.query(`SELECT * FROM xplist WHERE userId = ${msg.author.id}`, (err, results) => {
		if (err) throw err;
		if (results[0].length === 0) {
		con.query(`INSERT INTO xplist (userId, xp) VALUES ('${msg.author.id}', randomxp )`)
})
}
con.query(`UPDATE xplist SET xp = ${results[0].xp} + ${randomxp} WHERE userId = ${msg.author.id}`)
})
// LOGIN
client.login(process.env.token)
