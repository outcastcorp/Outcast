const { MessageEmbed } = require("discord.js");
const { BotVersion, BotPFP } = require("../../OutcastAssets/config.json");
module.exports = {
    name: "ban",
    description: "",
    cooldown: 0,
    aliases: ["boot"],
    execute(message, args) {
	    const member = message.mentions.members.first();
        const MissingPermission = "\`\`BAN_MEMBERS\`\`";
        const UserMissingPermissionsEmbed = new MessageEmbed()
            .setTitle("Error: Missing Permissions")
            .addField("401: Unauthorized: User Missing Permissions", `You are missing permissions required to run this command (${MissingPermission}).`)
            .setColor("#FF0000")
            .setFooter(BotVersion, BotPFP)
            .setTimestamp()
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(UserMissingPermissionsEmbed);

        const BotMissingPermissionsEmbed = new MessageEmbed()
            .setTitle("Error: Bot Missing Permissions")
            .addFields({name: "998: Bot Missing Permissions", value: `The bot is missing permissions required to run this command (${MissingPermission})`}, {name: "Error Description:", value: "Outcast is missing the required permissions to run this command"})
            .setColor("#FF0000")
            .setFooter(BotVersion, BotPFP)
            .setTimestamp()            
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(BotMissingPermissionsEmbed);

        const noMentionedUser = new MessageEmbed()
        .setTitle("Error: No User Mentioned")
        .addField("1000: No User Mentioned", "You didn\'t mention a valid user to ban. Please mention/give the ID of a valid user and try again. that the user you are mentioning/ the user's ID you are trying to ban is valid and try again.")
        .setFooter(BotVersion, BotPFP)
        .setTimestamp()
        .setColor("#FF0000")
        if (!member) return message.channel.send(noMentionedUser);
        
        const cannotBanUser = new MessageEmbed()
        .setTitle("Error: Cannot Ban User")
        .addField("600: Failed to Ban User", `Failed to ban the user that was requested to ban. Please ensure the roles they have is not higher than my role and that the user is not an administrator or the server owner.`)
        .setFooter(BotVersion, BotPFP)
        .setTimestamp()
        .setColor("#FF0000")
        if (!member.bannable) return message.channel.send(cannotBanUser);

        let ActualReason = args.slice(1).join(" ");
        if (!ActualReason) ActualReason = "No Reason Provided.";
        let ReasonGoingInAuditLog = `${message.author.tag}: ` + ActualReason;

        const BannedEmbed = new MessageEmbed()
            .setTitle("Outcast Moderation")
            .setDescription(`You have been banned from ${message.guild.name}.`)
            .addFields({name: "Reason:", value: ActualReason}, {name: "Moderator:", value: message.author.tag})
            .setFooter(BotVersion, BotPFP)
            .setTimestamp()
            .setColor("#FF0000")

        const successEmbed = new MessageEmbed()
            .setTitle("Success!")
            .setDescription(`Successfully banned ${member}: ${ActualReason}.`)
            .setFooter(BotVersion, BotPFP)
            .setTimestamp()
            .setColor("#00FF00")
        return member.send(BannedEmbed)
        .then(() => {
            member.ban({reason: ReasonGoingInAuditLog});
            message.channel.send(successEmbed);
        })
        .catch(() => {
            member.ban({reason: ReasonGoingInAuditLog});
            message.channel.send(successEmbed);
        });
    }
};
