const Discord = require('discord.js')
const client = require('../index.js')
const db = require('quick.db')
const ms = require('ms')
const math = require("mathjs");

module.exports = {
    name: 'calc',
    description: 'Solve your math equations',
    usage: 'Eg: math 1+1 | 1*4 | 34-23*4/2',
    category: 'Utility',
    guildOnly: true,
    async execute(message, args){
    try {
      if (!args[0]) return message.channel.send("Please give me an equation!");
			let say = args[0]

      const embed = new Discord.MessageEmbed()
      .setColor("a4dcd4")
			.addField("Operation",`\`\`\`yaml\n${say}\`\`\``)
			.addField("Answer", `\`\`\`yaml\n${math.evaluate(args.join(" "))}\`\`\``)
      message.channel.send(embed);
    } catch (error) {
      message.channel.send(`My rock brain couldn't figure that out, was it really an equation?`).then(() => console.log(error));
    }
		}
}
