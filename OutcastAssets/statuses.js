module.exports = client => ({
  playing1: {
    name: `with ${client.users.cache.size} users. | Outcast help`,
    type: `PLAYING`
  },
  watching1: {
    name: `${client.channels.cache.size} channels. | Outcast help`,
    type: `WATCHING`
  },
  watching2: {
    name: `${client.guilds.cache.size} guilds on 1 shard. | Outcast help`,
    type: `WATCHING`
  },
  watching3: {
    name: `https://outcastcorp.us/outcast | Outcast help`,
    type: `WATCHING`
  },
  watching4: {
    name:`Ash continue to optimize my code while I stand over them with a cleaver. | Outcast help`,
    type: `WATCHING`
  },
});
