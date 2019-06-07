const jimp = require('jimp')
const mask = jimp.read('mask.png')
const avatar = jimp.read('randomavatar.png').then(av => {
	av.mask(mask)
})
jimp.read('welcomebg.png').then(welcomebg => {
welcomebg.composite(avatar, 12, 34)
welcomebg.write('result.png')
})