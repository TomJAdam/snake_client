const connect = require('./client')

console.log('Connecting...');
connect();

const handleUserinput = (key) => {
  if (key === '\u0003') {
    console.log('bye');
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserinput);

  return stdin;
}

setupInput();

