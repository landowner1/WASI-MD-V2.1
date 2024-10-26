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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU9UamFQTEdsTFh3a093b0NpSGN4RHNXSEpDVUlDTDhZcEJiUUJ2ZFNHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWZJNGRoazE3cXRsRXdESFpTVTB5aFhkblljT1NtMEpHbGJIUVR4T0tWaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSmpjMEs2bkZhbjd5TmlsL2pua2QybXZzMXFFazEyTXZyVVA4OEdxaEhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZWURjNnQ0bWpiT285SllGUENINjMraHY5QkgxZWdob09qSURSa01rRmg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlLY0Y5Z1hHOS9tSndWVlBNS05sdFpSZmxsS3EvcjBrU0FjdnBzTlR5WE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVhdWs4eGNIWllac0dnM1BUS0RGUUVZdFNhdjFVaVluOEVnUng3NFcwVDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUNPTngvb0lkTzJMYWVCaUduVnRqWW82a2U1TFRKUmEzdzIwd3hDeWhrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzBCM0VWeUxQVjhHL1hWY2svdGcwY2Rrb05iU0k5a01QSDZDWXVUclVCWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN5TEZPc3grU3p6YlBoZ0hoZmU4d1VHYnZwaVRiQ1FUdWs0dHNTelRjTEhmVEFqeUd3SWlKQU84L0tWT0ZFVSthcVpaVVAybW4zdDZteFJyZ045QWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6Ing2eWRXMG1qM1ZjQ0J5UEZTYzhqU2g0WHhGaTJUYThpU1U0Y2hwcDZTM0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDE3OTA1ODc2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZERTgxQkZENjk5QUFFMjdCNzNERjk5N0M0OTFGNzlCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjk5NTQ3NjJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQxNzkwNTg3NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzN0Y4NEU3RTU1QzQwQzIzMUVDNzNFOTc4ODYzNDA5NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI5OTU0NzYyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0MTc5MDU4NzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUFGQTQyODA0OERBMEVENzVEMTNDODZERjI5RTI5RkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTk1NDc2M30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDE3OTA1ODc2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRGMURDNTNDRDM2MjE4RTBDRkUzMUI5RkIzRkEwMTdEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjk5NTQ3NjR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ildjb05jX20wVGJDU2w5NW1fT0R4OHciLCJwaG9uZUlkIjoiYWM0YTRlZmMtZTMwOC00MDkzLTgxZGEtMWZkNmE2MjVkYzI3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp5YUN1MTNoazQvQ0hDdGlVMjB1VmovV0puUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQ1lta1N6aG50aXFaNzZhcnAvQ0x4UXlrbFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNEc2M01NOE4iLCJtZSI6eyJpZCI6IjkyMzQxNzkwNTg3NjoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkM/In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLM1RvcEFHRUx1SDlMZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHdHpRYzhUdHlOYUdUaGRLeFoyMXYzaXdUeTNmKzhzUG1MeHlPNy9RUXlJPSIsImFjY291bnRTaWduYXR1cmUiOiJCQWV6YTRUaWNCQ2VVMjRwQ3NOUFVZY1NBa0p1dU9mRHNvbzVIZ2RoYmpNbjdYbFRwbVJuWUlmWTZGMEJkUCtSL3owcTNYS2NVRUF0elBCTWQ5TXVCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicGwxMFdLbFB3NmZqb0tHVHpHcE05KzE1YTFMRjVET1NiNTlRS2VUMDBudXNaTjliYVVjSXA2RDhBSHlIZVhiK29LNExHaE9ONlQ0V1B3eEhjWVA2Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0MTc5MDU4NzY6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJScmMwSFBFN2NqV2hrNFhTc1dkdGI5NHNFOHQzL3ZMRDVpOGNqdS8wRU1pIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5OTU0NzYwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgyWCJ9"
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
