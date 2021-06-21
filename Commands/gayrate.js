const Discord = require("discord.js")

module.exports = {
    name: 'gayrate',
    description: 'Sends you your gay rate, completely random.',
    usage: 'gayrate [user]',
    usage: 'gayrate',
    category: 'Fun',
    guildOnly: true,
    async execute(message, args){
        let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
        let gayrate = Math.floor(Math.random() * 101)


        if(!User){
            let gayrateEmbed = new Discord.MessageEmbed()
                .setTitle("Gayrator 🐊")
                .setColor("a4dcd4")
                .setDescription("You are `" + gayrate + "%` gay! 🏳️‍🌈")
            message.channel.send(gayrateEmbed).catch(e => {
                console.log(e)
            })
        } else {
            let argsEmbed = new Discord.MessageEmbed()
                .setTitle("Gayrator 🐊")
                .setColor("a4dcd4")
                .setDescription(`${User.user.username} is \`${gayrate}%\` gay! 🏳️‍🌈`)
            message.channel.send(argsEmbed).catch(e => {
                console.log(e)
            })
        }
    }
}