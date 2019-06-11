const Enmap = require("enmap");
client.leveling = new Enmap({name: "leveling"});

exports.run = (client, msg) => {
	const aId = msg.author.id;
	const gId = msg.author.id;
	const key = `${gId}-${aId}`;
    client.points.ensure(key, {
      user: aId,
      guild: gId,
      xp: 0,
      level: 1
    });
    client.points.inc(key, "leveling");
	const curLevel = Math.floor(0.1 * Math.sqrt(client.leveling.get(key, "leveling")));
	if (client.leveling.get(key, "level") < curLevel) {
  message.channel.send(`${msg.author.username}, you\'ve leveled up to level ***${curLevel}***! Ain\'t that dandy?`);
}
	
}
