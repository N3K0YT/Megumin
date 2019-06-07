const api = require('superagent')
exports.run = (client, msg) => {
	api.get('https://api.chucknorris.io/jokes/random')
	.then(res => {
		msg.channel.send(res.body.value)
		
})
}