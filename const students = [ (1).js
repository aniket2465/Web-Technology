const students = [
  { name: 'Amit', marks: 80 },
  { name: 'Priya', marks: 90 },
  { name: 'Rohan', marks: 70 }
];

function getAllStudents() {
  console.log(students);
}

function getStudentByName(name) {
  const student = students.find(s => s.name === name);
  console.log(student);
}

function getAverageMarks() {
  let total = 0;

  students.forEach(s => {
    total += s.marks;
  });

  console.log('Average:', total / students.length);
}

getAllStudents();
getStudentByName('Priya');
getAverageMarks();