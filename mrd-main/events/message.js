const db = require("quick.db");
//const { addexp } = require("../handlers/xp.js");
const { ownerID, default_prefix } = require("../config.json");
const parseMilliseconds = require("parse-ms");
const fetch = require('node-fetch')
const discord = require("discord.js");
let cooldown = {};

module.exports.run = async (client, message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  let prefix = db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) db.set(`prefix_${message.guild.id}`, '-');

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.members.fetch(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let cmdx = db.get(`cmd_${message.guild.id}`);

  if (cmdx) {
    let cmdy = cmdx.find(x => x.name === cmd);
    if (cmdy) message.lineReply(cmdy.responce);
  }

  


  let command = client.commands.get(cmd);

  


  //-------------------------------------------- P E R M I S S I O N -------------------------------------------

  

  // ---------------------------------------------O W N E R ----------------------------------------------------------



  //------------------------------------------------------COOLDOWN SYSTEM---------------------------------------------


  //NOW LETS TEST

  //-----------------------------------------------------------------------------------------------------------------

  if (command) command.run(client, message, args, cmd);
};

//-------------------------------------------- F U N C T I O N ------------------------------------------
function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}