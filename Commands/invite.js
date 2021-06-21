const Discord = require('discord.js')
const client = require('../index.js')
const db = require('quick.db')

module.exports = {
    name: 'invite',
    description: 'Invite this bot to your server!',
    usage: 'invite',
    category: 'Utility',
    guildOnly: true,
    async execute(message, args) {
        let tosEmbed = new Discord.MessageEmbed()
            .setColor('a4dcd4')
            .setTitle('Support Server')
            .setURL('')
            .setDescription(":warning: **If you aren't following the rules listed below you will be blacklisted.**")
            .addField('**-** Golem ToS', 'You must abide by the [Discord ToS](https://discord.com/terms) at all times. Please try to make sure you & any server members are **13+** and that the bot is not used for **raids/nukes** etc.')
            .addField('Confirming your request:', '```\nTo confirm that you agree to our ToS, please react with ✅\n```')
        message.channel.send(tosEmbed).then(sMessage => {
            setTimeout(() => {
                sMessage.react('✅')
            }, 3000)

            const filter = (reaction, user) => {
                return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
            };

            sMessage.awaitReactions(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
            }).then(async collected => {
                const reaction = collected.first();
                if (reaction.emoji.name === "✅") {
                    
                    let userReactions = (sMessage.reactions.cache.filter(reaction => reaction.users.cache.has(message.author.id)))
                    for (const reaction of userReactions.values()) {
                        await reaction.users.remove(message.author.id);
                    }
                    reaction.users.remove(message.client.user.id)

                    let editEmbed = new Discord.MessageEmbed()
                        .setTitle(`${message.client.user.username} Bot Invite`)
                        .setColor('a4dcd4')
                        .setURL('https://discord.com/api/oauth2/authorize?client_id=856396792034623489&permissions=1074064464&scope=bot')
                    sMessage.edit(editEmbed)
                }
            })
        })
    }
}