const {
	PREFIX
} = require('../config.json');
const Discord = require('discord.js')
const client = require('../index.js')
const {
	Collection
} = require('discord.js')

module.exports = {
	name: 'help',
	description: 'List all of my commands.',
	aliases: ['commands'],
	category: 'Utility',
	usage: 'help [command]',
	cooldown: 5,
	execute(message, args) {
		const data = [];

		let categories = new Discord.Collection()

		if (!args.length) {
			message.client.commands.forEach(command => {
				const category = categories.get(command.category)
				if (category) {
					category.set(command.name, command)
				} else {
					categories.set(command.category, new Collection().set(command.name, command))
				}
			})

			const lines = categories.map((category, name) => `**• ${name}**: \n\`${category.map(command => command.name).join('`, `')}\``)

			let noArgEmbed = new Discord.MessageEmbed()
				.addField("\u2800", lines.join('\n'))
				.setColor("a4dcd4")
				.setTitle(`🗿 Golem Help`)

			return message.channel.send(noArgEmbed)
				.catch(error => {
					console.error(`Could not send help to ${message.author.tag}.\n`, error);
				});
		}
	},
};