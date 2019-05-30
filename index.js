const Discord = require('discord.js')
const client = new Discord.Client()
const booru = require('booru')
const slaps = require('./assets/slaps.json')
const hugs = require('./assets/hugs.json')
const pokes = require('./assets/pokes.json')
const colors = require('./assets/colors.json')
const dl = require('discord-leveling')

/*							TODO
-Add management commands
-Add games
...
*/
client.on('ready', () => {
    client.user.setActivity('casting explosive magic | m. ')
    console.log(`Logged in as: ${client.user.tag}!`)
   
})
client.on('message', msg => {
		dl.AddXp(msg.author.id, 5)
})
client.on('message', msg => {
	if (msg.content === 'm.xp'){
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
		var xp = dl.Fetch(msg.author.id)
		if (xp){
			console.log(xp)
		const embed = new Discord.RichEmbed().setTitle(msg.author.username).setColor(color).addField(`XP: ${xp.xp}`)
		msg.channel.send(embed)
}
}
})
client.on('message', msg => {
	if(msg.content === 'm.ping'){
		msg.channel.send(`Pong! ${client.ping}`)
	}
})
client.on('message', msg => {
	if (msg.content.startsWith('m.r34 ')){
		const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
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
    if (msg.content === 'm.help') {
    	const randcol = Object.values(colors)
		const color = randcol[parseInt(Math.random() * randcol.length)]
        const embed = new Discord.RichEmbed().setColor(color).setTitle('Megumin').setDescription('Displaying help text for Megumin').addField('safe', 'Searches on Safebooru', true).addField('r34', 'UwU', true).addField('ping', 'No explanation needed, right?', true).addField('slap', 'Bitch slap that bitch', true).addField('poke', '***poke***', true)
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
		}
})
client.on('message', msg => {
	if(msg.content.startsWith('m.ban '){
	var user = msg.mentions.users.first
	    if(!msg.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("You don't have permission to perform this command!")

    let bannedMember = await bot.fetchUser(args[0])
        if(!bannedMember) return msg.channel.send("Please provide a user to ban!")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason given!"

    if(!msg.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("I dont have permission to perform this command!")|
    msg.delete()
    try {
        //msg.guild.ban(bannedMember, {reason: reason})
        msg.channel.send(`${bannedMember.tag} has been banned from the guild!`)
    } catch(e) {
        console.log(e.message)
    }

    let embed = new Discord.RichEmbed()
    .setColor(colours.red_light)
    .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL)
    .addField("Moderation:", "ban")
    .addField("Moderated on:", `${bannedMember.username} (${bannedMember.id})`)
    .addField("Moderator:", msg.author.username)
    .addField("Reason:", reason)
    .addField("Date:", msg.createdAt.toLocaleString())
    
        let logs = msg.guild.channels.find(c => c.name === "logs")
        logs.send(embed)
        }
})
/*
client.on('message', msg => {
	if(msg.content.startsWith('m.ban ')
	    if(!msg.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("You don't have permission to perform this command!")

    let bannedMember = await bot.fetchUser(args[0])
        if(!bannedMember) return msg.channel.send("Please provide a user ban!")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason given!"

    if(!msg.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("I dont have permission to perform this command!")|
    msg.delete()
    try {
        msg.guild.unban(bannedMember, {reason: reason})
        msg.channel.send(`${bannedMember.tag} has been unbanned from the guild!`)
    } catch(e) {
        console.log(e.message)
    }

    let embed = new Discord.RichEmbed()
    .setColor(colours.red_light)
    .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL)
    .addField("Moderation:", "kick")
    .addField("Moderated on:", `${kickedMember.username} (${kickedMember.id})`)
    .addField("Moderator:", msg.author.username)
    .addField("Reason:", reason)
    .addField("Date:", msg.createdAt.toLocaleString())
    
        let logs = msg.guild.channels.find(c => c.name === "logs")
        logs.send(embed)
})
*/

client.login(process.env.token)
