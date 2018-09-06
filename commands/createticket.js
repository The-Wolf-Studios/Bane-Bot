module.exports.run = (bot, message, args, discord) => {
  let issue = args.join(" ")
  let emb = discord.RichEmbed()
  .setTitle("Support Ticket.")
  .setColor("GREEN")
  .setDescription(issue)
  .addField("Ticket Number", Math.floor(Math.random()*1000))
  .setFooter(message.author.username)
  
  messages.channel.send({embed: emb})
}
module.exports.help = {
    name: "contact"
}
