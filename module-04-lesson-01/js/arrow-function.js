'use strict';

/*
 * Стрілочна функція, явне і неявне повернення, arguments, повернення об'єкта
 */

// const myFunct = function(){}
// const myArrowFunc = () => {}

// const sum = (a, b) => { //arrow function
//     return a + b
// }; // явне повернення

// function sum(a,b){ // function declaration
//     a+=10;
//     return a + b
// }

// const sum = function(a,b) { // function expression
//     a+=10;
//     return a + b
// }


// const sum1 = (a, b) => a + b; // неявне повернення

// console.log(sum(10, 20));
// console.log(sum1(10, 20));

//? Два і більше параметрів

// const calc = (a, b) => {
//   console.log(a + b);
// };

// calc(10, 20);

//? Один параметр

// const greet = username => {
//   console.log(`Hello ${username}!`);
// };

// greet('Jeremiah Jennings');

//? Без параметрів

// const greet = () => {
//   console.log('Hello!11');
// };

// greet();

//? arguments - не має псевдомасива arguments, зате можна користуватись rest оператором

// const calc = (...args) => {
//   let total = 0;
// //   console.log(arguments);
//   console.log(args);

//   for (const number of args) {
//     total += number;
//   }

//   console.log(total);
// };

// function calc(){
//     console.log(arguments)
// }

// calc(1, 2, 3, 4, 5);

//? повернення об'єкта

// 1 варіант
// const createObj = obj => {
//   return {
//     id: Date.now(),
//     ...obj,
//   };
// };

// 2 варіант
// const createObj = obj => ({ id: Date.now(), ...obj, children: [1,2] });

// console.log(createObj({ firstName: 'Esther', lastName: 'Reeves' }));

