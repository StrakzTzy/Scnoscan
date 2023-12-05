const chalk = require("chalk")
const fs = require("fs")

//owmner v card
global.owner = ['6285771598591'] //ur owner number
global.ownernomer = "6285771598591" //ur owner number2
global.ownername = "StarkzOffc" //ur owner name
global.ytname = "YT: Starkzhost13" //ur yt chanel name
global.socialm = "GitHub: Starkzhost" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.ownergc = "-"
global.botname = "Created By Starkz"
global.ownerNumber = ["6285771598591@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@maapuluh"
global.themeemoji = '🪀'
global.wm = "StarkzStore"
global.packname = "Sticker By"
global.author = "FarrelOffc\n\n"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.tekspushkon = ''
global.keyopenai ='iigf'

global.domain = '' // Isi Domain Lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '' // id eggs yang dipakai
global.location = '' // id location

global.limitawal = {
    premium: "Infinity",
    free: 5
}

//media target
global.thumb = { url: 'https://telegra.ph/file/3b61c3bef73f6b3dcdd70.jpg' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
