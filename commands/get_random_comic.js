'use strict'
const persistence = require('moodochrome-bot').persistence;

/**
* Demonstrates getting persisted data.
*/
module.exports = {
  commandAliases: ['!comic'],
  canBeChannelRestricted: false,
  serverAdminOnly: false,
  uniqueId: 'getComic70327',
  shortDescription: 'Get a random comic from my database.',
  longDescription: 'Get a random comic from my database. I will randomly select a comic from among the comics stored when a bot uploads a comic.',
  action(bot, msg, suffix, settings, extension) {
    let serverId = msg.channel.guild.id;
    return persistence.getDataForServer(serverId).then(serverData => {
      if (!serverData.comics) {
        return msg.channel.createMessage('There aren\'t any comics yet :( Use Septapus to make some new comics.');
      }

      let comicIndex = Math.floor(Math.random() * serverData.comics.length);
      if (extension === '-newest') {
        comicIndex = serverData.comics.length - 1;
      }
      return msg.channel.createMessage(serverData.comics[comicIndex]);
    });
  },
  canHandleExtension(extension) {
    return extension === '-newest';
  }
};