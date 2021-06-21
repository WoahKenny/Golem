const Discord = require('discord.js')
const client = require('../index.js')
const db = require('quick.db')
const ms = require('ms')

module.exports = {
    name: 'serverinfo',
    description: 'List of information about the server',
    usage: 'serverinfo',
    category: 'Utility',
    guildOnly: true,
    async execute(message, args){
			let embed = new Discord.MessageEmbed()
      .setColor("a4dcd4")
      .setTitle("Server Info")
      .setThumbnail(message.guild.iconURL())
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
      .addField("**Guild Owner:**", `${message.guild.owner}`, true)
      .addField("**Member Count:**", `${message.guild.memberCount}`, true)
      .addField("**Total Real Members**", message.guild.members.cache.filter(member => !member.user.bot).size, true)
      .addField("**Total Bots**", message.guild.members.cache.filter(member => member.user.bot).size, true)
      .addField("**Total Channels**", message.guild.channels.cache.size, true)
      .addField("**Total Text Channels**", message.guild.channels.cache.filter(ch => ch.type === 'text').size, true)
      .addField("**Total Voice Channels**", message.guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
      .addField("**Created On**", message.guild.createdAt.toLocaleString(), true)
      .addField("**Roles**",`${message.guild.roles.cache.map(role => role.toString()).join(' ')}`)

		let embedd = new Discord.MessageEmbed()
      .setColor("a4dcd4")
      .setTitle("Server Info")
      .setThumbnail(message.guild.iconURL())
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
      .addField("**Guild Owner:**", `${message.guild.owner}`, true)
      .addField("**Member Count:**", `${message.guild.memberCount}`, true)
      .addField("**Total Real Members**", message.guild.members.cache.filter(member => !member.user.bot).size, true)
      .addField("**Total Bots**", message.guild.members.cache.filter(member => member.user.bot).size, true)
      .addField("**Total Channels**", message.guild.channels.cache.size, true)
      .addField("**Total Text Channels**", message.guild.channels.cache.filter(ch => ch.type === 'text').size, true)
      .addField("**Total Voice Channels**", message.guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
      .addField("**Created On**", message.guild.createdAt.toLocaleString(), true)
      .addField("**Roles**",`There are so many roles **I couldn't show them.**`)
    
    message.channel.send(embed).catch(err => {
      console.log(err);
      message.channel.send(embedd);
    })
	}
}
