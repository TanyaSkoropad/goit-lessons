// every loop
// повертає або true(якшо всі елементи підпадають під умову) і false, якшо не всі елементи підпадають

// const ownEvery = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     const result = callback(arr[i], i, arr);
//     if (result) {
//       continue;
//     }

//     return false;
//   }

//   return true;
// };

// const isBelowForty = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 41, 39, 29, 10, 13];
// console.log(ownEvery(array1, isBelowForty))

// console.log(array1.every(currentValue => {
//     console.log('currentValue', currentValue)
//     return currentValue < 40;
// }));

// some loop
// const ownSome = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     const result = callback(arr[i], i, arr);

//     if (result) {
//       return true;
//     }
//   }

//   return false;
// };

// const isUpperForty = (currentValue) => currentValue > 40;

// const array1 = [1, 30, 41, 39, 29, 10, 13];

// console.log(array1.some((currentValue) => { 
//     console.log(currentValue);
//     return currentValue > 40
// }));