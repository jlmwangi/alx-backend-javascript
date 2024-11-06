const http = require('http');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const countStudents = require('./3-read_file_async');
    try {
      // res.write('This is the list of our students\n');
      const studentInfo = await countStudents(process.argv[2]);
      res.write(studentInfo);
    } catch (error) {
      res.write('Error');
    }
    res.end();
  } else {
    res.end();
  }
});

app.listen(1245);

module.exports = app;
