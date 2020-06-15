const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("test")

    message.channel.send(embed)
}

module.exports.help = {
    name: "help",
    cooldown: 5
}