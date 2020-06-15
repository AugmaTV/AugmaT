const Discord = require("discord.js")
let cooldown = new Map()
const prefix = require("../config.json").prefix

module.exports = (client, message) => {
    if(message.content.startsWith(prefix)) {
        if(cooldown.has(message.author.id)) {
            message.delete()
            let remaining = cdseconds - ((Date.now() - cooldown.get(message.author.id)) / 1000)
            message.reply(`Tu as ${Number.parseFloat(remaining).toFixed(2)} secondes de cooldown avant de réutiliser cette commande.`)
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

        cooldown.set(message.author.id, Date.now())
        
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, cdseconds * 1000)
    } else {return}
}