const { MessageEmbed, MessageAttachment } = require("discord.js");
const { version, picture } = require("../OutcastAssets/config.json");
const RSOD = new MessageAttachment("../OutcastAssets/RSOD.png", "OutcastCorpRSOD.png");
module.exports = {
    name: "rsod",
    description: "Red version of Microsoft Windows's BSOD.",
    cooldown: 5,
    aliases: ["redscreen", "redscreenofdeath"],
    execute(message) {
        const RSODEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setTitle("RSOD")
            .setImage(RSOD)
            .setFooter(version, picture)
        message.channel.send(RSODEmbed);
    }
};
