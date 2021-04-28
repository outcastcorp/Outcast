const { MessageEmbed } = require("discord.js");
const { version, picture, LastUpdated, changelog } = require("../OutcastAssets/config.json");
const { execSync } = require("child_process");
const hostname = execSync('hostname').toString();
module.exports = { 
    name: "specs",
    description: "Info about the bot.",
    cooldown: 5,
    aliases: ["botinfo", "bi", "stats"],
    execute(message){
        let totalSeconds = (message.client.uptime / 1000);
        const days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        const uptime = `${days} days, ${hours} hours, ${minutes} minutes, ${Math.round(seconds)} seconds`;
        const package = require("../package.json");
        const discordjsVersion = package.dependencies["discord.js"];        const SpecsEmbed = new MessageEmbed()
            .setTitle("Bot Info")
            .setDescription(`**Changelog:**\n\`\`${changelog}\`\``)
            .addFields({name: "Version:", value: version, inline: true}, {name: "Version Type:", value: "Release", inline: true}, {name: "Library:", value: `Discord.js ${discordjsVersion}`, inline: true}, {name: "Developers:", value: `${message.client.users.cache.get('613527205103927367').tag} and ${message.client.users.cache.get('490178047325110282').tag}`, inline: true}, {name: "Last Updated:", value: LastUpdated, inlne: true}, {name: "Current Host Server:", value: hostname, inline: true}, {name: "Memory Specs:", value: `not done`, inline: true}, {name: "Uptime:", value: uptime, inline: true})
            .setColor("#FF0000")
            .setFooter(version, picture)
            .setThumbnail(picture)
            .setTimestamp()
        message.channel.send(SpecsEmbed);
    }    
};