# 🗿 Golem

## Source code is in Discord.js v.12, learn how to update it [here](https://discordjs.guide/additional-info/changes-in-v13.html#before-you-start)

Golem is an open source Discord bot coded in JavaScript with [Discord.js](https://discord.js.org) by [WoahKenny](https://github.com/WoahKenny).  

### Commands

Golem has a lot of commands, with **5 main categories**:

*   💰 **Economy**: `beg`, `work`, `crime`, `pay`, `balance`, `leaderboard`, and **3** more! 
*   👻 **Fun**: `gayrate`, `meme`, `message`, `cuterate`, `simprate` and **3** more! 
*   🖨️ **Images**: `enlarge`, `fire`, `respect`, `tweet`, `wanted`, and **more** commands soon!! 
*   ⚙️ **Utility**: `addemoji`, `delemoji`, `calculator`, `serverinfo`, `userinfo`, and **4** more!
*   👑 **Owner**: `nuke`, `eval`, `blacklist` and **3** more!

[	• Full Command List	• ](https://cdn.discordapp.com/attachments/856403799026171924/856443949699039262/unknown.png)

## Installation

### Public Instance 

If you don't want to edit the code of the bot, a public version is available, which you can [invite](https://discord.com/api/oauth2/authorize?client_id=856396792034623489&permissions=1074064464&scope=bot) to your Server!   

### Your Own Client

If you want to edit the bots code and host it yourself, here is how you can do so:

### Prerequisites

* Make sure you have the latest [Node.js](https://nodejs.org/en/) version and that [Git](https://www.linode.com/docs/guides/how-to-install-git-on-linux-mac-and-windows/) is installed 
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
Now we're going to tell the bot who the owner of the bot is, that's you! We need to get your user ID, but to do so you must have developer mode enabled. 
If you don't, you can follow [this tutorial](https://www.howtogeek.com/714348/how-to-enable-or-disable-developer-mode-on-discord/).

Once you've got that copy it into the owner field. **Note: ID's look like this: `856396792034623489` not `WoahKenny#6969`**

### Getting Amethyste API
```
{
    "token":"NzMzOTA0NjUzOTI5OTM4OTg0.XxJ7-A.z-Y9tU8MzIKa6j3gyROvufHrCO0",
    "PREFIX": "$",
    "owner":"856396792034623489",
    "AME_API":""
}
```
We have everything filled in but the `AME_API`. This is the API for a handful of commands so you will need it. 

You can generate an API on the [Amethyste API website](https://api.amethyste.moe/).

### Installing Dependencies

In your terminal run `npm install` to install required dependecies. If you get [this line of code](https://i.imgur.com/i4pzWqth.jpg) run `npm audit fix`.

### Start the bot

Then run `node .` or `npm start` and your bot should be up and running.

## Support

If you wish to support this project you can do it in a few ways:
* Contribute to the code, feel free to fork the repository and submit a pull request!
* Starring the project, it motivates me a ton to continuing working on the project!

## Credit

If you plan to use any part of this source code in your own bot, I would be grateful if you would include some form of credit somewhere.

Thank's to [Atlanta Bot](https://www.atlanta-bot.fr/) for the Readme template.

[![Stargazers repo roster for @woahkenny/golem](https://reporoster.com/stars/dark/woahkenny/golem)](https://github.com/dark/woahkenny/golem/stargazers)
