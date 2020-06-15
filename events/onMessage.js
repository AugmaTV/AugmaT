const Discord = require("discord.js")
let cooldown = new Set()
const prefix = require("../config.json").prefix

module.exports = (client, message) => {
    if(message.content.startsWith(prefix)) {
        if(cooldown.has(message.author.id)) {
            message.delete;
            message.reply(`${cdseconds}`);
            return
        }
    }

    if(message.author.bot || message.channel.type === 'dm') { return}
    if(!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) {return}

    if(!message.content.startsWith(prefix)) {return}

    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let commande = args.shift().toLowerCase()
    let cmd = client.commands.get(commande)

    if(cmd) {
        cmd.run(client, message, args)
        cdseconds = cmd.help.cooldown

        cooldown.add(message.author.id)
        
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, cdseconds * 1000)
    } else {return}
}