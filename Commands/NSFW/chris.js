const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  name:  "chris",
  description: "Out-of-context Chris.",
  cooldown: 5,
  Category: "NSFW",
  execute(message, BotVersion, BotPFP, colors){
    const link = "https://yiff.rest/V2/chris";
    fetch(link)
    .then(res => res.json())
    .then(r => {
      const { images } = r;
      const ChrisEmbed = new MessageEmbed()
        .setColor(colors.white)
        .setTitle("Chris is hilarious.")
        .setImage(images[0].url)
        .setFooter(BotVersion, BotPFP)
        .setTimestamp()
      message.channel.send(ChrisEmbed);
    });
  }
};
