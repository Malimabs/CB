////////////IMPORTING WHAT LIBRARIES WE NEED///////////
const db = require("quick.db")
const discord = require('discord.js')
///////////////////////////////////////////////////////

module.exports = {
    name: "sell", // THE NAME OF THE COMMAND
    description: "View the store", // THE DESCRIPTION OF THE COMMAND
    category: "econemy", 
  
    async run(client, message, args, reaction) {
        const user = message.author // EASIER TO CALL MESSAGE.AUTHOR

        // -SELL CARP 1 [CARP - ARGS[0] || 1 = ARGS[1]]

        if(!args[0]) { //IF THERE IS NO ARGS[0] (NAME OF THE FISH TO SELL)
            const noArgs = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} What are you selling?`)
            .setDescription(`Tell me what fish you are selling`)
            .setColor("#FFFF00")
            return message.lineReply(noArgs) // STOP RUNNING AND SEND THE EMBED
        }

        if(!args[1]) {
            const noArgs = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} How much are you selling?`)
            .setDescription(`Tell me how much fish you are selling`)
            .setColor("#FFFF00")
            return message.lineReply(noArgs)
        }



        const noFish = new discord.MessageEmbed()
        .setTitle(`${message.author.tag} You need more fish`)
        .setDescription(`To sell that much, you need more fish`)

        if (args[0] == 'salmon'){ // IF THE USER TYPES SALMON THEN THIS CODE RUNS
            const tuna_db = db.fetch(`Salmon_${message.guild.id}_${message.author.id}`) // FETCH THE AMOUNT OF FISH THE USER HAS
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish) // IF THEY HAVE NO FISH OR IF THEY TRY TO SELL MORE THAN THEY HAVE
            db.subtract(`Salmon_${message.guild.id}_${message.author.id}`, 1 * args[1]); // REMOVE THE FISH X THE AMOUNT THEY WANT TO SELL 
            db.add(`money_${message.guild.id}_${user.id}`, 5 * args[1]); // GIVE THE USER MONEY X THE AMOUNT OF FISH THEY SELL
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Salmon for ${args[1] *  5} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'betta'){
            const tuna_db = db.fetch(`Betta_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Betta_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 10 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Betta for ${args[1] *  10} Coins`)
            .setDescription(`Congrats on catching a Betta`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'tuna'){
            const tuna_db = db.fetch(`Tuna_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Tuna_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 15 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Tuna for ${args[1] *  15} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'cod'){
            const tuna_db = db.fetch(`Cod_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Cod_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 20 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Cod for ${args[1] *  20} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'catfish'){
            const tuna_db = db.fetch(`Catfish_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Catfish_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 25 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Catfish for ${args[1] *  25} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'swordfish'){
            const tuna_db = db.fetch(`Swordfish_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Swordfish_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 30 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Swordfish for ${args[1] *  30} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'mackerel'){
            const tuna_db = db.fetch(`Mackerel_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Mackerel_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 35 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Mackerel for ${args[1] *  35} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'herring'){
            const tuna_db = db.fetch(`Herring_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Herring_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 40 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Herring for ${args[1] *  40} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'trout'){
            const tuna_db = db.fetch(`Trout_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Trout_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 45 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Trout for ${args[1] *  45} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'sardine'){
            const tuna_db = db.fetch(`Sardine_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Sardine_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 50 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Sardine for ${args[1] *  50} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'zebrafish'){
            const tuna_db = db.fetch(`Zebrafish_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Zebrafish_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 55 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Zebra Fish for ${args[1] *  55} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'goldfish'){
            const tuna_db = db.fetch(`Goldfish_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Goldfish_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 60 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Goldfish for ${args[1] *  60} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'haddock'){
            const tuna_db = db.fetch(`Goldfish_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Goldfish_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 65 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Haddock for ${args[1] *  65} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'anchovy'){
            const tuna_db = db.fetch(`Anchovy_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Anchovy_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 70 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Anchovy for ${args[1] *  70} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        if (args[0] == 'rainbowtrout'){
            const tuna_db = db.fetch(`Rainbowtrout_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Rainbowtrout_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 75 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Rainbow Trout for ${args[1] *  75} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
        //db.add(`Carp_${message.guild.id}_${message.author.id}`, 4);
        if (args[0] == 'carp'){
            const tuna_db = db.fetch(`Carp_${message.guild.id}_${message.author.id}`)
            if (tuna_db == null || tuna_db == 0 || args[1] > tuna_db) return message.channel.send(noFish)
            db.subtract(`Carp_${message.guild.id}_${message.author.id}`, 1 * args[1]);
            db.add(`money_${message.guild.id}_${user.id}`, 80 * args[1]);
            const bought = new discord.MessageEmbed()
            .setTitle(`${message.author.tag} just sold Carp for ${args[1] *  80} Coins`)
            .setColor("#FFFF00")
            message.channel.send(bought)
        }
    }}