const discord = require('discord')
const client = new Discord.Client()
const booru = require('booru')
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
		msg.channel.send(`Pong! ${client.user.ping}`)
	}
})
client.on('message', msg => {
    if (msg.content.startsWith("m.r34 ")) {
        var query = msg.content.substr('m.r34 '.length)
        booru.get('r34', query.toLowerCase) { limit: 4, random: true }.then(posts => {
			for (let post of posts){
				const embed = new Discord.RichEmbed().setTitle(`Results for **${query}** on Rule 34`).setImage(post.fileUrl).setFooter('Megumin by Aqua_')
    }
	else if (msg.content === 'm.r34'){
		booru.get('r34') { limit: 4, random: true }.then(posts => {
			for (let post of posts){
				const embed = new Discord.RichEmbed().setTitle('Results on Rule 34').setImage(post.fileUrl).setFooter('Megumin by Aqua_')
    }
	}
	
})
client.on('message', msg => {
    if (msg.content.startsWith("m.safe ")) {
        var query = msg.content.substr('m.safe'.length)
        booru.get('sb', query.toLowerCase) { limit: 4, random: true }.then(posts => {
			for (let post of posts){
				const embed = new Discord.RichEmbed().setTitle(`Results for **${query}** on Safebooru`).setImage(post.fileUrl).setFooter('Megumin by Aqua_')
			}
		})
    }
})
client.on('message', msg => {
    if (msg.content === 'm.help') {
        const embed = new Discord.RichEmbed().setTitle('Megumin').setDescription('Displaying help text for Megumin').addField('safe', 'Searches on Safebooru').addField('r34', 'UwU').addField('ping', 'No explanation needed, right?')
    }
})
client.on('message', msg => {
	if (msg.content.startsWith('m.slap')
		var user = msg.mentions.users.first()
		msg.channel.send(`${msg.author.tag} slapped ${user.tag}!💥💢`)
})
client.login(process.env.token)
