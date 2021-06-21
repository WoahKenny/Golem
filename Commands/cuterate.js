const Discord = require("discord.js")

module.exports = {
    name: 'cuterate',
    description: 'Sends you your cute rate, completely random!',
    usage: 'cuterate [user]',
    usage: 'cuterate',
    category: 'Fun',
    guildOnly: true,
    async execute(message, args){
        let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
        let gayrate = Math.floor(Math.random() * 101)


        if(!User){
            let gayrateEmbed = new Discord.MessageEmbed()
                .setTitle("CuteRater2000")
                .setColor("a4dcd4")
                .setDescription("You are `" + gayrate + "%` cute :blush:")
            message.channel.send(gayrateEmbed).catch(e => {
                console.log(e)
            })
        } else {
            let argsEmbed = new Discord.MessageEmbed()
                .setTitle("CuteRater2000")
                .setColor("a4dcd4")
                .setDescription(`${User.user.username} is \`${gayrate}%\` cute :blush:`)
            message.channel.send(argsEmbed).catch(e => {
                console.log(e)
            })
        }
    }
}