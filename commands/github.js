const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("**AugmaBot**")
    .addField("__GitHub__", "https://github.com/AkumaSama/AugmaT")
    .setFooter(`Made By ${client.owner}`)
    .setColor(client.color.about)
    .setThumbnail(client.user.avatarURL())

    message.channel.send(embed)
}

module.exports.help = {
    name: "github",
    cooldown: 3,
    aliases: ['gh'],
    category: "about"
}