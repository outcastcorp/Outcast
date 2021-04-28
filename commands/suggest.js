const { WebhookClient, MessageEmbed } = require("discord.js");
var { version, picture, WebhookID, WebhookToken } = require("../OutcastAssets/config.json");
const webhookClient = new WebhookClient(WebhookID, WebhookToken);
module.exports = {
    name: "suggest",
    description: "Suggest ideas for the bot!",
    cooldown: 5,
    aliases: ["submitsuggestion"],
    guildonly: true,
    async execute(message, args) { // ...
        const shit = args.slice(0).join(' ');
        const WebhookEmbed = new MessageEmbed()
            .setTitle(`Suggestion From ${message.author.tag} in Guild ${message.guild.name}.`)
            .setDescription(shit)
            .setFooter("Outcast Webhook Client v4", picture)
            .setTimestamp()
            .setThumbnail(message.guild.iconURL())
        webhookClient.send(WebhookEmbed);
        const SuccessEmbed = new MessageEmbed()
            .setTitle("Success!")
            .setDescription(`Successfully suggested \"${shit}\". You can make another suggestion in 11 hrs, 59 Minutes, 59 Seconds.`)
            .setFooter(version, picture)
            .setTimestamp()
            .setColor("#00FF00")
        message.channel.send(SuccessEmbed);
    }
};