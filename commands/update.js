const discord = require('discord.js')
const developerids = require(`../team.json`)
module.exports.run = (bot, message, args, discord) => {
  if (developerids.includes(message.author.id)) {
  let joinargs = args.join(" ");
  let em = new discord.RichEmbed()
    .setTitle('Update Notes!')
    .setDescription(joinargs)
    .setFooter(`Sent by ${message.author.username}`)
    .setColor("BLUE")
  
  message.channel.send({embed: em})
  }
}

module.exports.help = {
  name: "update"
}
