const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.1',
    hasPermssion: 0,
    credits: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 (Modified by ChatGPT)',
    description: 'Set Karne Ke Bad Automatically Msg Send Karega (Bangladesh Time)',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:00 AM', message: `╔═════ 💐 𝟏𝟐:𝟎𝟎 𝐀𝐌 💐═════╗
রাত ১২টা বাজে! ভূতেরাও 
এখন বিরক্ত করতে চায় না!  
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '1:00 AM', message: `╔═════ 💐 𝟏:𝟎𝟎 𝐀𝐌 💐 ═════╗
প্রিয় দুরত্ব কখনো সম্পর্ক 
আলাদা করতে পারে নাহ 
সময় কখনো সম্পর্ক
তৈরিকরে নাহ্
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '2:00 AM', message: `╔═════ 💐 𝟐:𝟎𝟎 𝐀𝐌 💐 ═════╗
এ সময় শুধু প্রেমিক আর
প্রোগ্রামার জেগে থাকে!  
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '3:00 AM', message: `╔═════ 💐 𝟑:𝟎𝟎 𝐀𝐌 💐 ═════╗
নামাজ শ্রেষ্ঠ ইবাদত 🌷
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '4:00 AM', message: `╔═════ 💐 𝟒:𝟎𝟎 𝐀𝐌 💐 ═════╗
🍁🙂 Life is short. Don’t waste it.
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '5:00 AM', message: `╔══════ 💐 𝟓:𝟎𝟎 𝐀𝐌 💐 ══════╗
রাব্বির হামহুমা কামা রাব্বাঈয়ানী সাগিরা
╚══════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ══════╝` },
    { time: '6:00 AM', message: `╔═════ 💐 𝟔:𝟎𝟎 𝐀𝐌 💐 ═════╗
আসসালামুয়ালাইকুম ওরাহমাতুল্লাহ 
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '7:00 AM', message: `╔═════ 💐 𝟕:𝟎𝟎 𝐀𝐌 💐 ═════╗
নতুন সকাল, নতুন আশা — শুভ সকাল
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '8:00 AM', message: `╔══════ 💐 𝟖:𝟎𝟎 𝐀𝐌 💐 ══════╗
সকাল সকাল নিজের লক্ষ্য ঠিক করে নিন
╚══════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ══════╝` },
    { time: '9:00 AM', message: `╔═════ 💐 𝟗:𝟎𝟎 𝐀𝐌 💐 ═════╗
আজও ভালো কিছু হবে, বিশ্বাস রাখুন
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '10:00 AM', message: `╔══════ 💐 𝟏𝟎:𝟎𝟎 𝐀𝐌 💐 ══════╗
সময়কে মূল্য দিন.সময় আপনাকে মূল্য দেবে
╚══════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═══════╝` },
    { time: '11:00 AM', message: `╔═════ 💐 𝟏𝟏:𝟎𝟎 𝐀𝐌 💐 ═════╗
যে স্বপ্ন দেখে সে অনেক কিছু পারে
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ══════╝` },
    { time: '12:00 PM', message: `╔═════ 💐 𝟏𝟐:𝟎𝟎 𝐏𝐌 💐 ═════╗
দুপুরের শুভেচ্ছা — ভালো থাকুন
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ══════╝` },
    { time: '1:00 PM', message: `╔═════ 💐 𝟏:𝟎𝟎 𝐏𝐌 💐 ═════╗
বিরতি নিন, নিজেকে ভালোবাসুন
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '2:00 PM', message: `╔═════ 💐 𝟐:𝟎𝟎 𝐏𝐌 💐 ═════╗
আপনার মনোযোগই আপনার শক্তি
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '3:00 PM', message: `╔═════ 💐 𝟑:𝟎𝟎 𝐏𝐌 💐 ═════╗
দুপুর শেষে বিকেলের শুভেচ্ছা
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '4:00 PM', message: `╔═════ 💐 𝟒:𝟎𝟎 𝐏𝐌 💐 ═════╗
এক কাপ চা আর শান্ত বিকেল চাই 
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '5:00 PM', message: `╔═════ 💐 𝟓:𝟎𝟎 𝐏𝐌 💐 ═════╗
বিকেল মানেই একটু বিশ্রাম ও প্রশান্তি
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '6:00 PM', message: `╔═════ 💐 𝟔:𝟎𝟎 𝐏𝐌 💐 ═════╗
আসরের নামাজ ভুলবেন না!    
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '7:00 PM', message: `╔═════ 💐 𝟕:𝟎𝟎 𝐏𝐌 💐 ══════╗
বিকেলের শেষ আলোতেও সৌন্দর্য থাকে
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ══════╝` },
    { time: '8:00 PM', message: `╔═════ 💐 𝟖:𝟎𝟎 𝐏𝐌 💐 ═════╗
আজকের দিন কেমন গেল?
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '9:00 PM', message: `╔═════ 💐 𝟗:𝟎𝟎 𝐏𝐌 💐 ═════╗
ঘুমানোর আগে প্রার্থনা করুণ
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '10:00 PM', message: `╔════ 💐 𝟏𝟎:𝟎𝟎 𝐏𝐌 💐 ═════╗
রাতের আরামদায়ক শুভেচ্ছা 
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ═════╝` },
    { time: '11:00 PM', message: `╔═════ 💐 𝟏𝟏:𝟎𝟎 𝐏𝐌 💐 ═════╗
ঘুমিয়ে পড়ার সময় হয়েছে, শুভ রাত্রি  
╚═════ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒 ══════╝` },
];

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ AUTOSENT COMMAND LOADED (BD TIME) ============"));
    messages.forEach(({ time, message }) => {
        const [hour, minute, period] = time.trim().split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour !== '12') hour24 += 12;
        if (period === 'AM' && hour === '12') hour24 = 0;

        const rule = new schedule.RecurrenceRule();
        rule.tz = 'Asia/Dhaka';
        rule.hour = hour24;
        rule.minute = parseInt(minute, 10);

        schedule.scheduleJob(rule, () => {
            if (!global.data?.allThreadID) return;
            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(message, threadID, (error) => {
                    if (error) {
                        console.error(`Failed to send message to ${threadID}:`, error);
                    }
                });
            });
        });
        console.log(chalk.hex("#00FFFF")(`Scheduled (BDT): ${time} => ${message.split('\n')[0]}...`));
    });
};

module.exports.run = () => {
    // Main logic is in onLoad
};
