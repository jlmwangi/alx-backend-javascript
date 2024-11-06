const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let resMessage = 'This is the list of our students\n';
  try {
    const studentInfo = await countStudents(process.argv[2]);
    resMessage += studentInfo;
  } catch (error) {
    resMessage += 'Error: Cannot load students data';
  }
  res.send(resMessage);
});

app.listen(1245);

module.exports = app;
