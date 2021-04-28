const { MessageEmbed } = require("discord.js");
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = {
	name: "slap",
	description: "Ever wanted to slap one of your friends virtually? Well now you can. >:3",
	guildonly: true,
	cooldown: 5,
	aliases: ["bap", "smack", "whap"],
	execute(message) {
		const PersonToSlap = message.mentions.members.first();
		const SlapEmbed = new MessageEmbed()
			.setAuthor(message.author.tag, message.author.displayAvatarURL())
			.setDescription(`${message.author} slaps ${PersonToSlap} excruciatingly hard. Ouch!`)
			.setFooter(version, picture)
			.setTimestamp()
			.setColor("#FF0000")
		message.channel.send(SlapEmbed);
	}
};