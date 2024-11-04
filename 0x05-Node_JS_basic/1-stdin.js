const readline = require('readline');

const readname = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readname.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  // readname.close();
  // process.exit();
});

process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
