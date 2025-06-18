module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
	description: "Off Bot",
	commandCategory: "System",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Bye I love you mwah",event.threadID, () =>process.exit(0))
