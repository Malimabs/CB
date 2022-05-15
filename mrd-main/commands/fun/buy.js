const db = require("quick.db")
const discord = require('discord.js')

module.exports = {
    name: "buy",
    description: "View the store",
    category: "econemy",
  
    async run(client, message, args, reaction) {
        const user = message.author
        if (args[0] == 'fishingpole'){
            const hasPole = db.fetch(`pole_${message.guild.id}_${message.author.id}`);
            db.add(`pole_${message.guild.id}_${message.author.id}`, 1);
            db.subtract(`money_${message.guild.id}_${user.id}`, 1200);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just bought a fishing pole`)
            .setDescription(`Going fishing? This fishing pole is yours ${message.author.tag}`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'shovel'){
            const hasPole = db.fetch(`shovel_${message.guild.id}_${message.author.id}`);
            db.add(`shovel_${message.guild.id}_${message.author.id}`, 1);
            db.subtract(`money_${message.guild.id}_${user.id}`, 1600);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just bought a shovel`)
            .setDescription(`Going digging? This shovel is yours ${message.author.tag}`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'fishchips'){
            const hasPole = db.fetch(`fishchips_${message.guild.id}_${message.author.id}`);
            db.add(`fishchips_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.subtract(`money_${message.guild.id}_${user.id}`, 5 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just ordered Fish and Chips`)
            .setDescription(`Fish and chips, innit bruv. Here ${message.author.tag}`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'sandwich'){
            db.add(`sandwich_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.subtract(`money_${message.guild.id}_${user.id}`, 2 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just ordered a Sandwich`)
            .setDescription(`Simple sandwich for ${message.author.tag}`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'pita'){
            db.add(`pita_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.subtract(`money_${message.guild.id}_${user.id}`, 4 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just ordered a Pita`)
            .setDescription(`Very good, very nice ${message.author.tag} Here's your Pita`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'hamburger'){
            db.add(`hamburger_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.subtract(`money_${message.guild.id}_${user.id}`, 6 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just ordered a Hamburger`)
            .setDescription(`Who doesn't like a hamburger? ${message.author.tag}`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'friedchicken'){
            db.add(`chicken_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.subtract(`money_${message.guild.id}_${user.id}`, 8 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just ordered some Chicken`)
            .setDescription(`Scrumpious fried chicken ${message.author.tag}`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'frenchfries'){
            db.add(`fries_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.subtract(`money_${message.guild.id}_${user.id}`, 9 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just ordered some Fries`)
            .setDescription(`Some fresh french fries ${message.author.tag}`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'onionrings'){
            db.add(`orings_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.subtract(`money_${message.guild.id}_${user.id}`, 10 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just ordered some Onion Rings`)
            .setDescription(`Nothing wrong with these ${message.author.tag}`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'nuggets'){
            db.add(`nuggets_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.subtract(`money_${message.guild.id}_${user.id}`, 10 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just ordered some Nuggets`)
            .setDescription(`Woo hoo! ${message.author.tag}`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'taco'){
            db.add(`taco_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.subtract(`money_${message.guild.id}_${user.id}`, 10 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just ordered a Taco`)
            .setDescription(`Simple taco ${message.author.tag}`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
    }}