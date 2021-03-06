'use strict';
//Basic Sorting
const numbers = [1, 2, 5, 9, 10];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);


//Adavanced Sorting

// If students have the same name, then we prioritize the older student first.
//Write a sorting function (sometimes called a custom comparator), that sorts
//the above array first by the name ascending alphabetically, and in cases where the names are equal sort by descending age.

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b) {
  if (a.name === b.name && a.age < b.age) {
    return 1;
  } else if (a.name > b.name)  {
    return 1;
  } else if (a.name < b.name ) {
    return -1
  } else {
    return 0;
  }
});

console.log(students);


// students.sort(function(a, b)  {
//   if (a.age > b.age)  {
//     return 1;
//   } else if (a.age < b.age) {
//     return -1;
//   } else  {
//     return 0;
//   }
// })


