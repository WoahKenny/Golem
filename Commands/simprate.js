const Discord = require("discord.js")

module.exports = {
    name: 'simprate',
    description: 'Sends you your simp rate, completely random!',
    usage: 'simprate [user]',
    usage: 'simprate',
    category: 'Fun',
    guildOnly: true,
    async execute(message, args){
        let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
        let gayrate = Math.floor(Math.random() * 101)


        if(!User){
            let gayrateEmbed = new Discord.MessageEmbed()
                .setTitle("SimpFinder21")
                .setColor("a4dcd4")
                .setDescription("You are `" + gayrate + "%` simp :flushed:")
            message.channel.send(gayrateEmbed).catch(e => {
                console.log(e)
            })
        } else {
            let argsEmbed = new Discord.MessageEmbed()
                .setTitle("SimpFinder21")
                .setColor("a4dcd4")
                .setDescription(`${User.user.username} is \`${gayrate}%\` simp :flushed:`)
            message.channel.send(argsEmbed).catch(e => {
                console.log(e)
            })
        }
    }
}