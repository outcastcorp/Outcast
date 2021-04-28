const { MessageEmbed } = require("discord.js");
const { owner, version, picture } = require("../OutcastAssets/config.json");
const db = require ("quick.db");
module.exports = {
    name: "unblacklist",
    description: "Unban users from globally using the bot.",
    cooldown: 0,
    aliases: ['unbl', "unbotban", "ungban", "unglobalban"],
    execute(message, args) {
        if (!owner.includes(message.author.id)) { // ...   
            const PermissionEmbed = new MessageEmbed()
                .setTitle("Error: Missing Permisssions")
                .addFields({name: "Error Code:", value: "403: Forbidden"}, {name: "Missing Permission:", value: "\`\`BOT_OWNER\`\`"})
                .setFooter(version, picture)
                .setTimestamp()
                .setColor("#FF0000")
            return message.channel.send(PermissionEmbed);
        };
        if (owner.includes(message.author.id)) { // ...
            const blacklist = new db.table('blacklist'); // find the db table 'blacklist'
            const user = args[0]; // the provided args --MUST-- be a user's ID
            
            let isBlacklisted = blacklist.fetch(user); // check if the user is in the bl
            if (isBlacklisted === null) {
                const ExistenentialEmbed = new MessageEmbed()
                    .setTitle("Error: User Already Exists In Database")
                    .addFields({name: "Error Code:", value: "409: Resource already exists in the database."}, {name: "Error Description:", value: "The user has already been blacklisted."})
                    .setFooter(version, picture)
                    .setTimestamp()
                    .setColor("#FF0000")
                return message.channel.send(ExistenentialEmbed);
            };
            blacklist.delete(user); // set their ID in the db for bl
            
            const SuccessEmbed = new MessageEmbed()
                .setTitle("Success!")
                .setDescription(`Successfully removed ${message.client.users.cache.get(user).tag} from the blacklist.`)
                .setFooter(version, picture)
                .setTimestamp()
                .setColor("#00FF00")
            return message.channel.send(SuccessEmbed);
        }
    }
};
