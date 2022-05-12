// you need to install discord.js
// also, run this with node

const Discord = require('discord.js');
const message = require('./events/guild/message');
const ms = require('ms');
const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


token = '(your token here)'
client.login(token)