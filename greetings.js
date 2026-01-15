const students = [
  { id: 1, name: "Alice", age: 22, courses: ["HTML", "CSS"], active: true, grade: 85 },
  { id: 2, name: "Bob", age: 28, courses: ["JS", "React"], active: false, grade: 92 },
  { id: 3, name: "Charlie", age: 24, courses: ["HTML", "JS"], active: true, grade: 78 },
  { id: 4, name: "Diana", age: 30, courses: ["Node", "Supabase"], active: true, grade: 95 },
  { id: 5, name: "Ethan", age: 19, courses: ["CSS", "Bootstrap"], active: false, grade: 60 },
  { id: 6, name: "Fiona", age: 26, courses: ["JS", "Git"], active: true, grade: 88 }
];
let greetings = students.forEach(student => {
    console.log(`Hello, ${student.name} welcome to review week!`);
});
