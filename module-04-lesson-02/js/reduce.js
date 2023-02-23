'use strict';
/*
 *  Метод reduce()
 */

// на першій ітерації previousValue=initialValue
// створює змінну замість нас - previousValue

// масив.reduce((previousValue, element, index, array) => {
// Тіло колбек функції
// }, initialValue);

// const ownReduce = function (arr, callback, initialValue = 0) {
//   for (let i = 0; i < arr.length; i += 1) {
//     initialValue = callback(initialValue, arr[i], i, arr);
//   }

//   return initialValue;
// };

/*
? Визначити суму елементів масиву
*/

// const numbers = [2, 2, 3, 4, 5];

// 1 ітерація
// prevValue = 0; el = 1; idx = 0;
// prevValue = 1;

// 2 ітерація
// prevValue = 1; el = 2; idx = 1;
// prevValue = 3;

// 3 ітерація
// prevValue = 3; el = 3; idx = 2;
// prevValue = 6;

// 4 ітерація
// prevValue = 6; el = 4; idx = 3;
// prevValue = 10;

// 5 ітерація
// prevValue = 10; el = 5; idx = 4;
// prevValue = 15;

// let totalSum = numbers.reduce((prevValue, el, idx, arr) => {
//     console.log('prevValue', prevValue);
//     console.log('el', el);
//   return prevValue + el;
// });

// console.log(totalSum);

/*
? ВИзначити кількість усіх автомобілів
*/

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// const getTotalAmount = cars => {
//   return cars.reduce((prevValue, el, idx, arr) => {
//     console.log('prevValue', prevValue);
//     console.log('el', el);
//     return prevValue + el.amount;
//   }, 0);
// };

// console.log(getTotalAmount(cars));