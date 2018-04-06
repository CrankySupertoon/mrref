'use strict'
const gemsList = require('./../gems_list.js');

/**
* Adds bot uploaded comics to an archive
*/
module.exports = {
  name: 'gemsreactions',
  action(msg, emoji, userId) {
    let gemsListChannel = msg.channel.guild.channels.find(channel => channel.name === 'gems-list');
    let user = gemsListChannel.guild.members.find(user => user.id === userId);
    if (!user.bot) {
      switch (emoji.name) {
        case '❌':
          return gemsList.closeRoom(gemsListChannel, userId, msg.id);
          break;
        case '🥊':
          return gemsList.joinRoom(gemsListChannel, userId, msg.id);
          break;
        default:
      }
    }

    return false;
  }
};