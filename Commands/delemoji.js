const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'delemoji',
    description: 'Deletes an emoji from the server',
    usage: 'delemoji <emoji>',
    category: 'Utility',
    required: 'MANAGE_EMOJIS',
    guildOnly: true,
    execute(message, args){
        if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
            return message.channel.send(`You don't have the right permissions to use this command!`)
          }
          
          const emoji = args[0];
          if (!emoji) return message.channel.send(`Please give me an emoji to delete!`);
      
          let customemoji = Discord.Util.parseEmoji(emoji);
      
          if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
              customemoji.animated ? "gif" : "png"
            }`;
            const name = args.slice(1).join(" ");
            message.guild.emojis.resolve(customemoji.id).delete();
      
            const Added = new MessageEmbed()
              .setColor(`a4dcd4`)
              .setDescription(
                `Emoji **deleted** with the name \`${customemoji.name}\``
              );
            return message.channel.send(Added);
          } else {
            let CheckEmoji = parse(emoji, { assetType: "png" });
            if (!CheckEmoji[0])
              return message.channel.send(`That isn't a valid emoji`);
            message.channel.send(
              `You Can Use Normal Emoji Without Adding In Server!`
            );
          }
    }
}