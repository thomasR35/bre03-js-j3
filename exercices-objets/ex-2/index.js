let student = {
  name: "Steven",
  age: 19,
  grades: [12, 14, 10],
  average: 0,
};

for (let i = 0; i < student.grades.length; i++) {
  student.average += student.grades[i];
}

student.average /= student.grades.length;

console.log(student);
