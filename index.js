const Discord = require('discord.js')
const client = new Discord.Client()
const booru = require('booru')
const slaps = require('./assets/slaps.json')
const hugs = require('./assets/hugs.json')
const pokes = require('./assets/pokes.json')
const colors = require('./assets/colors.json')
const roulette = require('./assets/roulette.json')
const mysql = require('mysql')
const Kitsu = require('kitsu')
const kitsu = new Kitsu()
var color;
var muted;
function stripEmoji(text){
	return text.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
}

/*							TODO
-Add management commands
-Add games
...
*/
function genExp(){
	return Math.floor(Math.random() * 25 - 5 + 1)+ 5;
}
client.on('ready', () => {
    client.user.setActivity('with explosive magic | m. ')
    console.log(`Logged in as: ${client.user.tag}!`)
    
   
})
client.on('message', msg => {
	muted = msg.guild.roles.find('name', 'Muted');
		var lol;
		var lol2;
		const randcol = Object.values(colors)
		color = randcol[parseInt(Math.random() * randcol.length)]
		con = mysql.createConnection({
			host: 'remotemysql.com',
			user: 'mzBFUTIoNt',
			port:  '3306',
			password: 'WmmCoYMmQc',
			database: 'mzBFUTIoNt'
})
		con.connect(err => {
			if (err) throw err;
			if (!msg.author.bot){
			con.query(`SELECT * from xplist WHERE userId = '${msg.author.id}'`, (err, rows) =>{
				if (err) throw err;
				if (rows.length < 1){
					lol = `INSERT INTO xplist (name, userId, xp) VALUES (${msg.author.name}, ${msg.author.id}, ${genExp()})`
					
} else{
let xp = rows[0].xp
lol = `UPDATE xplist SET xp = ${xp+ genExp()} WHERE userId = ${msg.author.id}`
lol2 = `UPDATE xplist SET name = '${stripEmoji(msg.author.username)}' WHERE userId = ${msg.author.id}`
}
con.query(lol)
con.query(lol2)
con.end()
})
}
})
})
client.on('message', msg => {
	if(msg.content === 'm.ping'){
		msg.channel.send(`Pong! ${client.ping}`)
	}
})
client.on('message', msg => {
	if (msg.content.startsWith('m.r34 ')){
		var query = msg.content.substr('m.r34 '.length)
		booru.search('r34', query, {limit: 4, random: true}).then(posts => {
			for (let post of posts){
				const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
				const embed = new Discord.RichEmbed().setTitle('Results on Rule 34').setColor(color).setImage(post.fileUrl).setFooter('Megumin by Aqua_')
				msg.channel.send(embed)
}
})
}
})
client.on('message', msg => {
    if (msg.content.startsWith("m.safe ")) {
    	const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
        var query = msg.content.substr('m.safe '.length).toLowerCase().toString()
        booru.search('sb', query, { limit: 4, random: true }).then(posts => {
			for (let post of posts){
				if (post){
					const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
				const embed = new Discord.RichEmbed().setTitle(`Results for **${query}** on Safebooru`).setColor(color).setImage(post.fileUrl).setFooter('Megumin by Aqua_')
				msg.channel.send(embed)
			}}
		}).catch(err => {
			console.log(err)
			msg.channel.send('Error')
})
    }
})
client.on('message', msg => {
	if (msg.content.startsWith('m.xp')){
		con.connect()
	var amm;
	var usr;
	var embed;
	var user = msg.mentions.users.first();
	if (user){
	con.query(`SELECT * from xplist WHERE userId = '${user.id}'`, (err, result) =>{
		amm = result[0].xp
		usr =user.username
		embed = new Discord.RichEmbed().setColor(color).setTitle(`${usr}'s xp`).setDescription(`Your xp is: ${amm}`)
		console.log(`${usr} | ${amm}`)
		msg.channel.send(embed)
		
})
} else {
	con.query(`SELECT * from xplist WHERE userId = '${msg.author.id}'`, (err, result) =>{
		usr = msg.author.username
		amm = result[0].xp
		embed = new Discord.RichEmbed().setColor(color).setTitle(`${usr}'s xp`).setDescription(`Your xp is: ${amm}`)
		console.log(`${usr} | ${amm}`)
		msg.channel.send(embed)
		con.end()
		
})
}
}
})
client.on('message', msg => {
    if (msg.content === 'm.help') {
    	const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
        const embed = new Discord.RichEmbed()
		.setColor(color)
		.setTitle('Megumin')
		.setDescription('Displaying help text for Megumin')
		.addField('safe', 'Searches on Safebooru', true)
		.addField('r34', 'UwU', true)
		.addField('ping', 'No explanation needed, right?', true)
		.addField('slap', 'Bitch slap that bitch', true)
		.addField('avatar', 'Shows your avatar, if you ***ping*** someone it will show theirs', true)
		.addField('poke', '***poke***', true)
		.addField('xp', 'shows your xp', true )
		.addField('huh', 'hugs tagged user', true)
		.addField('roulette', '***boom***', true)
        msg.channel.send(embed)
    }
})
client.on('message', msg => {
	if (msg.content.startsWith('m.slap')){
		const values = Object.values(slaps)
		const slap = values[parseInt(Math.random() * values.length)]
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		const nani = client.emojis.get("583450493745889285")
		var user = msg.mentions.users.first()
		const embed = new Discord.RichEmbed().setColor(color).setDescription(`<@${msg.author.id}> slapped <@${user.id}>! ${nani.toString()} `).setImage(slap)
		msg.channel.send(embed)
		if (user.tag === 'Megumin#6443'){
			const embed = new Discord.RichEmbed().setColor(color).setTitle('Ouch')
			msg.channel.send(embed)
}
		}
})
client.on('message', msg => {
	if (msg.content.startsWith('m.poke')){
		const values = Object.values(pokes)
		const poke = values[parseInt(Math.random() * values.length)]
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		var user = msg.mentions.users.first()
		const embed = new Discord.RichEmbed().setColor(color).setDescription(`<@${msg.author.id}> poked <@${user.id}>!`).setImage(poke)
		msg.channel.send(embed)
		if (user.tag === 'Megumin#6443'){
			const embed = new Discord.RichEmbed().setColor(color).setTitle('UwU')
			msg.channel.send(embed)
}
		}
})
client.on('message', msg => {
	if (msg.content.startsWith('m.hug')){
		const values = Object.values(hugs)
		const hug = values[parseInt(Math.random() * values.length)]
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		var user = msg.mentions.users.first()
		const embed = new Discord.RichEmbed().setColor(color).setDescription(`<@${msg.author.id}> hugged <@${user.id}>!`).setImage(hug)
		msg.channel.send(embed)
		if (user.tag === 'Megumin#6443'){
			const embed = new Discord.RichEmbed().setColor(color).setTitle('UwU')
			msg.channel.send(embed)
}
		}
})
client.on('message', msg => {
	if(msg.content.startsWith('m.ban ')){
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
	var usr = msg.mentions.users.first()
	    if(!msg.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("You don't have permission to perform this command!")

        if(!usr) return msg.channel.send("Please provide a user to ban!")

    if(!msg.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("I dont have permission to perform this command!")|
    msg.delete()
    try {
        msg.guild.ban(usr.id)
        msg.channel.send(`${usr.tag} has been banned from the guild!`)
    } catch(e) {
        console.log(e.message)
    }
    

    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL)
    .addField("Moderation:", "ban")
    .addField("Victim:", `${usr.username} (${usr.id})`)
    .addField("Moderator:", msg.author.username)
    .addField("Date:", msg.createdAt.toLocaleString())
    
        let logs = msg.guild.channels.find(c => c.name === "logs")
        logs.send(embed)
        }
})
client.on('message', msg => {
	if(msg.content.startsWith('m.kick ')){
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
	var usr = msg.mentions.users.first()
	    if(!msg.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("You don't have permission to perform this command!")
        if(!usr) return msg.channel.send("Please provide a user to kick!")

    if(!msg.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("I dont have permission to perform this command!")|
    msg.delete()
    try {
        usr.kick()
        msg.channel.send(`${usr.tag} has been kicked from the guild!`)
    } catch(e) {
        console.log(e.message)
    }
    

    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL)
    .addField("Moderation:", "kick")
    .addField("Victim:", `${usr.username} (${usr.id})`)
    .addField("Moderator:", msg.author.username)
    .addField("Date:", msg.createdAt.toLocaleString())
    
        let logs = msg.guild.channels.find(c => c.name === "logs")
        logs.send(embed)
        }
})
client.on('message', msg => {
	if(msg.content.startsWith('m.unban ')){
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
	var usr = msg.mentions.users.first()
	    if(!msg.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("You don't have permission to perform this command!")

        if(!usr) return msg.channel.send("Please provide a user to unban!")

    if(!msg.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("I dont have permission to perform this command!")|
    msg.delete()
    try {
        msg.guild.unban(usr.id)
        msg.channel.send(`${usr.tag} has been unbanned!`)
    } catch(e) {
        console.log(e.message)
    }
    

    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL)
    .addField("Moderation:", "unban")
    .addField("Victim:", `${usr.username} (${usr.id})`)
    .addField("Moderator:", msg.author.username)
    .addField("Date:", msg.createdAt.toLocaleString())
    
        let logs = msg.guild.channels.find(c => c.name === "logs")
        logs.send(embed)
        }
})
client.on('message', msg => {
	if(msg.content.startsWith('m.mute ')){
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
	var usr = msg.mentions.users.first()
	    if(!msg.member.hasPermission(["ADMINISTRATOR"])) return msg.channel.send("You don't have permission to perform this command!")

    let bannedMember = client.fetchUser(usr.id)
        if(!usr) return msg.channel.send("Please provide a user to mute!")

    if(!msg.guild.me.hasPermission(["ADMINISTRATOR"])) return msg.channel.send("I dont have permission to perform this command!")|
    msg.delete()
    try {
    	var yeet = msg.mentions.members.first()
    	yeet.addRole(muted)
    	console.log(`${usr.tag} muted`)
        msg.channel.send(`${usr.tag} has been muted xD`)
    } catch(e) {
        console.log(e.message)
    }
    

    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL)
    .addField("Moderation:", "mute")
    .addField("Victim:", `${usr.username} (${usr.id})`)
    .addField("Moderator:", msg.author.username)
    .addField("Date:", msg.createdAt.toLocaleString())
    
        let logs = msg.guild.channels.find(c => c.name === "logs")
        logs.send(embed)
        }
})
client.on('message', msg => {
	if(msg.content.startsWith('m.unmute ')){
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
	var usr = msg.mentions.users.first()
	    if(!msg.member.hasPermission(["ADMINISTRATOR"])) return msg.channel.send("You don't have permission to perform this command!")

    let bannedMember = client.fetchUser(usr.id)
        if(!usr) return msg.channel.send("Please provide a user to unmute!")

    if(!msg.guild.me.hasPermission(["ADMINISTRATOR"])) return msg.channel.send("I dont have permission to perform this command!")|
    msg.delete()
    try {
    	var yeet = msg.mentions.members.first()
        yeet.removeRole(muted)
        msg.channel.send(`${usr.tag} has been unmuted from the guild!`)
    } catch(e) {
        console.log(e.message)
    }
    

    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL)
    .addField("Moderation:", "unmute")
    .addField("Victim:", `${usr.username} (${usr.id})`)
    .addField("Moderator:", msg.author.username)
    .addField("Date:", msg.createdAt.toLocaleString())
    
        let logs = msg.guild.channels.find(c => c.name === "logs")
        logs.send(embed)
        }
})
client.on('message', msg => {
	if(msg.content === 'm.info'){
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		var secs = client.uptime / 1000;
		var days = Math.floor(secs / 86400)
		var mins = Math.floor(secs /3600)
		var seconds = secs % 60
		var seconds = seconds.toFixed(0)
		const embed = new Discord.RichEmbed().setColor(color).setTitle('Megumin Info').addField('Made by:', 'Aqua_').addField('Uptime:', `${days} days / ${mins} minutes / ${seconds} seconds`).setFooter(`Requested by ${msg.author.username}`, msg.author.avatarURL)
		msg.channel.send(embed)
        }
})
client.on('message', msg => {
	if (msg.content.startsWith('m.avatar ')){
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		var usr = msg.mentions.users.first()
		const embed = new Discord.RichEmbed().setColor(color).setTitle(`${usr.username}'s avatar`).setImage(usr.avatarURL)
		msg.channel.send(embed)
		
}
else if (msg.content === 'm.avatar'){
	const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		const embed = new Discord.RichEmbed().setColor(color).setTitle(`${msg.author.username}'s avatar`).setImage(msg.author.avatarURL)
		msg.channel.send(embed)
}
})
client.on('message', msg => {
	if (msg.content === 'm.roulette'){
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		const nani = client.emojis.get("583450493745889285")
		var message;
		const randshot = Object.values(roulette)
		const result = randshot[parseInt(Math.random() * randshot.length)]
		if (result === true){
			message = 'You survived :D'
			console.log(message)
}
		if (result === false){
			message = `Oof, you've been shot ${nani}`
			console.log(message)
}
		const embed = new Discord.RichEmbed().setColor(color).setTitle(message).addBlankField().setFooter(msg.author.username, msg.author.avatarURL)
		msg.channel.send(embed)
}
})
client.on('mesage', msg =>{
	if (msg.content.startsWith('m.passwd ')){
		var passlength = parseInt(msg.content.substr('m.passwd '.length))
		var passwd
}
})
client.login(process.env.token)