module.exports.run = (bot, message, args, discord) => {
    var mes = args.join(' ');
    if (!mes) return message.channel.send("You need to provide a message.")
    let em = new discord.RichEmbed()
    .setTitle(`Contact System`)
    .setDescription(`\n${mes}`)
    .setColor(`GREEN`)
    .setFooter(`This message was sent by ${message.author.tag}`)
    .setTimestamp()
    .setThumbnail(bot.user.avatarURL)
    
    let emb = new discord.RichEmbed()
    .setTitle(`Contact System`)
    .setDescription(`Now contacting WolfBane.`)
    .setColor(`GREEN`)
    .setFooter(`Contact System`)
    .setTimestamp()
    .setThumbnail(bot.user.avatarURL)
    
    message.channel.send({embed: emb})
    bot.users.get('369256915479560192').send({embed: em})
}

module.exports.help = {
    name: "bug"
