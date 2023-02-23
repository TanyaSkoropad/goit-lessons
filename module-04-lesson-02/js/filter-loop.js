'use strict';
/*
 *  Метод filter()
 */

// Викликає функцію колбек для кожного елемента у масиві
// іммутабельний
// перевіряє умову - якшо true, то пушає поточний елемент у новий масив, якщо false - не пушає
// масив.filter((element, index, array) => {
// Тіло колбек функції
// });

// own filter
const ownFilter = function (arr, callback) {
  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = ownFilter(values, value => value >= 0);
// console.log(positiveValues);
// console.log(values.filter(item => item>=0));

// const numbers = [51, -3, 27, 21, -68, 42, -37];
// const filteredNumbers = numbers.filter(el => el >= 0);

// console.log(filteredNumbers);


// Створити масив лише з парних чисел
// const numbers = [1, 2, 3, 4, 5, 6];
// const filteredNumbers = numbers.filter(el => el % 2 === 0);
// // if(el % 2 === 0){
// //     arr.push(el)
// // }

// console.log(filteredNumbers);

// Знайти героїв, які відносяться до певної франшизи
// const heroes = [
//   { name: 'Batman', franchise: 'DC' },
//   { name: 'Ironman', franchise: 'Marvel' },
//   { name: 'Thor', franchise: 'Marvel' },
//   { name: 'Superman', franchise: 'DC' },
// ];

// const filteredByFranchise = (heroesArr, franchise) => {
//   return heroesArr.filter(el => {
//     console.log('el', el);
//     console.log(el.franchise)
//     return el.franchise === franchise
// });
// };

// console.log(filteredByFranchise(heroes, 'Marvel'));

// ? Залишити лише унікальні числа
// const numbers = [1, 2, 3, 3, 2, 1, 4, 5, 6, 4];

// const filteredNumbers = numbers.filter((el, idx, arr) => {
//   return arr.indexOf(el) === idx;
// });

// console.log(filteredNumbers);