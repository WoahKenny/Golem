const Discord = require('discord.js')
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `a4dcd4`;

module.exports = {
    name: 'addemoji',
    description: 'Adds the emoji to the server',
    usage: 'emoji <emoji>',
    category: 'Utility',
    required: 'MANAGE_EMOJIS',
    guildOnly: true,
    async execute(message, args) {
        if (!message.member.hasPermission("MANAGE_EMOJIS")) {
            return message.channel.send(`You don't have the right permissions to use this command!`)
        }

        const emoji = args[0];
        if (!emoji) return message.channel.send(`Please give me an emoji to add!`);

        let customemoji = Discord.Util.parseEmoji(emoji);

        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
              customemoji.animated ? "gif" : "png"
            }`;
            const name = args.slice(1).join(" ");
            message.guild.emojis.create(
                `${Link}`,
                `${name || `${customemoji.name}`}`
            ).catch(error => {
                console.log(error)
            })
            const Added = new MessageEmbed()
                .setColor(`${Color}`)
                .setDescription(
                    `Emoji **added** with the name \`${name || `${customemoji.name}`}\``
                );
            return message.channel.send(Added).catch(e => {
                console.log(e)
            })
        } else {
            let CheckEmoji = parse(emoji, {
                assetType: "png"
            });
            if (!CheckEmoji[0])
                return message.channel.send(`That isn't a valid emoji!`);
            message.channel.send(
                `You Can Use Normal Emoji Without Adding In Server!`
            );
        }
    }
};