const { MessageEmbed, GuildMember } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json')
module.exports = { 
    name: "userinfo",
    description: "Info about a user",
    cooldown: 5,
    aliases: ["ui", "newuserinfo", "uiv2", "ui2"],
    execute(message){
        if (message.member.presence.status === 'online') message.member.presence.status = '<:online:771508958128504863> Online';
        else if (message.member.presence.status === 'idle') message.member.presence.status = '<:idle:771508986158514206> Idle';
        else if (message.member.presence.status === 'dnd') message.member.presence.status = '<:dnd:771509016776933376> Do Not Disturb (DnD)';
        else if (message.member.presence.status === 'offline') message.member.presence.status = '<:invisible:771509297565794304> Offline/Invisible';
        let member = message.mentions.members.first();     
        if (!member) { // ...
            const embed1 = new MessageEmbed()
                .setTitle(`Info about ${message.author.tag} (You).`)
                .addFields({name: "Name:", value: message.author.tag, inline: true}, {name: "Status:", value: message.member.presence.status, inline: true}, {name:  "ID:", value: message.author.id, inline: true}, {name: "Registered:", value: message.author.createdAt, inline: true}, {name: "Joined Server on:", value: message.guild.members.cache.get(message.author.id).joinedAt, inline: true}, {name: "Badges:", value: message.author.flags, inline: false}, {name: "Roles:",  value: message.member.roles.cache.map(role => role), inline: false})
                .setColor("#FF0000")
                .setFooter(version, picture)
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL())
            return message.channel.send(embed1);
        };
        message.mentions.users.map(user => {
            const embed2 = new MessageEmbed()
                .setTitle(`Info about ${user.tag}.`)
                .addFields({name: "Name:", value: user.tag, inline: true}, {name: "Status:", value: message.member.presence.status, inline: true}, {name: "ID:", value: user.id, inline: true}, {name: "Registered:", value: user.createdAt, inline: true}, {name: "Joined Server On:", value: message.guild.members.cache.get(user.id).joinedAt, inline: true}, {name: "Badges:", value: GuildMember.flags, inline: false}, {name: "Roles:", value: message.mentions.members.first().roles.cache.map(role => role), inline: false})
                .setColor("#FF0000")
                .setFooter(version, picture)
                .setTimestamp()
                .setThumbnail(user.displayAvatarURL())
            message.channel.send(embed2);
        });
    },
};