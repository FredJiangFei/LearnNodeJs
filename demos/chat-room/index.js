const net = require('net');
const { channel } = require('./channel');

const server = net.createServer(client => {
  const id = `${client.remoteAddress}: ${client.remotePort}`;
  channel.emit('join', id, client);

  client.on('data', data => {
    data = data.toString();
    if (data === 'shutdown\r\n') {
      channel.emit('shutdown');
    }

    channel.emit('broadcast', id, data);
  });

  client.on('close', () => {
    channel.emit('leave', id);
  });
});

server.listen(3000, () => console.log('Listen on 3000.....'));
