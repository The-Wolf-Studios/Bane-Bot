module.exports.run = (bot, message, args, discord) => {
let joinargs = args.join(" ");
let em = discord.RichEmbed()
  .setTitle('Update Notes!')
  .setDescription(joinargs)
  .setFooter(`Sent by ${message.author.username}`)
  .setColor("BLUE")
  
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "update"
}
