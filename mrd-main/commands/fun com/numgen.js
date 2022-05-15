module.exports = {
    name: 'number',
    description: 'Ask a question and it responds with what it thinks',
    category: "fun",
    async run (client, message, args) {
        const number = Math.floor(Math.random() * 1000);
        message.channel.send(`${number}`)
    }}