module.exports.run = (bot, message, args, discord) => {
  let embed = new Discord.RichEmbed()
  .setTitle("Bane Bot Help Menu!")
  .setDescription("This will be a list of all of Bane Bot's commands! o~o")
  .addField("Bot Help", "Help")
  
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "help"
}