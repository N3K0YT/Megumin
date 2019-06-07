const api = require('superagent')
exports.run =(client, msg) => {
	api.get('https://icanhazdadjoke.com/api')
	.then(res => {
		msg.channel.send(res.joke)
		
})
}