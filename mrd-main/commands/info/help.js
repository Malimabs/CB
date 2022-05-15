const {
  MessageEmbed
} = require("discord.js");
const db = require("quick.db")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const ButtonPages = require("discord-button-pages");
const {
  MessageMenuOption,
  MessageMenu
} = require('discord-buttons')

module.exports = {
  name: "help",
  description: "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  run: async (client, message, args) => {
    const prefix = db.fetch(`prefix_${message.guild.id}`)
    if (!prefix) prefix == '-'
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.lineReply("Unknown Command: " + args[0]);
      }

      return message.lineReply(embed);
    } else {

      const PlaceEmbed = new Discord.MessageEmbed()
        .setTitle("Please choose a category from my list below")
        .setColor("#FFFF00")

      let Page1 = new Discord.MessageEmbed()
        .setTitle('Fun Commands')
        .setDescription('These commands are used to play games etc.')
        .addFields({
            name: "```meme```",
            value: `Look at some memes; Usage: ${prefix}meme`,
            inline: true,
          }, {
            name: "```userinfo```",
            value: `Find out info about a user; Usage: ${prefix}userinfo (@user)`,
            inline: true,
          }, {
            name: "```say```",
            value: `Make me say something; Usage: ${prefix}say (text)`,
            inline: true,
          }, {
            name: "```number```",
            value: `Random number between 1 and 1000; Usage: ${prefix}cat`,
            inline: true,
          })
        .setFooter('Page 1/3')
        .setColor("#FFFF00")     

        const econEmbed = new Discord.MessageEmbed()
        .setTitle('Econemy Commands')
        .setDescription('These commands are used to earn money')
        .addFields({
          name: "```job```",
          value: `Check your or anyther user's balance; | Usage: **-bal (@user)**`,
          inline: true,
        }, {
          name: "```work```",
          value: `Check your or anyther user's bank; Usage: | **-bank (@user)**`,
          inline: true,
        }, {
          name: "```dig```",
          value: `Dig for treasure; Usage: | **-dig**`,
          inline: true,
        }, {
          name: "```fish```",
          value: `Fish and sell fish; Usage: | **-fish**`,
          inline: true,
        },)
        .setFooter('Page 2/3')
        .setColor("#FFFF00")

        const tickEmbed = new Discord.MessageEmbed()
        .setTitle('Ticket Commands')
        .setDescription('These commands are used to open and close tickets')
        .addFields({
          name: "```ticket```",
          value: `Opens a ticket; | Usage: **-ticket**`,
          inline: true,
        }, {
          name: "```closeticket```",
          value: `Close you open ticket; Usage: | **-closeticket**`,
          inline: true,
        },)
        .setFooter('Page 2/3')
        .setColor("#FFFF00")




        

      //------------------------------options--------------------------------//

      let option = new MessageMenuOption()
        .setLabel("Fun Commands")
        .setValue("menuid")
        .setDescription("Browse all my Fun commands")
        .setEmoji("😄")

        let option2 = new MessageMenuOption()
        .setLabel("Econemy Commands")
        .setValue("menuid2")
        .setDescription("Browse all my Econemy commands")
        .setEmoji("🤑")

        let option3 = new MessageMenuOption()
        .setLabel("Ticket Commands")
        .setValue("menuid3")
        .setDescription("Browse all my Ticket commands")
        .setEmoji("🤑")

        

      let select = new MessageMenu()
        .setID("customid")
        .setPlaceholder("click me!")
        //.setMaxValues(1)
        //.setMinValues(1)
        .addOption(option)
        .addOption(option2)
        .addOption(option3)
        

      const SendMenu = await message.channel.send(PlaceEmbed, select)
      const filter = (button) => button.clicker.user.id === message.author.id;
      let collector = SendMenu.createMenuCollector(filter, {
        time: 300000
      });
      collector.on("collect", (button) => {
        if (button.values[0] == "menuid") {
          SendMenu.edit(Page1, select)
        }
        if (button.values[0] == "menuid2") {
          SendMenu.edit(econEmbed, select)
        }
        if (button.values[0] == "menuid3") {
          SendMenu.edit(tickEmbed, select)
        }
        

        button.reply.defer()

      })
      //------------------------------options--------------------------------//

      const commands = await client.commands;

        
      
          
      
      
      

      

      

    }

  }
}
