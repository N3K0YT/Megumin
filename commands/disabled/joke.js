const api = require('superagent')
exports.run =(client, msg) => {
	api.get('https://api.chucknorris.io/jokes/random')
	.then(res => {
		console.log(res.value)
		msg.channel.send(res.value)
})
}