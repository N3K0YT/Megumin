const Discord = require('discord.js')
const client = new Discord.Client()
const booru = require('booru')
const slaps = require('./assets/slaps.json')
/*							TODO
-Add XP system (not important)
-Add Profile (not important)
-Add management commands
-Change slap to embeds with gifs
...
*/
client.on('ready', () => {
    client.user.setActivity('your mom | m. ')
    console.log(`Logged in as: ${client.user.tag}!`)
})
client.on('message', msg => {
	if(msg.content === 'm.ping'){
		msg.channel.send(`Pong! ${client.ping}`)
	}
})
client.on('message', msg => {
	if (msg.content.startsWith('m.r34 ')){
		var query = msg.content.substr('m.r34 '.length).toLowerCase
		booru.search('r34', query, {limit: 4, random: true}).then(posts => {
			for (let post of posts){
				const embed = new Discord.RichEmbed().setTitle('Results on Rule 34').setImage(post.fileUrl).setFooter('Megumin by Aqua_')
}
})
}
})
client.on('message', msg => {
    if (msg.content.startsWith("m.safe ")) {
        var query = msg.content.substr('m.safe '.length).toLowerCase
        booru.search('sb', query, { limit: 4, random: true }).then(posts => {
			for (let post of posts){
				if (post){
				const embed = new Discord.RichEmbed().setTitle(`Results for **${query}** on Safebooru`).setImage(post.fileUrl).setFooter('Megumin by Aqua_')
			}}
		}).catch(err => {
			console.log(err)
			msg.channel.send('Error')
})
    }
})
client.on('message', msg => {
    if (msg.content === 'm.help') {
        const embed = new Discord.RichEmbed().setTitle('Megumin').setDescription('Displaying help text for Megumin').addField('safe', 'Searches on Safebooru').addField('r34', 'UwU').addField('ping', 'No explanation needed, right?')
    }
})
client.on('message', msg => {
	if (msg.content.startsWith('m.slap')){
		var num = Math.floor(Math.random() * 5);
		var slaparr = JSON.parse(slaps)
		var user = msg.mentions.users.first()
		cont embed = new Discord.RichEmbed().setTitle(`<@${msg.author.id}> slapped <@${user.id}>!💥💢`).setImage(slaparr[num])
		}
})
client.login(process.env.token)
