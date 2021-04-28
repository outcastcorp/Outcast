const { Client, MessageEmbed, Guild } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json')
const client = new Client();
module.exports = { 
    name: "serverinfo",
    cooldown: 5,
    description: "Get info about a server.",
    aliases: ["si", , "si2"],
    execute(message, args){
        const ServerID = args[0];
        const ServerInfoEmbed = new MessageEmbed()
            .setTitle(`Info about ${client.guilds.cache.get(ServerID).name}.`)
            .addFields({name: "Guild Name:", value: client.guilds.cache.get(ServerID).name}, {name: "Guild ID:", value: client.guilds.cache.get(ServerID).id}, {name: "Guild Created On:", value: client.guilds.cache.get(ServerID).createdAt}, {name: "Number Of Roles:",  value: client.guilds.cache.get(ServerID).roles})
            .setColor("#FF0000")
            .setFooter(version, picture)
            .setTimestamp()
            .setThumbnail(client.guilds.cache.get(ServerID).iconURL())
        message.channel.send(ServerInfoEmbed);
	}  
};