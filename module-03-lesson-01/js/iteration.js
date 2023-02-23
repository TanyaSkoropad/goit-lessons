'use strict';

/*
 * for...in, Object.keys, Object.values, Object.entries
 */

// for(let i=0; i<10; i++){}
//? Отримати суму зарплат всіх працівників

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

//TODO: Через for...in

// let total = 0;

// for (const key in salaries) {
//     console.log('key', key);
//     console.log('salaries[key]', salaries[key]);
//     total += salaries[key];
// }

// console.log(total);

//TODO: Через Object.keys(); [key, key]
// const salariesKeys = Object.keys(salaries);
// console.log('salariesKeys', salariesKeys);

// let total = 0;

// for (const key of salariesKeys) {
//   total += salaries[key];
// }

// for(let i =0; i<salariesKeys.length; i++) {
//     console.log(salariesKeys[i]);
//     console.log(salaries[salariesKeys[i]]);
//     total += salaries[salariesKeys[i]];
// }

// console.log(total);

//TODO: Через Object.values(); [values, value]
// const salariesValues = Object.values(salaries);
// console.log(salariesValues);

// let total = 0;

// for (const value of salariesValues) {
//   console.log('value', value);
//   total += value;
// }

// console.log(total);

// const obj = {
//   a: 1,
//   b: 2,
// };

// const salariesEntries = Object.entries(salaries); [[key, value], [key, value]]
// console.log(salariesEntries);