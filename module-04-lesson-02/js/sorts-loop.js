'use strict';
/*
 *  Метод sort()
 */
// !! змінює початковий масив, тому використовуємо spread
// якшо є великі літери - вони йдуть на початок, малі - в кінець
// незвично працює з масивом, який має елементи зі значенням більше 10
// якщо є undefined - він йде у кінець
// конвертує елементи у стрічку, потім бере їх значення по UTF-16 кодах і порівнює.

// const numbers = [undefined, 2, 1, undefined, 4, 0];

// const sortedNumbers = numbers.sort();

// console.log('numbers:', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

//? Сортування чисел і стрічок по замовчуванню(зростання)
// const numbers = [30, 94, 60, 97, 5, 7];
// const sortedNumbers = [...numbers].sort();


// console.log(`source arr: `, numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const words = ['Gavin',undefined, 'Edgar',null, undefined, 'Edith','adele', 'Maurice', 'belle', 'Rosa', 'Roger'];
// const sortedWords = [...words].sort();

// console.log(`source arr: `, words);
// console.log('sortedWords: ', sortedWords);

//? Сортування чисел і стрічок по нашій умові

// const numbers = [30, 94, 60, 97, 5];
// const sortedNumbers = [...numbers].sort((a, b) => {
//     console.log('a', a);
//     console.log('b', b)
//   return b - a;
// });

// console.log(`source arr: `, numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const words = ['Gavin', 'Edgar', 'Edith', 'Maurice', 'Rosa', 'Roger', 'alex', 'Abba'];
// const sortedWords = [...words].sort((a, b) => {
//   return a.localeCompare(b);
// });

// console.log(`source arr: `, words);
// console.log('sortedWords: ', sortedWords);

/*
? Відсортувати автомобілі по їх кількості(amount)
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

// // навіть якщо сортуємо по зростанню, але це об'Єкти-  
// // всерівно потрібно вказувати нашу функцію колбек для sort, 
// // оскільки там вже ми вкажемо по якому саме ключу хочемо сортувати
// const sortByAscendingAmount = cars => {
//   return [...cars].sort((a, b) => b.price - a.price );
// };

// console.table(sortByAscendingAmount(cars));
