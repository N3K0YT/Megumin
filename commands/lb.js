money = require('../assets/db/money.json')
exports.run = (client, msg) => {
	var byAmt = Object.values(money).slice(0);
byAmt.sort(function(a,b) {
    return a.amount - b.amount;
});
console.log('by amount:');
console.log(byAmt);
}