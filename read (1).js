[
  { "name": "Amit", "age": 20, "skills": ["HTML", "CSS"] },
  { "name": "Priya", "age": 21, "skills": ["JavaScript", "Node.js"] },
  { "name": "Rohan", "age": 22, "skills": ["React", "MongoDB"] }
]



const users = require('./user.json');

console.log(users);

const jsonString = JSON.stringify(users);
console.log(jsonString);