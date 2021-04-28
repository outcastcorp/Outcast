const { readdirSync } = require("fs");
const { Client, Collection, MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { prefix, token, version, picture } = require("./OutcastAssets/config.json");
const status = require ("./OutcastAssets/statuses.js");
const Outcast = new Client();

Outcast.commands = new Collection();

const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	Outcast.commands.set(command.name, command);
}

const cooldowns = new Collection();

Outcast.once("ready", async() =>{
	const statuses = await status(Outcast);
	console.log(`Bot online with ${Outcast.guilds.cache.size} guilds.`);
	console.warn("Don\'t forget to change the changelog and last modified date on config.json.");
	

    setInterval(() => {
        const statusMessages = [statuses.playing1, statuses.watching1, statuses.watching2, statuses.watching3, statuses.watching4]; // you can add more here
        const status = statusMessages[Math.floor(Math.random() * statusMessages.length)];

        Outcast.user.setPresence({ activity: { name: status.name, type: status.type } });
      }, 5000);
});

Outcast.on('message', async message => {
	const guildDB = new db.table('guilds');
	let guildPrefix; // set the prefix
	try {
	  guildPrefix = await guildDB.get (`${message.guild.id}.prefix`); // check if the guild has a prefix
	  if (guildPrefix === null || guildPrefix === undefined) guildPrefix = prefix; // if guild has no prefix, set it to default
	} catch(error) {
	  guildPrefix = prefix;
	  console.error(error)
	} finally {

	};

	if (!message.content.startsWith(guildPrefix) || message.author.bot) return;
	const blacklist = new db.table('blacklist');
	if (blacklist.fetch(message.author.id)) return; // if they are bl (it will return true), stop code
	const args = message.content.slice(guildPrefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = Outcast.commands.get(commandName)
		|| Outcast.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;
	Outcast.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${guildPrefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 0) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			const CooldownEmbed = new MessageEmbed()
				.setTitle("Automated Cooldown System")
				.setDescription(`The cooldown for this command is ${command.cooldown} seconds. Please wait ${timeLeft.toFixed(1)} more second(s) before running  \`${guildPrefix}${command.name}\` again.`)
				.setFooter(version, picture)
				.setTimestamp()
				.setColor("#FF0000")
			return message.channel.send(CooldownEmbed);	
		}
	};		

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		const ErrorEmbed = new MessageEmbed()
			.setTitle("Error!")
			.setDescription("An unknown error has occured!")
			.addField("Error:", error)
			.setColor("#FF0000")
			.setFooter(version, picture)
		return message.channel.send(ErrorEmbed);
	}
});
Outcast.login(token);