# Outcast

## Useful Information:


## **Version:** v4.0.0 Alpha

### **Chanegelog:**
* Keyv replaces quick.db in order to sync guild prefix data & blacklist data between Outcast, Outcast Alpha, Outcast Pro, & Outcast Corporation Holo & in order to pave the way for future updates, such as more guild settings, logging, moderation action logging, events, & more badges, as well as due to an issue with quick.db that causes it not to install on Ubuntu. All data was manually transcribed. (Backend)
* Fixed all commands so that the bot checks if it has the required permissions BEFORE even reading the first line of the command file.
* Added <UPDATE_THIS> commands



Outcast is both useful & good for loads of fun all in one bot when starting a server, complete with a customizeable prefix. From moderation & utility, to fun & NSFW, we've got you covered.



## Bot:
**Cooldowns:** All commands in this category have a 5 second cooldown to prevent command spam/abuse & for quality assurance purposes unless otherwise stated.
**Required Bot Permissions:** All commands in this category require the following permissions:
* `EMBED_LINKS`

## help
* **Description:** Get a list of commands.
* **Aliases:** `cmds`, `commandlist`, `helpv4`
* **Usage 1:** `outcast_help`
* **Usage 2:** `outcast_help bot`

## ping
* **Description:** Check Outcast's, our server's, & Discord's ping in one command.
* **Aliases:** `botping`, `discordping`, `pingv3`, `serverping`
* **Usage:** `outcast_ping`

## privacy
* **Description:** View the Privacy Policy for Outcast, Outcast Alpha, Outcast Pro, & OutcastCorp Holo.
* **Aliases:** `policy`, `privacypolicy`, `privacypolicyv1`, `viewprivacypolicy`
* **Usage:** `outcast_privacy`

## suggest
* **Description:** Suggest a new command or feature for the bot.
* **Aliases:** `suggestsomething`
* **Usage:** `outcast_suggest Image Manipulation`


## Fun:
**Cooldowns:** All commands in this category have a 5 second cooldown to prevent command spam/abuse & for quality assurance purposes unless otherwise stated.
**Required Bot Permissions:** All commands in this category require the following permissions:
* `EMBED_LINKS`

### bite
* **Description:** Ever wanted to bite one of your friends virtually? Well now you can.
* **Aliases:** `nip`
* **Usage:** `outcast_bite @magicalbunny31❄🌄#9221`

### hug
* **Description:** Give your friends virtual hugs!!! ^w^
* **Aliases:** `cuddle`, `snuggle`
* **Usage:** `outcast_hug @magicalbunny31❄🌄#9221`

### slap
* **Description:** Ever wanted to slap one of your friends virtually? Well now you can.
* **Aliases:** `bap`, `smack`, `whap`
* **Usage:** `outcast_slap @magicalbunny31❄🌄#9221`


## Image
**Cooldowns:** All commands in this category have a 5 second cooldown to prevent command spam/abuse & for quality assurance purposes unless otherwise stated.
**Required Bot Permissions:** All commands in this category require the following permissions:
* `ATTACH_FILES`
* `EMBED_LINKS`

### bunny
* **Description:** Look at bunny pics, courtesy of FurryBot's API.
* **Aliases:** `bun`, `bunnypic`, `rabbit`, `rabbitpic`
* **Usage:** `outcast_bunny`

### bus
* **Description:** Look at pictures of buses. (Catalyst API)
* **Aliases:** `buspic`, `citybus`, `citybuspic`
* **Usage:** `outcast_bus`

### cat
* **Description:** Look at random cat pics, courtesy of random.cat.
* **Aliases:** `catpic`, `kitty`, `kittypic`, `kitten`
* **Usage:** `outcast_cat`

### dog
* **Description:** 
* **Aliases:** `dogpic`, `doggo`, `doggopic`, `puppy`, `puppypic`
* **Usage:** `outcast_dog`

### fox
* **Description:** Look at random fox pics. (Catalyst API)
* **Aliases:** `foxpic`, `foxxo`, `foxxopic`
* **Usage:** `outcast_fox`

### goat
* **Description:** Look at random goat pics, courtesy of Goatbot.io.
* **Aliases:** `goatpic`
* **Usage:** `outcast_goat`

### train
* **Description:** Look at pictures of trains. (Catalyst API)
* **Aliases:** `passengertrain`, `passengertrainpic`, `trainpic`, `tren`, `trenpic`
* **Usage:** `outcast_train`

### wah
* **Description:** Look at pictures of red pandas. (Catalyst API)
* **Aliases:** `redpanda`, `redpandapic`, `wahpic`
* **Usage:** `outcast_wah`


## Moderation:
**Cooldown:** All commands in this category have a 5 second cooldown to prevent command spam/abuse & for quality assurance purposes unless otherwise stated.

### ban
* **Required User Permissions:** `BAN_MEMBERS`
* **Required Bot Permissions:** `BAN_MEMBERS`, `EMBED_LINKS`
* **Description:** Ban users from the server.
* **Usage:** `outcast_ban @AshenRed#7028 Admin abuse`

### kick
* **Required User Permissions:** `KICK_MEMBERS`
* **Required Bot Permissions:** `KICK_MEMBERS`, `EMBED_LINKS`
* **Description:** Kick users from the server.
* **Aliases:** boot
* **Usage:** `outcast_kick @AshenRed#7028 Adios.

### purge
* **Required User Permissions:** `MANAGE_MESSAGES`
* **Required Bot Permissions:** `MANAGE_MESSAGES`, `EMBED_LINKS`
* **Description:** Mass-delete messages from a channel. (Due to Discord API limits, messages older than 2 weeks cannot be deleted.)  
* **Aliases:** `clear`, `prune`
* **Usage:** `outcast_purge {1-99}`


## NSFW
**Cooldowns:** All commands in this category have a 5 second cooldown to prevent command spam/abuse & for quality assurance purposes unless otherwise stated.
**Required Bot Permissions:** All commands in this category require the following permissions:
* `ATTACH_FILES`
* `EMBED_LINKS`

### chris
* **Description:** Chris is hilarious. Pics courtesy of FurryBot's API.
* **Aliases:** `hornypolarbear`, `typicalchris`
* **Usage:** `outcast_chris`

### e621
* **Description:** 
* **Aliases:** `e6`
* **Usage:** `outcast_e621 <tags>`

### rule34
* **Description:** View posts on Rule 34
* **Flags:** <Insert
* **Aliases:** `r34`
* **Usage:** `outcast_rule34 <flags>

### yiff
* **Description:** Furry porn. (Catalyst API)
* **Flags:** `gay`, `straight`
* **Aliases:** N/A
* **Usage:** `outcast_yiff <flags>


## Utility
**Cooldowns:** All commands in this category have a 5 second cooldown to prevent command spam/abuse & for quality assurance purposes unless otherwise stated.

### avatar
* **Required Bot Perms:** `EMBED_LINKS`, `ATTACH_FILES`
* **Description:** View other people's profile photos.
* **Aliases:** `icon`, `pfp`
* **Usage:** `outcast_avatar`

### decode
* **Required Bot Perms:** `EMBED_LINKS`
* **Description:** Decrypt text via Base64 or Binary.
* * **Flags:** `base64` or `binary`
* **Aliases:** `decrypt`
* **Usage:** `outcast_decode base64 SGV3d28gV29ybGQ=`

### encode
* **Required Bot Perms:** `EMBED_LINKS`
* **Description:** Encrypt text via Base64 or Binary.
* **Aliases:** `encrypt`
* **Flags:** `base64` or `binary`
* **Usage:** `outcast_encode base64 Hewwo World`


### serverinfo
* **Required Bot Perms:** `EMBED_LINKS`, `ATTACH_FILES`
* **Description:** Get info about a specific server. _**WARNING: FOR PRIVACY REASONS YOU MUST BE IN THE SERVER YOU ARE REQUESTING TO USE THIS TEMPORARILY.**_
* **Aliases:** `si`, `siv1`, `sinfo`
* **Usage:** `outcast_serverinfo <ServerID>`


### userinfo
* **Required Bot Perms:** `EMBED_LINKS`, `ATTACH_FILES`
* **Description:** Get info about a user.
* **Aliases:** newuserinfo, ui, uinfo, ui2, uiv2
* **Usage:** `outcast_userinfo @magicalbunny31❄🌄#9221`
