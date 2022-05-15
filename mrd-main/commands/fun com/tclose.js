const { channel } = require("diagnostics_channel")

module.exports = {
    name: "closeticket",
    aliases: [],
    permissions: [],
    description: "open a ticket!",
    async run(client, message, args, Discord) {
        const user = message.author.id
        const name = "ticket" + user

        if(message.channel.name === name){
            message.channel.delete()
        } else {
            message.channel.send('Please use this command in your ticket which is:' + `${name}`)
        }

    }}