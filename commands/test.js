const Jimp = require('jimp')
exports.run = (client, msg) => {
	bg = Jimp.read('profile.png')
	avatar = jimp.read(`${msg.author.avatarURL}`)
	mask = Jimp.read('mask.png')
	avatar.mask(mask, 0, 0).write("avatar-circle.png");
}