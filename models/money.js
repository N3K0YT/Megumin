const mongoose = require('mongoose');

const moneySchema = mongoose.Schema({
	userId: String, 
	amount: Number
})
module.exports= mongoose.model('Money', moneySchema)