const Discord = require('discord.js')
const client = require('../index.js')
const db = require('quick.db')
const ms = require('ms')

module.exports = {
    name: 'userinfo',
    description: 'Get information about a user',
    usage: 'userinfo [mention]',
    category: 'Utility',
    guildOnly: true,
    async execute(message, args){
		if(args.length > 1) return message.channel.send('Only mention one user!');
    if(!args[0]) return message.channel.send('You need to mention a user!');

    if(args[0]){
      let member = message.mentions.members.first();

      if(member) {
        let embed = new Discord.MessageEmbed()
          .setColor("a4dcd4")
          .setTitle("User Info")
          .setThumbnail(member.user.displayAvatarURL())
          .setAuthor(`${member.user.tag} (${member.id})`, member.user.displayAvatarURL())
          .addField("**Username:**", `${member.user.username}`, true)
          .addField("**Discriminator:**", `${member.user.discriminator}`, true)
          .addField("**ID:**", `${member.user.id}`, true)
          .addField("**Status:**", `${member.user.presence.status}`, true)
          .addField("**Joined On:**", `${member.joinedAt.toLocaleString()}`, true)
          .addField("**Created On:**", `${member.user.createdAt.toLocaleString()}`, true)
          .setDescription(`${member.roles.cache.map(role => role.toString()).join(' ')}`)

        message.channel.send(embed);
      } else {
          message.channel.send(`Could not find that member`);
      }
    }
	}
}
