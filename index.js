const Discord = require('discord.js')
const client = new Discord.Client()
const embed = new Discord.RichEmbed()
const dl = require('discord-leveling')
const prefix = 'm.'
const colors = require('./assets/colors.json')
const owner = '383749208575967244'
//  IGNORE BOTS
client.on('guildMemberAdd', member => {
	con.query(`INSERT INTO xplist (userId, xp) VALUES (${member.id}, 0)`, function (err) => {
		if (err) throw err
		console.log(`Successfully added ${member.username} to database`)
})
client.on('message', msg =>{
	if (msg.author.bot)return 
	// XP SYSTEM
	
let randomxp = Math.floor(Math.random() * 30) + 1;
	const gId = msg.guild.id
	const aId = msg.author.id
	con.query(`SELECT * FROM xplist WHERE userId = ${aId}`)
	var randcol = Object.values(colors)
	var color = randcol[parseInt(Math.random() * randcol.length)]
})
		
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
con.query(`UPDATE xplist SET xp = ${results[0].xp} =+ ${randomxp}`)
})
// LOGIN
client.login(process.env.token)
