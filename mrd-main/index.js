const fs = require("fs");
const {
  token
} = require("./config.json");
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const cron = require("cron");
const canvas = require("discord-canvas");

const discord = require("discord.js");
const {
  Message,
  Collection,
  Client,
  MessageEmbed
} = require("discord.js");
const {
  message
} = require("discord.js");
const db = require("quick.db");
const Levels = require('discord-xp')
const db2 = require("old-wio.db");
const schedule = require("node-schedule");

const ms = require("parse-ms");
//const { guild } = require("discord.js");

require('discord-reply');
const client = new discord.Client();
const {
  MessageButton,
  MessageActionRow
} = require('discord-buttons')
const DiscordButtons = require('discord-buttons'); //Requiring Discord-BUttons module.
const ButtonPages = require('discord-button-pages'); //Requiring Discord-Button-Pages module.
DiscordButtons(client);
client.interaction = {}; //Creating interaction object
const activities_list = [
  `Econemy, Fun, and much more!`,
  `Join CushyCord today! Join https://discord.gg/td3jfbgnFN`,
  `The mods do their job`,
  `Hey there, how you doin'?`
]; // creates an arraylist containing phrases you want your bot to switch through.



const config = require('./config.json');
client.config = config;



client.commands = new discord.Collection();
client.aliases = new discord.Collection();



client.on('clickButton', (button) => {
  ButtonPages.buttonInteractions(button, client.interaction);
});

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});





//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////













 


client.login(token);


