const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";
//==================================================================================================================================================
DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";
module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || false,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID:process.env.SESSION_ID || "NIKKA-XKAVnSTya#MgAjl6eUJ5_ReoTf1_ICzCkgc3Sfm4gEyFRW6oPsDto",
  LANG: process.env.LANG || "EN",
  HANDLERS: process.env.PREFIX || '^[?]',
  PRESCENCE: process.env.PRESCENCE || "available",
  GREETINGS: process.env.GREETINGS || false,
  BRANCH: "main",
  WARN_COUNT: 3,
  STICKER_DATA: process.env.STICKER_DATA || "𝕵𝖊 𝖛𝖔𝖎𝖘 𝖘𝖙𝖎𝖈𝖐𝖊𝖗 𝖕𝖆𝖈𝖐;𝕯𝖆𝖛𝖎𝖉",
  BOT_INFO: process.env.BOT_INFO || "ɴɪᴋᴋᴀ ᴍᴅ;ʜᴀᴋɪ;https://cdn.ironman.my.id/i/hvlui0.jpg",
  AUDIO_DATA: process.env.AUDIO_DATA || "ʜᴀᴋɪ;shaka;https://cdn.ironman.my.id/i/hvlui0.jpg",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PORT: process.env.PORT || 3000,

  CAPTION: process.env.CAPTION || "shaka",
  WORK_TYPE: process.env.WORK_TYPE || "private",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  SUDO: process.env.SUDO || "2349112171078,2348109243618,2349012640680", // replace ur number
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f", "deb80cd12ababea1c9b9a8ad6ce3fab2", "78c84c62b32a88e86daf87dd509a657a"],
};
