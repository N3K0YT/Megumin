const Discord = require(discord.js)
const dl = require('dscord-leveling')
exports.run = (client, msg, args) => {
if (message.mentions.users.first()) {
var output = await dl.Leaderboard({
        search: message.mentions.users.first().id
      })
      message.channel.send(`***${message.mentions.users.first().tag}*** is number **${output.placement}** on my leaderboard!`);
      //Searches for the top 3 and outputs it to the user.
    } else {
      dl.Leaderboard({
        limit: 3
      }).then(async users => { //make sure it is async
        var firstplace = await client.fetchUser(users[0].userid) //Searches for the user object in discord for first place
        var secondplace = await client.fetchUser(users[1].userid) //Searches for the user object in discord for second place
        var thirdplace = await client.fetchUser(users[2].userid) //Searches for the user object in discord for third place
const embed = new Discord.RichEmbed()
        .setDescriptiom('My leaderboard:')
		.addField('First',`Name: ${firstplace.tag} level: ${users[0].level} xp: ${users[0].xp}`, true)
		.addField('Second', `2 - Name: ${secondplace.tag} level: ${users[1].level} xp: ${users[1].xp}`, true)
		.addField('Third', `3 - Name: ${thirdplace.tag} level: ${users[2].level} xp: ${users[2].xp}`, true)
      })
    }
}