const Discord = require('discord.js')
const client = require('../index.js')

module.exports = {
    name: 'poll',
    description: 'Sends a yes or no poll',
    usage: 'poll <question>',
    category: 'Utility',
    guildOnly: true,
    async execute(message, args){
        if(!args.join(" ")) return message.channel.send("Please enter a question for the poll!")

        let firstPollEmbed = new Discord.MessageEmbed() 
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true}))
            .setDescription("```\n⌛ Preparing a poll...\n```")

        let secondPollEmbed = new Discord.MessageEmbed()
            .setColor("a4dcd4")
            .setDescription(`**${message.author.tag}'s Poll: ** \n \`\`\`yaml\n${args.join(" ")}\n\`\`\``)

        message.channel.send(firstPollEmbed).then((message)=> {
                message.edit(secondPollEmbed)
								message.react("✅")
                message.react("❌")
						})
		}
};