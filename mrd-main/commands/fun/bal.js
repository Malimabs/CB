const db = require("quick.db");
const Discord = require("discord.js");

module.exports = {
  name: "balance",
  description: "Check on your balance in your wallet, or another user's wallet",
  category: "econemy",
  usage: "balance",
  aliases: ["bal", "wallet", "money"],

  async run(client, message, args) {
    let user = message.mentions.users.first() || message.author;

    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
    if (bal === null) bal = 0;
    if (bal < 0) db.set(`money_${message.guild.id}_${user.id}`, 0);




    if(bal > 100){
      let embed6 = new Discord.MessageEmbed()
      .setTitle(`${user.tag}'s balance | dough`)
      .setColor("#7FFFD4")
      .setDescription(`This person has **$${bal}**`);

    message.lineReply(embed6);
    }
    
    if(bal < 100){
      let embed6 = new Discord.MessageEmbed()
      .setTitle(`${user.tag}'s balance | dough`)
      .setColor("#7FFFD4")
      .setDescription(`This person has **$${bal}**`);

    message.lineReply(embed6);
    }

    //const emojiList = message.guild.emojis.cache
     // .map((e, x) => x + " = " + e + " | " + e.name)
     // .join("\n");
    //message.lineReply(emojiList);
  }
};
