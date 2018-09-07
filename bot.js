const discord = require('discord.js');
var bot = new discord.Client();
const config = require(`./config.json`);
const staff = require(`./team.json`);
const fs = require('fs');
var prefix = ".";
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {
  console.log('Finding Commands.');
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

bot.on("ready", () => {
  bot.user.setActivity(`Supporting ${bot.guilds.size}, servers!`)
  console.log('Bane-Bot is ready!!')
});
bot.on("guildcreate", () => {
  bot.user.setActivity(`Supporting ${bot.guilds.size}, servers!`)
  console.log(`Joined a new guild`)
});

bot.on('message', message => {
  let mArray = message.content.split(" ")
  let args = mArray.slice(1)
  let cmd = bot.commands.get(mArray[0].slice(prefix.length))
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.startsWith(prefix)) return;
  
  if (cmd) {
    cmd.run(bot, message, args, discord)
  }
});
bot.login(process.env.TOKEN)
