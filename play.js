const connect = require('./client')
const setupInput = require('./input')

//connects to server
console.log('Connecting...');
const connectObj = connect();

//sends/receives input?
setupInput(connectObj);

