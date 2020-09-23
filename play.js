const connect = require('./client')

console.log('Connecting...');
connect();

// const net = require('net');
// const { stdin } = require('process');

// const connect = function() {
//   const conn = net.createConnection({
//     host: 'localhost',
//     port: 50541
//   });


//   // interpret incoming data as text
// conn.setEncoding('utf8');

// conn.on('data', (data) => {
//   console.log('Server says: ', data);
// });

// conn.on('connect', () => {
//   console.log('Successfully connected to game server');
// })

// conn.on('connection', (client) => {
//   client.setEncoding('utf8'); // interpret data as text
//   client.on('data', (data) => {
//     console.log('Message from client: ', data)
//   })
// })



// return conn;
// };

// module.exports = connect;