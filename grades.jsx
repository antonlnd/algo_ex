/*jshint esversion: 6 */

let studentGrades = {},
  names = ['Andy', 'Misha', 'Tony', 'Vor', 'Ton', 'Ton', 'Ton', 'Tony'],
  grades = [];

names.map(name => {
  !studentGrades[name] ? (studentGrades[name] = []) : null;
  for (i = 0; i < 400; i++) {
    studentGrades[name].push(Math.floor(50 + Math.random() * 50));
  }
  console.log(studentGrades);
});

// addGrade

function addGrade(student, grade) {
  return studentGrades[student].push(grade);
}
// showAvg
function showAvg(student) {
  if (studentGrades[student])
    return (
      studentGrades[student].reduce((acc, val) => val + acc) /
      studentGrades[student].length
    );
}
console.log(showAvg('Misha'))
