'use strict';
/*
 *  Метод map()
 */

// Викликає функцію колбек для кожного елемента у масиві
// іммутабельний
// не виходить з масиву, якшо бачить return - просто повертає змінений елемент і йде далі

// масив.map((element, index, array) => {
//  Тіло колбек функції
// });

// own map
// const ownMap = function (arr, callback) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     newArr.push(callback(arr[i], i, arr));
//   }

//   return newArr;
// };

// const cars = ['Bmw', 'Audi', 'Mazda', '0'];

// const carsInUpperCase = ownMap(cars, car => car.toUpperCase());
// const carsInUpperCase1 = ownMap(cars, car => car);

// const carsInUpperCase1 = cars.map(item => item.toUpperCase());
// console.log(carsInUpperCase);
// console.log(carsInUpperCase);
// console.log(carsInUpperCase1);

//? Помножити усі числа на 2
// const numbers = [1, 2, 3, 4, 5, 1];

// const result = numbers.map((el, idx, arr) => {
//     if(el === 1) {
//         return el*3
//     }
//     return el * 2;
// });

// const result1 = numbers.map(item => item*2)

// console.log('numbers: ', numbers);
// console.log('result: ', result);


// Створити масив, який складається з довжин елементів нашого масиву
// const wordsArr = ['Welcome', 'to', '8', 'lesson'];

// const getElementsLength = function (arrOfStr) {
// //   const strLengthesArr = arrOfStr.map(el => el.length);
// //   return strLengthesArr;
//     return arrOfStr.map(el => el.length);
// };

// console.log(getElementsLength(wordsArr));


// Перевести значення з Цельсія у Фаренгейт (формула F = C * 1.8 + 32)
// const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
// const farenheits = celsius.map(el => el * 1.8 + 32);

// console.log('celsius: ', celsius);
// console.log('farenheits: ', farenheits);

// flatmap 
// let arr1 = [1, 2, 3, 4];

// console.log(arr1.map(x => [x * 2]));
// // [[2], [4], [6], [8]]

// console.log(arr1.flatMap(x => [x * 2]));
// // [2, 4, 6, 8]

// // вирівнюється лише один рівень
// console.log(arr1.flatMap(x => [[x * 2]]));
// [[2], [4], [6], [8]]


// let arr1 = ["it's Sunny in", "", "Odesa"];

// console.log(arr1.map(x => x.split(" ")));

// console.log(arr1.flatMap(x => x.split(" ")));

// const objArr = [
//     {name: 'Oleh', lastName: 'Oleh', children: [1, 2]},
//     {name: 'Ihor', lastName: 'Ihor', children: [1, 2, 3, 4, 5]},
// ]

// // console.log(objArr.map(user => {
// //     return user.children;
// // }))

// const children = objArr.map(user => [...user.children]);
// // console.log(children);

// objArr[0].children.push(3);
// console.log(objArr);
// console.log(children);