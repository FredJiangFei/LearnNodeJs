const events = require('events');
const channel = new events.EventEmitter();

channel.clients = {};
channel.subscription = {};
channel.on('join', function(id, client) {
  client.write('Welcome');

  this.clients[id] = client;
  this.subscription[id] = (senderId, message) => {
    if (id !== senderId) {
      this.clients[id].write(message);
    }
  };

  this.on('broadcast', this.subscription[id]);
});

channel.on('leave', function(id) {
  channel.removeListener('broadcast', this.subscription[id]);
  channel.emit('broadcast', id, `${id} has left. \n`);
});

channel.on('shutdown', () => {
  channel.emit('broadcast', '', `Server shut down. \n`);
  //   channel.removeAllListeners('broadcast');
});

exports.channel = channel;
