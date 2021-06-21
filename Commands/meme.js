const Discord = require('discord.js')
const client = require('../index.js')
const db = require('quick.db')
const ms = require('ms')
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'meme',
    description: 'Get Random Memes',
    usage: 'meme',
    category: 'Fun',
    guildOnly: true,
    async execute(message, args){
    const subreddits = ['memes', 'meirl', 'dankmemes'];

    let rand = subreddits[Math.floor(Math.random() * subreddits.length)];
    
    let img = await randomPuppy(rand);
    
    let embed = new Discord.MessageEmbed()
      .setColor("a4dcd4")
      .setTitle(`From /r/${rand}`)
      .setURL(`https://reddit.com/r/${rand}`)
      .setImage(img)
    
    message.channel.send(embed);
    }
}
