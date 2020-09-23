const { CONNREFUSED } = require("dns");



//handles all user input
const handleUserinput = (key) => {

// Ctrl + c to quit
  if (key === '\u0003') {
    console.log('bye');
    process.exit();
  }
// movement keys
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }

  //messages
  if (key === '1') {
    connection.write('Say: SUP?');
  }
  if (key === '2') {
    connection.write('Say: YOO!');
  }
};


let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserinput);

  return stdin;
}


module.exports = setupInput;