const students = [
    {id: 21, name:"omoar sunny"},
    {id: 31, name:"maannaaa"},
    {id: 41, name:"moyouri"},
    {id: 51, name:"deepjol"}
];

// const studentsName = [];
// for(let i = 0; i<students.length; i++){
//     const element = students[i];
//     const result = element.name;
//     studentsName.push(result);
// }
// console.log(studentsName);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);
