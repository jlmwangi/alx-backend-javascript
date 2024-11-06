const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const file = process.argv[2];
  res.set('Content-Type', 'text/plain');
  countStudents(file)
    .then((output) => {
      res.send(`This is the list of our students \n${output}`);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

app.listen(1245);

module.exports = app;
