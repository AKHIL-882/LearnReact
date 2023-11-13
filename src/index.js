// var numbers = [3, 56, 2, 48, 5];

// // function sendNumbers(x) {
// //   return 2 * x;
// // }

// // const numbersdata = numbers.map(sendNumbers);
// // //console.log(numbersdata);

// // var newNumbers = [];

// // // function double(x) {
// // //   newNumbers.push(x * 2);
// // // }

// // numbers.forEach(function (x) {
// //   newNumbers.push(x * 2);
// // });

// // console.log(newNumbers);
// // const data = numbers.filter(function (num) {
// //   return num < 10;
// // });

// // console.log(data);

// var newNumber = 0;

// // numbers.forEach( )

// //Map -Create a new array by doing something with each item in an array.

// //Filter - Create a new array by keeping the items that return true.

// //Reduce - Accumulate a value by doing something to each item in an array.

// //Find - find the first item that matches from an array.

// //FindIndex - find the index of the first item that matches.

import emojipedia from "./emojipedia";

const data = emojipedia.map(function (text) {
  return text.meaning.substring(1, 100);
});

console.log(data);
