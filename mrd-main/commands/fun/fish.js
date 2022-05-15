const fishes = require('../../fishes.json');
let db = require('quick.db');
const ms = require("parse-ms");
const {
  MessageEmbed
} = require('discord.js');
const {
  randomRange
} = require('../../functions.js')

const {
  MessageMenuOption,
  MessageMenu
} = require('discord-buttons')

module.exports = {
  name: 'fish',
  aliases: ['catchfish'],
  category: 'economy',
  description: 'Catch A Fish From A Vast Ocean',
  usage: '[list | rewards] (optional)',
  acessableby: 'everyone',

  run: async (bot, message, args) => {
    const hasPole = db.fetch(`pole_${message.guild.id}_${message.author.id}`);
    if(hasPole !== null){
      return message.lineReply(`${message.author.tag} you need a fishing pole to use this command, buy one`)
    } else {
      const timeout = 1 //2.7e+6
      const cooldown = await db.fetch(`cooldown_fish_${message.guild.id}_${message.author.id}`);

      if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
        const time = ms(timeout - (Date.now() - cooldown));
        let timeEmbed = new MessageEmbed()
          .setColor("#7FFFD4")
          .setTitle(`<:cross2:932308030761107486> Woah, calm down there ${message.author.tag}`)
          .setDescription(
            `After a hard time fishing, you need to take a break, try again in **${time.minutes}m ${time.seconds}s** \nThe **default cooldown is 45 minutes**`
          );
        message.lineReply(timeEmbed);
      } else {
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
        let result = Math.floor(Math.random() * replies.length);
        if(replies[result] == 'Salmon'){
          message.lineReply('🐟 Oh nice, you caught a Salmon')
          db.add(`money_${message.guild.id}_${message.author.id}`, 5);
          db.add(`Salmon_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Betta'){
          message.lineReply('🐟 Oh nice, you caught a Betta')
          db.add(`money_${message.guild.id}_${message.author.id}`, 10);
          db.add(`Betta_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Tuna'){
          message.lineReply('🐟 Oh nice, you caught a Tuna')
          db.add(`money_${message.guild.id}_${message.author.id}`, 15);
          db.add(`Tuna_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Cod'){
          message.lineReply('🐟 Oh nice, you caught a Cod')
          db.add(`money_${message.guild.id}_${message.author.id}`, 20);
          db.add(`Cod_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Catfish'){
          message.lineReply('🐟 Oh nice, you caught a Catfish')
          db.add(`money_${message.guild.id}_${message.author.id}`, 25);
          db.add(`Catfish_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Swordfish'){
          message.lineReply('🐟 Oh nice, you caught a Swordfish')
          db.add(`money_${message.guild.id}_${message.author.id}`, 30);
          db.add(`Swordfish_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Mackerel'){
          message.lineReply('🐟 Oh nice, you caught a Mackerel')
          db.add(`money_${message.guild.id}_${message.author.id}`, 35);
          db.add(`Mackerel_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Herring'){
          message.lineReply('🐟 Oh nice, you caught a Herring')
          db.add(`money_${message.guild.id}_${message.author.id}`, 40);
          db.add(`Herring_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Trout'){
          message.lineReply('🐟 Oh nice, you caught a Trout')
          db.add(`money_${message.guild.id}_${message.author.id}`, 45);
          db.add(`Trout_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Sardine'){
          message.lineReply('🐟 Oh nice, you caught a Sardine')
          db.add(`money_${message.guild.id}_${message.author.id}`, 50);
          db.add(`Sardine_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Zebra fish'){
          message.lineReply('🐟 Oh nice, you caught a Zebra fish')
          db.add(`money_${message.guild.id}_${message.author.id}`, 55);
          db.add(`Zebrafish_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Goldfish'){
          message.lineReply('🐟 Oh nice, you caught a Goldfish')
          db.add(`money_${message.guild.id}_${message.author.id}`, 60);
          db.add(`Goldfish_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Haddock'){
          message.lineReply('🐟 Oh nice, you caught a Haddock')
          db.add(`money_${message.guild.id}_${message.author.id}`, 65);
          db.add(`Haddock_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Anchovy'){
          message.lineReply('🐟 Oh nice, you caught an Anchovy')
          db.add(`money_${message.guild.id}_${message.author.id}`, 70);
          db.add(`Anchovy_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Rainbow trout'){
          message.lineReply('you caught a Rainbow trout')
          db.add(`money_${message.guild.id}_${message.author.id}`, 75);
          db.add(`Rainbowtrout_${message.guild.id}_${message.author.id}`, 1);
        }
        if(replies[result] == 'Carp'){
          message.lineReply('🐟 Oh nice, you caught a Carp')
          db.add(`money_${message.guild.id}_${message.author.id}`, 80);
          db.add(`Carp_${message.guild.id}_${message.author.id}`, 1);
        }
        db.set(`cooldown_fish_${message.guild.id}_${message.author.id}`, Date.now()); //db.add(`money_${message.guild.id}_${message.author.id}`, 0);
      }
    }
  }}
    