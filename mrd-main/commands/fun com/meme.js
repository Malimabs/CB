const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const fetch = require("node-fetch");
const got = require("got");
const cron = require("cron");
const db = require("quick.db");

module.exports = {
  name: "meme",
  aliases: ["mem", "funny"],
  description: "See Funny Memes",
  category: "fun",

  async run(client, message, args) {
    const embed = new Discord.MessageEmbed();
    got("https://www.reddit.com/r/memes/random/.json").then(response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let memeImage = content[0].data.children[0].data.url;
      let memeTitle = content[0].data.children[0].data.title;
      let memeUpvotes = content[0].data.children[0].data.ups;
      let memeDownvotes = content[0].data.children[0].data.downs;
      let memeNumComments = content[0].data.children[0].data.num_comments;
      embed.setTitle(`${memeTitle}`);
      embed.setURL(`${memeUrl}`);
      embed.setImage(memeImage);
      embed.setColor("#FFFF00")
      embed.setFooter(
        `👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`
      );
      message.lineReply(embed);

      const t1 = db.fetch(`t1supporter_${message.author.id}`);
    });
  }
};
