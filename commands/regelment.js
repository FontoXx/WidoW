const Discord = require('discord.js')

module.exports = {
    run: async (message, args, client) => {
        const arrow2 = client.emojis.cache.find(emoji => emoji.name === "arrow2");
        const ayy = client.emojis.cache.find(emoji => emoji.name === "ayy");  
        const charge = client.emojis.cache.find(emoji => emoji.name === "charge");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Reglement')
        .setDescription(`${arrow2} ${charge} ${charge} rayan est con`))
},
name : 'reg' 
}