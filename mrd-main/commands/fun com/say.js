module.exports = {
    name: 'say',
    description: 'Ask a question and it responds with what it thinks',
    category: "fun",
    async run (client, message, args) {
        const Discord = require('discord.js');
        let question = args.slice(0).join(" ");

        if(!question) return message.reply('<:no:866805267010289735> | You need to specify a question!');
         message.channel.send(`${question}`)


    }
};