'use strict';

// Instead of a random die, we want to create a cheat die that would let us predict the next number.
// Create a function called loadedDie() that when called, seems to generate random numbers between 1 and 6, but actually just pulls them in a row from a hardcoded list.

const loadedDie = (function () {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let i = -1;

  return function ()  {
    i ++;
    return list[i];
  }

})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6

// var loadedDie = (function () {
//   var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
//   /* your code here */
// })();

// console.log(loadedDie());  // 5
// console.log(loadedDie());  // 4
// console.log(loadedDie());  // 6

  // var id = 0;

  // return function () {
  //   id += 1;
  //   return id;