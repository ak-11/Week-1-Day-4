'use strict';
// Implement your own version of the built-in array map function.

// Yours will take in two arguments. The first will be an array to map and the second will be a callback function.
// The function will return a new array based on the results of the callback function.

// map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });
// [6, 7, 2, 5, 3]

const cities = ["Toronto", "Tokyo", "Bangkok", "New York", "Los Angeles", "Seoul"]



function ownMap (arr, callback) {
  const nameLength = [];
  cities.forEach(function(elm) {
  nameLength.push(callback(elm));
  // nameLength.push(elm.length);
  })
  return nameLength;
};

const newArray = ownMap(cities, function(elm)  {
return elm.length;
});

console.log(newArray);

// const cityNames = function (arr, elm) {

//   arr.map(function (elm) {

//     cities.forEach(function(elm) {
//     nameLength.push(elm.length);
//   })
// });

// console.log(nameLength);




