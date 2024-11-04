process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.trim()
  console.log(`Your name is: ${name}`);
  process.stdin.pause();
});

//process.on('SIGINT', () => {
  //console.log('This important software is now closing');
  //process.exit();
//});

process.on('exit', () => {
  console.log('This important software is now closing');
});
