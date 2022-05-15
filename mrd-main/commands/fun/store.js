const Discord = require("discord.js");
//const disbutpages = require("discord-buttons-pages")
const disbut = require("discord-buttons");
const ButtonPages = require("discord-button-pages");
const client = new Discord.Client();
const db = require("quick.db")
const {
  MessageMenuOption,
  MessageMenu
} = require('discord-buttons')

module.exports = {
  name: "shop",
  description: "View the store",
  category: "econemy",

  async run(client, message, args, reaction) {
    const p = db.fetch(`prefix_${message.guild.id}`)
    const PlaceEmbed = new Discord.MessageEmbed()
      .setTitle("Welcome to the shop!")
      .setColor("#FFFF00")

    let econemy = new MessageMenuOption()
      .setLabel("Command Unlocks")
      .setValue("econ_id")
      .setDescription("Browse through Econemy items")
      .setEmoji(`922083835225727006`)


      let food = new MessageMenuOption()
      .setLabel("Food & Drinks")
      .setValue("food_id")
      .setDescription("Browse through available Food & Drinks")
      .setEmoji(`922267310033612811`)

      

    let select = new MessageMenu()
      .setID("customid")
      .setPlaceholder("Shop in different categories")
      .addOption(econemy)      
      .addOption(food)


    const SendMenu = await message.channel.send(PlaceEmbed, select)
    const filter = (button) => button.clicker.user.id === message.author.id;
    let collector = SendMenu.createMenuCollector(filter, {
      time: 300000
    });
    collector.on("collect", (button) => {
      if (button.values[0] == "econ_id") {
        const embed = new Discord.MessageEmbed()
          .setTitle('Econemy Shop Items')
          .setDescription('Use' + ' ' + p + '`buy [ID] [amount] (@user)`')
          .setColor("#7FFFD4")
          .addFields({ name: '<:em_FishingPole:922083835225727006> Fishing Pole - 3500', value: 'ID: `fishingpole`', inline: true })
          .addFields({ name: '<:em_FishingPole:922083835225727006> Shovel - 4500', value: 'ID: `shovel`', inline: true })
        message.lineReply(embed)
      }
      if(button.values[0] == "food_id"){
        const embed = new Discord.MessageEmbed()
          .setTitle('Econemy Shop Items')
          .setDescription('Use' + ' ' + p + '`buy [ID] [amount] (@user)`')
          .setColor("#7FFFD4")
          .addFields({ name: '<:em_Water:922266669223661578> Fish & Chips - 5', value: 'ID: `fishchips`', inline: true })
          .addFields({ name: '<:em_Coffee:922267310033612811> Sandwich - 2', value: 'ID: `coffee`', inline: true })
          .addFields({ name: '<:em_OJ:922294527925035028> Pita - 4', value: 'ID: `oj`', inline: true })
          .addFields({ name: '<:em_Breakfast:922295398301855854> Hamburger - 6', value: 'ID: `breakfast`', inline: true })
          .addFields({ name: '<:em_Breakfast:922295398301855854> Fried Chicken - 8', value: 'ID: `breakfast`', inline: true })
          .addFields({ name: '<:em_Breakfast:922295398301855854> French Fries - 9', value: 'ID: `breakfast`', inline: true })
          .addFields({ name: '<:em_Breakfast:922295398301855854> Onion Rings - 10', value: 'ID: `breakfast`', inline: true })
          .addFields({ name: '<:em_Breakfast:922295398301855854> Chicken Nuggets - 12', value: 'ID: `breakfast`', inline: true })
          .addFields({ name: '<:em_Breakfast:922295398301855854> Taco - 14', value: 'ID: `breakfast`', inline: true })
          .addFields({ name: '<:em_Breakfast:922295398301855854> Pizza - 16', value: 'ID: `breakfast`', inline: true })
          .addFields({ name: '<:em_Breakfast:922295398301855854> Hot Dog - 18', value: 'ID: `breakfast`', inline: true })
          .addFields({ name: '<:em_Breakfast:922295398301855854> Icecream - 20', value: 'ID: `breakfast`', inline: true })
        message.lineReply(embed)
      }

    })
  }
};