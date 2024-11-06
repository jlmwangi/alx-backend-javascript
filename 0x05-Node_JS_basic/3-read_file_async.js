const fs = require('node:fs/promises');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' })
      .then((data) => {
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

	const output = [
		`Number of students: ${countCs + countSwe}`,
		`Number of students in CS: ${countCs}. List: ${csStudents.join(', ')}`,
		`Number of students in SWE: ${countSwe}. List: ${sweStudents.join(', ')}`,
	].join('\n');

        resolve(output);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

// countStudents('path/to/file');

module.exports = countStudents;
