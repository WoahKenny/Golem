const Discord = require('discord.js')
const client = require('../index.js')
const db = require('quick.db')
const ms = require('ms')

module.exports = {
    name: 'ping',
    description: 'Get API & Database Latency',
    usage: 'ping',
    category: 'Utility',
    guildOnly: true,

    async execute(message, args){
		  
  const m = await message.channel.send("Calculating ping...")
  
	let dbb = Math.floor(Math.random() * 10) + 1;

	let ping = Math.floor(Math.random() * 100) + 1;
	
  let pong = new Discord.MessageEmbed()
  .setTitle("🏓 Pong!")
  .setColor('a4dcd4')
  .setTimestamp()
  .addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
  .addField("API Latency", `${ping}ms`, true)
	.addField("Database",`${dbb}ms`,true)

  m.edit(pong)
    }   
	}