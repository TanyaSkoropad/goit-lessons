'use strict';
/*
 * forEach() як заміна циклів for і for...of для масивів
 */

// const numbers = [10, 20, 30, 40, 50, 60];
// const myArr = ['ooooo', 'l', 'e', 'h']
//              // array[i],  i   , array

// const myNull = null;
// function myFunc(){
//   let temp;
//   numbers.forEach((element, index, array) => {
//     if(index>3 && element === 50){
//       temp = element
//     }
//   });
//   console.log(temp)
// }

// myFunc();


// console.log(numbers);

// приклад зі звичайним for
// const ownForEach = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(array[i], i, array);
//   }
// };

// ownForEach(numbers);

// for + callback
// const ownForEach = function (array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i], i, array);
//   }
// };

// ownForEach(numbers, (el, idx, arr) => {
//   console.log(el);
//   console.log(idx);
//   console.log(arr);
// });

//   numbers.forEach((el, idx, arr) => {
//     console.log(el);
//     console.log(idx);
//     console.log(arr);
//   });

// const numbers = [1, 2, 3, 4, 5];

// const getTotal = function (numbersArr) {
//   let total = 0;

//   // Через for
//   // for (let i = 0; i < numbersArr.length; i += 1) {
//   //   total += numbersArr[i];
//   // }

//   // Через for...of
//   // for (const num of numbersArr) {
//   //   total += num;
//   // }

//   // Через forEach();
//   // numbersArr.forEach(el => {
//   //   total += el;
//   // });

//   return total;
// };

// console.log(getTotal(numbers));


// переписати використовуючи forEach
// function logItems(items) {
//   console.log(items);

//   // for (let i = 0; i < items.length; i += 1) {
//   //   console.log(`${i + 1} - ${items[i]}`);
//   // }

//   // items.forEach((item, index) => {
//   //   console.log(`${index + 1} - ${item}`);
//   // })
// }
// logItems(['Mango', 'Poly', 'Ajax']);



// переписати використовуючи forEach
// function calсulateAverage(...args) {
//   let total = 0;

//   // for (let i = 0; i < args.length; i++) {
//   //   total += args[i];
//   // }

//   args.forEach(item => {
//     total += item;
//   })

//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2


// декларативний і імперативний коди
// декларативний(HTML) - фокусуємось на результаті
// імперативний(Java) - фокусуємось на кроках до вирішення задачі(чим більше деталей тим краще)
// змішаний(JS)
function double (arr) { // імперативний код
    let results = [];
    for (let i = 0; i < arr.length; i++){
      results.push(arr[i] * 2);
    }
    return results;
}

function double1 (arr) { // декларативний
    return arr.map((item) => item * 2)
}

console.log(double([1,2,3,4,5]));
console.log(double1([1,2,3,4,5]));