'use strict';
/*
 * Функції колбеки, функції вищого порядку(функція, що приймає іншу функцію як параметр)
 */

// const foo1 = function (myFuncCallback) {
//   // let callback = foo2;
//   console.log('foo1');
//   console.log(myFuncCallback)
//   myFuncCallback();
// };

// const foo2 = function () {
//   console.log(`Hello!`);
//   console.log('foo2');
// //   return function foo1(){console.log('foo3')}
// };

// foo1(foo2);


// приклад

// const myObj = {
//     multi(el){
//         return el * 2;
//     },
//     divide(el) {
//         return el/2
//     }
// }

// const each = function (array, {multi: multi1, divide: divide1}) {
//   const newArr = [];
//   const newArr1 = [];

//   for (const el of array) {
//     newArr.push(multi1(el));
//     newArr1.push(divide1(el))
//   }

//   console.log(newArr1)
//   return newArr;
// };

// const multi = function (el) {
//     el+=10;
//   return el * 2;
// };

// const add = function (el) {
//   return el + 2;
// };

// const divide = function (el) {
//     return el / 2;
//   };

// const logElements = function (el) {
//   console.log(el);
// };

// const numbers = [1, 2, 3, 4, 5];

// console.log(each(numbers, myObj));
// console.log(each(numbers, add));
// console.log(each(numbers, divide));

// each(numbers, logElements);


// callback + стрілочна функція

// function illia(array, myCallback) {
//   const newArr = [];

//   for (const element of array) {
//     newArr.push(myCallback(element));
//   }

//   return newArr;
// }

// console.log(illia([64, 49, 36, 25, 16], arrowValue => arrowValue * 4));

// console.log(illia([64, 49, 36, 25, 16], arrowValue => arrowValue - 10));
// console.log(illia([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(illia([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(
//     illia([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

