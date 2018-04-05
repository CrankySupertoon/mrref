'use strict'
const gemsList = require('./../gems-list.js');

/**
* Adds bot uploaded comics to an archive
*/
module.exports = {
  name: 'gemsreactions',
  action(msg, emoji, userId) {
    let gemsListChannel = msg.channel.guild.channels.find(channel => channel.name === 'gems-list');
    switch (emoji.name) {
      case '❌':
        return gemsList.tryCloseRoom(gemsListChannel, userId, msg.id);
        break;
      case '🥊':
        return gemsList.tryJoinRoom(gemsListChannel, userId, msg.id);
        break;
      default:
    }

    return false;
  }
};