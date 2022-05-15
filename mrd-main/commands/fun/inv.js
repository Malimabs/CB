const db = require("quick.db");
const Discord = require("discord.js");

module.exports = {
  name: "inv",
  description: "Check on your balance in your wallet, or another user's wallet",
  category: "econemy",
  usage: "balance",

  async run(client, message, args) {
      ////////////////////////////////
      const hasShovel = db.fetch(`shovel_${message.guild.id}_${message.author.id}`);
      const hasPole = db.fetch(`pole_${message.guild.id}_${message.author.id}`);

      const Salmon = db.fetch(`Salmon_${message.guild.id}_${message.author.id}`);
      const Betta = db.fetch(`Betta_${message.guild.id}_${message.author.id}`);
      const Tuna = db.fetch(`Tuna_${message.guild.id}_${message.author.id}`);
      const Cod = db.fetch(`Cod_${message.guild.id}_${message.author.id}`);
      const Catfish = db.fetch(`Catfish_${message.guild.id}_${message.author.id}`);
      const Swordfish = db.fetch(`Swordfish_${message.guild.id}_${message.author.id}`);
      const Mackerel = db.fetch(`Mackerel_${message.guild.id}_${message.author.id}`);
      const Herring = db.fetch(`Herring_${message.guild.id}_${message.author.id}`);
      const Trout = db.fetch(`Trout_${message.guild.id}_${message.author.id}`);
      const Sardine = db.fetch(`Sardine_${message.guild.id}_${message.author.id}`);
      const Zebrafish = db.fetch(`Zebrafish_${message.guild.id}_${message.author.id}`);
      const Goldfish = db.fetch(`Goldfish_${message.guild.id}_${message.author.id}`);
      const Haddock = db.fetch(`Haddock_${message.guild.id}_${message.author.id}`);
      const Anchovy = db.fetch(`Anchovy_${message.guild.id}_${message.author.id}`);
      const Rainbowtrout = db.fetch(`Rainbowtrout_${message.guild.id}_${message.author.id}`);
      const Carp = db.fetch(`Carp_${message.guild.id}_${message.author.id}`);

      ////////////////////////////////
      let replies = [
        "Salmon",
        "Betta",
        "Tuna",
        "Cod",
        "Catfish",
        "Swordfish",
        "Mackerel",
        "Herring",
        "Trout",
        "Sardine",
        "Zebra fish",
        "Goldfish",
        "Haddock",
        "Anchovy",
        "Rainbow trout",
        "Carp"
      ]; //replies
      ///////////////////////////////
      const invEmbed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag}'s Inventory`)
      .setDescription(`These are ${message.author.tag}'s items and fish`)
      .addFields(
        { name: "Salmon", value: `${Salmon}`, inline: true },
        { name: "Betta", value: `${Betta}`, inline: true },
        { name: "Tuna", value: `${Tuna}`, inline: true },
        { name: "Cod", value: `${Cod}`, inline: true },
        { name: "Catfish", value: `${Catfish}`, inline: true },
        { name: "Swordfish", value: `${Swordfish}`, inline: true },
        { name: "Mackerel", value: `${Mackerel}`, inline: true },
        { name: "Herring", value: `${Herring}`, inline: true },
        { name: "Trout", value: `${Trout}`, inline: true },
        { name: "Zebra fish", value: `${Zebrafish}`, inline: true },
        { name: "Goldfish", value: `${Goldfish}`, inline: true },
        { name: "Haddock", value: `${Haddock}`, inline: true },
        { name: "Anchovy", value: `${Anchovy}`, inline: true },
        { name: "Rainbow trout", value: `${Rainbowtrout}`, inline: true },
        { name: "Carp", value: `${Carp}`, inline: true },
      )
      .setColor("#FFFF00")
      message.channel.send(invEmbed)
      //////////////////////////////

  }}
