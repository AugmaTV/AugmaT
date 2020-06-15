const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
const token = require("./token.json").discord

client.login(token).then(console.log("Bot Logged On, Ready To Work"))

client.commands = new Discord.Collection()

fs.readdir('./commands/', (error, f) => {
    if (error) {return console.error(error)}
        let commandes = f.filter(f => f.split('.').pop() === 'js')
        if (commandes.length <= 0) {return console.log('Aucune commande DEV trouvée !', 'error')}

        commandes.forEach((f) => {
            let commande = require(`./commands/${f}`)
            console.log(`ALL | ${f} commande chargée !`, 'info')
            client.commands.set(commande.help.name, commande)
        })
})

fs.readdir('./events/', (error, f) => {
    if (error) {return console.error(error)}
    let event = f.filter(f => f.split('.').pop() === 'js')
    if (event.length <= 0) {return console.log('Aucun event trouvée !', 'error')}else{
        console.log(`${f.length} events chargés`, 'info')}

        f.forEach((f) => {
            let events = require(`./events/${f}`)
            let event = f.split('.')[0]
            client.on(event, events.bind(null, client));
        })
})