const db = require("quick.db")

module.exports.run = (client) => {
  console.log(`MrD here on! ${client.guilds.cache.size} servers! `)
  client.user.setActivity('-help'); 
}
