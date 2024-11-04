const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });

    const lines = data.trim().split('\n');

    let countCs = 0;
    let countSwe = 0;
    const csStudents = [];
    const sweStudents = [];

    for (let i = 1; i < lines.length; i += 1) {
      const [firstName, , , field] = lines[i].split(',');

      if (field === 'CS') {
        countCs += 1;
        csStudents.push(firstName);
      } else if (field === 'SWE') {
        countSwe += 1;
        sweStudents.push(firstName);
      }
    }

    console.log(`Number of students: ${countCs + countSwe}`);

    console.log(`Number of students in CS: ${countCs}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${countSwe}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    // console.error(`Error loading: ${error.message}`);
    throw new Error('Cannot load the database');
  }
}

// countStudents('path/to/file');

module.exports = countStudents;
