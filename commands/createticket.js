module.exports.run = (bot, message, args, discord) => {
  let issue = args.join(" ");
  let emb = discord.RichEmbed()
  .setTitle("Support Ticket.")
  .setDescription(issue)
  .setColor("GREEN")
  .addField("Ticket Number", Math.floor(Math.random()*1000))
  .setFooter(message.author.username)
  
  message.channel.send({embed: emb})
}

module.exports.help = {
    name: "contact"
}
