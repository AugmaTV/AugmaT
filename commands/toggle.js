const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    if(args.length <= 0) {
        message.reply(" i need an command.")
    } else {
        let command = args[0]
        let test = client.commands.filter(cmd => cmd.help.name === command).size
        if(test <= 0) {
            message.reply(" i don't have this command :/")
        } else if(test == 1) {
            if(client.disabled.has(command)) {
                message.reply(` the command ${command} has been enabled.`)
                client.disabled.delete(command)
            } else {
                message.reply(` the command ${command} has been disabled.`)
                client.disabled.add(command)
            }
        }
    }
}

module.exports.help = {
    name: "toggle",
    cooldown: 3,
    aliases: ['tog'],
    category: "command"
}