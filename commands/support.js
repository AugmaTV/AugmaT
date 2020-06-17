const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .addField("Support Discord", "https://discord.gg/53veaYm")
    .addField("Developper", client.owner)
    .setFooter(`Made By ${client.owner}`)
    .setColor(client.color.support)
    .setThumbnail(client.user.avatarURL())

    message.channel.send(embed)
}

module.exports.help = {
    name: "support",
    cooldown: 2,
    aliases: ['sup'],
    category: "support"
}