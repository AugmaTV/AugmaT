const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("**AugmaBot**")
    .addFields({name: `__about__`, value: `${client.commands.filter(cmd => cmd.help.category === "about").map(cmd => `\`${cmd.help.name}\``).join(" ")}`})
    .setFooter(`Made By ${client.owner}`)
    .setThumbnail(client.user.avatarURL())

    message.channel.send(embed)
}

module.exports.help = {
    name: "help2",
    cooldown: 6,
    aliases: ['h2'],
    category: "about"
}