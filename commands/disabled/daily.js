exports.run = (client, msg, con) => {
	 const xp;
	con.query(`SELECT * FROM moneylist WHERE userId = ${msg.author.id}`, function (err, results) =>{
		if (err) throw err
		if (results[0].length === 0) con.query(`INSERT INTO moneylist (userId, amount) VALUES ('${msg.author.id}', 0 )`)

	if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait until tomorrow before getting typing this again. - " + msg.author.username);
    } else {
    	con.query(`UPDATE moneylist SET amount = results[0].amount + 100 WHERE userId = ${msg.author.id}`)
      message.reply(`You claimed your daily coins succesfully! You now own ${profile.newbalance} coins.`);
    }
           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't use the command for a day
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a day
          talkedRecently.delete(msg.author.id);
        }, 86400000);
    }
})
}