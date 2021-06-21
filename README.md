# 🗿 Golem

Atlanta is an open source Discord bot coded in JavaScript with [Discord.js](https://discord.js.org) by [WoahKenny](https://github.com/Androz2091).  

### Commands

Golem has a lot of commands, with **5 main categories**:

*   💰 **Economy**: `beg`, `work`, `crime`, `pay`, `balance`, `leaderboard`, and **3** more! 
*   👻 **Fun**: `gayrate`, `meme`, `message`, `cuterate`, `simprate` and **3** more! 
*   🖨️ **Images**: `enlarge`, `fire`, `respect`, `tweet`, `wanted`, and **more** commands soon!! 
*   ⚙️ **Utility**: `addemoji`, `delemoji`, `calculator`, `serverinfo`, `userinfo`, and **4** more!
*   👑 **Owner**: `nuke`, `eval`, `blacklist` and **3** more!

[	• Full Command List	• ](https://cdn.discordapp.com/attachments/856403799026171924/856443949699039262/unknown.png)

## Installation

### Public Client

If you don't want to edit the code of the bot, a public version is available, which you can [invite](https://discord.com/api/oauth2/authorize?client_id=856396792034623489&permissions=1074064464&scope=bot) to your Server!   

### Your Own Client

If you want to edit the bot's code and host it yourself, here's how you can do so:

### Prerequisites

* Make sure you have the latest [Node.js](https://nodejs.org/en/) version installed aswell 
* Make sure [Git](https://www.linode.com/docs/guides/how-to-install-git-on-linux-mac-and-windows/) is installed
* Clone the repository by running `git clone https://github.com/WoahKenny/Golem.git` (in a folder)

### Edit Config.js

```js
{
    "token":"",
    "PREFIX": "",
    "owner":"",
    "AME_API":""
}
```

### To acquire a Discord bot token follow these steps:

- Go to the [Discord Developer Portal](https://discordapp.com/developers/applications/) and create a New Application

![Create Application](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-1.jpg)

- Fill in necessary information like the profile picture and name

![Fill in Information](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-3.jpg)

- Go to the Bot panel on the side bar. Add a bot and copy the bot token

![Copy Token](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-11.jpg)

### Setting A Prefix
```js
{
    "token":"NzMzOTA0NjUzOTI5OTM4OTg0.XxJ7-A.z-Y9tU8MzIKa6j3gyROvufHrCO0",
    "PREFIX": "",
    "owner":"",
    "AME_API":""
}
```
You can fill in the `PREFIX` field with whatever you like, it's completely up to preference. It will be the symbol/letters before your commands. 
If your prefix is `$`, commands will be run like this: `$<command>`

### Owner ID/Developer
```js
{
    "token":"NzMzOTA0NjUzOTI5OTM4OTg0.XxJ7-A.z-Y9tU8MzIKa6j3gyROvufHrCO0",
    "PREFIX": "$",
    "owner":"",
    "AME_API":""
}
```
Now we're going to tell the bot who the owner of the bot is, that's you! (or someone else)

We need to get your user ID, but to do so you must have developer mode enabled. If you don't, you can follow [this tutorial](https://www.howtogeek.com/714348/how-to-enable-or-disable-developer-mode-on-discord/).

Once you've got that copy it into the owner field. Note: ID's look like this: `856396792034623489` not `WoahKenny#6969`

### Getting Amethyste API
{
    "token":"NzMzOTA0NjUzOTI5OTM4OTg0.XxJ7-A.z-Y9tU8MzIKa6j3gyROvufHrCO0",
    "PREFIX": "$",
    "owner":"856396792034623489",
    "AME_API":""
}

We have everything filled in but the `AME_API`. To get this you can do 1 of two things; generate your own, use a pre-made API.

If you want to save some time feel free to copy the following API:
`bb03f373caa534fcfcbaeae177a65134f44a6e57ba7a7b098be273867b376d8a677ddae3c23c6ded4fec8288573945e8c3483689deb13f229376ad4b5b60231d`
Otherwise, generate your own on the [Amethyste API website](https://api.amethyste.moe/).

### Installing Dependencies

In your terminal run `npm install` to install required dependecies. 
If you get a line of code that says `found vulnerability...run audit fix` please do so.

### Start the bot

Then run `node .` or `npm start` and your bot should be up and running.

## Contributing

If you wish to contribute to the code, feel free to fork the repository and submit a pull request!

## Credit

If you plan to use any part of this source code in your own bot, I would be grateful if you would include some form of credit somewhere.

Thank's to [Atlanta Bot](https://www.atlanta-bot.fr/) for the Readme template.
