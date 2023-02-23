'use strict';
/*
 *  Метод find()
 */

// масив.find((element, index, array) => {
// Тіло колбек функції
// });

// const ownFind = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       return arr[i];
//     }
//   }
//   return undefined;
// };

/*
? Визначити перше непарне число
*/

// const numbers = [2, 5, 6, 8, 9, 10, 12, 3];

// const firstOddNumber = numbers.find(el => el % 2 !== 0);

// console.log(firstOddNumber);

/*
? Знайти машину по моделі
*/

const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford2', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
  { make: 'Mazda2', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
];

// const getCarByModel = (cars, model) => {
//   return cars.find((el, idx, arr) => arr.indexOf(el) === idx);
// };

// // console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));


// Метод findIndex(=== indexOf)

// const ownFindIndex = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       return i;
//     }
//   }

//   return -1;
// };

// const getCarByModel = (cars, model) => {
//   return cars.findIndex((el, idx, arr) => el.model === model);
// };

// console.log(getCarByModel(cars, 'CX-9'));