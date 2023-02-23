'use strict';
/*
 * Брудні і чисті функції
 */

//! Dirty function 
// використовує або змінює глобальні дані як частину себе, а не просто як аргумент
// при тих самих аргументах повертає різні значення
// не повертає копію, а змінює масив по силці(мутабельність)

// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (...args) => {
//   numbers.push(...args);
// };
// pushNumbers(9, 6, 8);
// console.log('numbers: ', numbers);

// pushNumbers(9, 6, 8);
// console.log('numbers: ', numbers);

//? Clear function
// використовує лише власні змінні або параметри
// при тих самих аргументах повертає однакові значення
// повертає незалежне значення, не змінює масив по силці(іммутабельність)

// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (numbersArr, ...args) => {
//   const copyNumbersArr = [...numbersArr];

//   copyNumbersArr.push(...args);

//   return copyNumbersArr;
// };

// console.log('numbers: ', numbers);
// console.log('copy of numbers: ', pushNumbers(numbers, 9, 6, 8));
// console.log('second copy of numbers: ', pushNumbers(numbers, 9, 6, 8));

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = function (arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
// };

// doubleMulti(numbers);
// console.log(numbers);
// doubleMulti(numbers);
// console.log(numbers);
// doubleMulti(numbers);
// console.log(numbers);

//? Clear function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = function (arr) {
//   const numbersCopyArr = [...arr];

//   for (let i = 0; i < numbersCopyArr.length; i += 1) {
//     numbersCopyArr[i] *= 2;
//   }

//   return numbersCopyArr;
// };

// const result = doubleMulti(numbers);

// console.log('numbers: ', numbers);
// console.log('copy of numbers: ', doubleMulti(numbers));
// console.log('second copy of numbers: ', doubleMulti(numbers));