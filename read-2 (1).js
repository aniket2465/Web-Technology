
const fs = require('fs');

fs.readFile('students.json', 'utf8', (err, data) => {
  if (err) {
    console.log('Error:', err);
    return;
  }

  const students = JSON.parse(data);
  console.log('Total Students:', students.length);
});