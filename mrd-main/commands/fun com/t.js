const { channel } = require("diagnostics_channel")

module.exports = {
    name: "ticket",
    aliases: [],
    permissions: [],
    description: "open a ticket!",
    async run(client, message, args, Discord) {
        const user = message.author.id
        const name = "ticket" + user

        if(message.guild.channels.cache.find(ch => ch.name == name)){
            return message.channel.send(`you already have a ticket open`)
        } else {
            message.guild.channels.create(name).then((chan) => {
                chan.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false
                })
                chan.updateOverwrite(user, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true
                })
                message.channel.send('i have opened a ticket')
                chan.send('**This is your ticket.. Only you and any people higher up have access to here**').then((m) => {
                    m.pin()
                })
            })
        }
    }}
      