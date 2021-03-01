const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "ping",
    description: "Check to see if Discord is dying and the bot's ping.",
    cooldown: 5,
    aliases: ["botlatency", "botping", "latency"],
    async execute(message, BotVersion, BotPFP) {
        if (!message.guild.me.permissions.has("EMBED_LINKS")) return message.channel.send("**Error: Bot Missing Permissions**\nThe bot is missing the `EMBED_LINKS` permision, which is required to run commands. (Error Code 409)");
        const m = await message.channel.send("Ping!");
        message.channel.bulkDelete(1, true)
        const PingEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setTitle("Outcast")
            .addField("Bot Latency:", `${Math.round(m.createdTimestamp - message.createdTimestamp)} ms`)
            .addField("API Latency:", `${Math.round(message.client.ws.ping)} ms`)
            .setColor("#FF0000")
            .setFooter(BotVersion, BotPFP)
            .setTimestamp()
        message.channel.send(PingEmbed);
    }
};
