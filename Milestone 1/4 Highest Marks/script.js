const marks = [78, 92, 85, 88, 95];
let highestMarks = marks[0];

for (let i = 1; i < marks.length; i++) {
  highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
}

console.log('Highest Marks:', highestMarks);
