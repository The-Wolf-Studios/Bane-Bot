module.exports.run = (bot, message, args, discord) => {
  var join = args.join(" ");

  message.channel.send(join)


}

module.exports.help = {
    name: "say"
}
