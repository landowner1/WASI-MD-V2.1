//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "447551610702@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "hhttps://chat.whatsapp.com/CnzDJX5pyuULiIMu4B3dwp";
global.website = process.env.GURL || "https://chat.whatsapp.com/CnzDJX5pyuULiIMu4B3dwp";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/5a2dba398830b21d1d358.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923467425834";
global.owner = process.env.OWNER_NUMBER || "447551610702";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/5a2dba398830b21d1d358.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ZXdHNXNVJLTzgrREhzOVZIM2pFd2tiQmtoenRlTlptVkFLK3dya0RYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMy9WZjRUbWJaNlplZS9BV0h4amxuY3RYaEdLV3pTeWI4c0MrM2hBTHNnWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSHZLWXhQNWt4NmhHTkZqWmJrQ1MwOFBiQ2FsM0ovaithV2wwQ2NIR0VVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwb3YyQXZTK09mYkZVaTJvb2htNEx1SWIyRTc4N2ZWcnQ3MXVJWUpSakFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQL09odlRLb0poUXQwSGJFVGdCbEM5UzhYN3o4K1dLVDNHc21MUU1oSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNxV1BYcFpzZ3BORW41YzRNQTVES1FqNzdjYTJIWmZGNUxNN3FnMUpLQTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0NySGx0NEJhclBWeVQwYlpRTWZHRW1pdm1obHp0MEZJQ1N2c09tMGluaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXlTTzRSTVVYd0ZqR1NOTjI3b2hJUHBPeXRxQnJFZDFZVlpJc3JvUXRUND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNIV2xyWis2Q1JJMWhZbDRLRXBveit6UXQ4RDFIZUdkQzV0OUdiVCtrc2NwU01LQjczNVdGa3ZEMWRqQVZORks3b0FPN3EwMWRJL1JldnF3anpTVUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ3LCJhZHZTZWNyZXRLZXkiOiJjRW9XZ0JSWWphQ1ozMVYwemNMRlFxd1lERXRaRzd4UTR1ZlhlMXpwc2NRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQwNTgzMTY0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3MkZCNjZBREJEODA1NjZGM0Y1OTc0NTMzQjk5NjA5QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3MDcyNzUwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0MDU4MzE2NDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDhDMkI4MDAzQzFCNjJEOUE4Njc2QkM0QkNFNUE4MjkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzA3Mjc1MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoib1RUbklNck9TcGVJdUhZWVBJdng1ZyIsInBob25lSWQiOiJlMjUwNTQ3MS1iODQwLTQ3MjAtOGY0ZS1mODQ5ODUyYjFiOWIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTFDcEhTb3dUYXo4d1J6QmNaV2pES3RROGhzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Illhd0l2MVh5OWpudXJDRVNDelgydTBXbVJPST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJYSkFFNEQxUiIsIm1lIjp7ImlkIjoiOTIzNDA1ODMxNjQ0OjMyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im9rIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLelRvcEFHRU9DVHhMY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5anVOanlKNFpMQUZ2c2c4YWRSY3lDU3F0dEk5WC9uL1VOTysydmN6VDI4PSIsImFjY291bnRTaWduYXR1cmUiOiJTZTJFY1NDb1Rqd29jbHMvTDlZMmxHTlBYQTFudjRTcTNXVHcxTjdnVUd6Mm5ERUIyRG1SdXJ4cU1ENWg5QTR5eXo1T1crdmYrTitDb29ISWw5aXVCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZk54N3hHZytwTnAwRm81TUdHOFk3NG9HN25NeXcraEF1MFFVWGIyeE1PNGxKZC9KSDIveXAyckkzVzd4Sm5BL1RmOVIxREhpalZ1d0dFY2Y0eS9nQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0MDU4MzE2NDQ6MzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZlk3alk4aWVHU3dCYjdJUEduVVhNZ2txcmJTUFYvNS8xRFR2dHIzTTA5diJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzA3Mjc0OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFELzMifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "COMMANDER",
  author: process.env.PACK_AUTHER || "SWAG",
  packname: process.env.PACK_NAME || "COMMANDER",
  botname: process.env.BOT_NAME || "SHAWARMA.TOP",
  ownername: process.env.OWNER_NAME || "COMMANDER",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
