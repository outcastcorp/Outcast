const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { XGoatToken } = require("../../OutcastAssets/authentication.json");
module.exports = {
    name: "goat",
    description: "Look at random goat pics, courtesy of Goatbot.io.",
    cooldown: 5,
    aliases: ["goatpic"],
    execute(message, BotVersion, BotPFP) {
        const link = "https://goatbot.io/api/random/goat.json";
        fetch(link, { headers: [{ "User-Agent": BotVersion }, { "X-Goat-Token": XGoatToken } ]})
        .then(res => res.json())
        .then(body => {
            const GoatEmbed = new MessageEmbed()
                .setAuthor(message.author, message.author.displayAvatarURL())
                .setTitle("Goat!")
                .setImage(body.image)
                .setColor("#FFFFFF")
                .setFooter(BotVersion, BotPFP)
                .setTimestamp()
            message.channel.send(GoatEmbed)
        });
    }
};
