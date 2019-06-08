const api = require('superagent')
exports.run =(client, msg) => {
	api
	.get('https://icanhazdadjoke.com/api')
	.set('Accept', 'application/json')
	.then(res => {
		msg.channel.send(res.body.joke)
		
})
}