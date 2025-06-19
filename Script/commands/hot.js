module.exports.config = {
  'name': "hot",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  'description': "RANDOM islamic video",
  'commandCategory': "Random video",
  'usages': "Statusvideo",
  'cooldowns': 0x2,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async ({
  api: _0xaa4f68,
  event: _0x3ec0df,
  args: _0x22794f,
  Users: _0x131c44,
  Threads: _0x38b004,
  Currencies: _0x36b5ec
}) => {
  const _0x3d77bf = global.nodemodule.request;
  const _0x23750b = global.nodemodule["fs-extra"];
  var _0x2e067a = ["https://imgur.com/a/txDXAva", "https://i.imgur.com/a/nxNCV20.mp4", "https://i.imgur.com/a/cMNVa1Y.mp4", "https://i.imgur.com/a/J3o6wIR.mp4", "https://i.imgur.com/a/ZIcn1pv.mp4", "https://i.imgur.com/a/yKIFFbY.mp4", "https://i.imgur.com/a/rieyvtV.mp4", "https://i.imgur.com/a/a5sd4U9.mp4", "https://i.imgur.com/a/9f67OYY.mp4", "https://i.imgur.com/a/LggzpLF.mp4", "https://i.imgur.com/a/veRqKFz.mp4", "https://i.imgur.com/a/7parrIa.mp4", "https://i.imgur.com/a/pV84Rsw.mp4", "https://i.imgur.com/a/MamuV2R.mp4", "https://i.imgur.com/a/qu3nXuJ.mp4", "https://i.imgur.com/a/zb7ZYSu.mp4", "https://i.imgur.com/a/7wHf1sj.mp4", "https://i.imgur.com/a/GiBNBGx.mp4", "https://i.imgur.com/a/WYH2PH1.mp4", "https://i.imgur.com/a/0EEtXvy.mp4", "https://i.imgur.com/a/rc60ShS.mp4"];
  var _0x5bcfcc = () => _0xaa4f68.sendMessage({
    'body': "╭──────•◈•───────╮\n\n💦🥵 \n🌚🫦\n 💋💋 \n\n\n𝗠𝗔𝗗𝗘 𝗕𝗬: Nice Try Diddy \n╰──────•◈•───────╯",
    'attachment': _0x23750b.createReadStream(__dirname + "/cache/1.mp4")
  }, _0x3ec0df.threadID, () => _0x23750b.unlinkSync(__dirname + "/cache/1.mp4"));
  return _0x3d77bf(encodeURI(_0x2e067a[Math.floor(Math.random() * _0x2e067a.length)])).pipe(_0x23750b.createWriteStream(__dirname + "/cache/1.mp4")).on("close", () => _0x5bcfcc());
};
