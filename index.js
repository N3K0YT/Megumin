const discord = require('discord')
const client = new Discord.Client()
const booru = require('booru')

client.on('ready' () => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity('your mom | m.')
})
client.on('message', msg {
    if (msg.content.startsWith("m.r34")) {
        var query = msg.content.substr('m.r34'.length)
        booru.get('r34', query.toLowerCase) { limit: 4, random: true }.then => {

        }
    }
})
client.on('message', msg {
    if (msg.content.startsWith("m.safe")) {
        var query = msg.content.substr('m.safe'.length)
        booru.get('sb', query.toLowerCase) { limit: 4, random: true }.then => {

        }
    }
})
client.on('message', msg {
    if (msg.content === 'm.help') {
        const embed = new Discord.RichEmbed().setTitle('Megumin').setDescription('Displaying help text for Megumin').addField('safe', 'Searches on Safebooru').addField('r34', 'UwU')
    }
})
client.login(process.env.token)
