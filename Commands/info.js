const Discord = require("discord.js")

const {
    version
} = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")


module.exports = {
    name: 'info',
    description: 'Shows detailed information about the client',
    usage: 'info',
    category: 'Developer',
    required: 'DEVELOPER',
    guildOnly: true,
    async execute(message, args) {
        let cpuLol;
        cpuStat.usagePercent(async function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }
            const duration = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
            const botinfo = new Discord.MessageEmbed()
                .setAuthor(message.client.user.username)
                .setTitle("__**Stats About Me!**__")
                .setColor("a4dcd4")
                .addField("`⏳` Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
                .addField("`⌚️` Uptime ", `${duration}`, true)
                .addField("`📁` Users", `${message.client.users.cache.size}`, true)
                .addField("`📁` Servers", `${message.client.guilds.cache.size}`, true)
                .addField("`📁` Channels ", `${message.client.channels.cache.size}`, true)
                .addField("`👾` Discord.js", `v${version}`, true)
                .addField("`🤖` Node", `${process.version}`, true)
                .addField("`🤖` CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
                .addField("`🤖` CPU usage", `\`${percent.toFixed(2)}%\``, true)
                .addField("`🤖` Arch", `\`${os.arch()}\``, true)
                .addField("`💻` Platform", `\`\`${os.platform()}\`\``, true)
         message.channel.send(botinfo)
        });
    }
}