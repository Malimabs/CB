
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
  name: 'dig',
  aliases: ['catchfish'],
  category: 'economy',
  description: 'Catch A Fish From A Vast Ocean',
  usage: '[list | rewards] (optional)',
  acessableby: 'everyone',

  run: async (bot, message, args) => {
      const hasShovel = db.fetch(`shovel_${message.guild.id}_${message.author.id}`);
      if(hasShovel == 0 || hasShovel == null){
        const noShovel = new MessageEmbed()
        .setTitle(`${message.author.tag} You need a shovel`)
        .setDescription(`Buy a shovel with the buy command`)
        .setColor("#FFFF00")
          return message.channel.send(noShovel)
      } else {
        let timeout = 1.8e+6;
        let fishtime = await db.fetch(`cooldown_fish_${message.guild.id}_${message.author.id}`);

        if (fishtime !== null && timeout - (Date.now() - fishtime) > 0) {
            let time = ms(timeout - (Date.now() - fishtime));
  
            let timeEmbed = new MessageEmbed()
              .setColor("#7FFFD4")
              .setTitle(`<:cross2:932308030761107486> Woah, calm down there ${message.author.tag}`)
              .setDescription(
                `There's nothing to dig right now, you need to take a break, try again in **${time.minutes}m ${time.seconds}s** \nThe **default cooldown is 30 minutes**`
              );
            return message.channel.send(timeEmbed)
      } else {
        let replies = [
          "shoe",
          "coin",
          "brokenshovel",
          "ironingot",
          "goldingot",
        ]
        let result = Math.floor(Math.random() * replies.length);

        if(replies[result] == 'shoe'){
          const shoe = new MessageEmbed()
          .setTitle(`Ew, why did you pick that up?`)
          .setDescription(`${message.author.tag} just dug up a dirty shoe`)
          .setColor("#FFFF00")
          db.add(`money_${message.guild.id}_${message.author.id}`, 5);
          message.lineReply(shoe)
        }
        if(replies[result] == 'coin'){
          const shoe = new MessageEmbed()
          .setTitle(`Nice, a gold coin`)
          .setDescription(`${message.author.tag} just dug up a gold coin`)
          .setColor("#FFFF00")
          db.add(`money_${message.guild.id}_${message.author.id}`, 20);
          message.lineReply(shoe)
        }
        if(replies[result] == 'brokenshovel'){
          const shoe = new MessageEmbed()
          .setTitle(`Dang, a broken shovel`)
          .setDescription(`${message.author.tag} just dug up a broken shovel`)
          .setColor("#FFFF00")
          db.add(`money_${message.guild.id}_${message.author.id}`, 10);
          message.lineReply(shoe)
        }
        if(replies[result] == 'ironingot'){
          const shoe = new MessageEmbed()
          .setTitle(`Hey, an Iron Ingot`)
          .setDescription(`${message.author.tag} just dug up an Iron Ingot`)
          .setColor("#FFFF00")
          db.add(`money_${message.guild.id}_${message.author.id}`, 30);
          message.lineReply(shoe)
        }
        if(replies[result] == 'goldingot'){
          const shoe = new MessageEmbed()
          .setTitle(`Hey, a Gold Ingot`)
          .setDescription(`${message.author.tag} just dug up a Gold Ingot`)
          .setColor("#FFFF00")
          db.add(`money_${message.guild.id}_${message.author.id}`, 50);
          message.lineReply(shoe)
        }
      }
  }}}