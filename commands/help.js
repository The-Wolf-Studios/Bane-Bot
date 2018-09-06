module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle("Bane Bot Help Menu!")
  .setDescription("This will be a list of all of Bane Bot's commands! o~o")
  .setColor("GREEN")
  .addField("Bot Help", "Help")
  
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "help"
}
