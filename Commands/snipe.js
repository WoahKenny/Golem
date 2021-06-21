const Discord = require('discord.js')
const client = require('../index.js')
const db = require('quick.db')

module.exports = {
    name: 'snipe',
    description: 'Snipe a deleted message',
    usage: 'snipe',
    category: 'Fun',
    guildOnly: true,
    async execute(message, args) {
        let msg = await db.get(`msg_${message.channel.id}`)
        if (!msg) {
            return message.channel.send(`There's nothing to snipe!`)
        }
        let author = await db.get(`author_${message.channel.id}`)
        let icon = message.guild.iconURL()
        let embed = new Discord.MessageEmbed()
            .setAuthor(message.client.users.cache.get(author).tag, message.client.users.cache.get(author).displayAvatarURL({ dynamic: true}))
            .setDescription(msg)
            .setColor("a4dcd4")
        message.channel.send(embed)

    }
}