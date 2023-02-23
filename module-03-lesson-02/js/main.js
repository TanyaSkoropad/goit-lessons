'use strict';


// Операція spread як заміна concat або slice


//*  Копія масиву
// const numbers = [1, 2, 3, 4, 5];

// const numbers2 = [...numbers] // numbers.slice();


// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

// numbers[0] = 10;

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

// Об'єднання масивів
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [10, 9, 8, 7];
// const allNumbers = [...numbers2, ...numbers]; // numbers.concat(numbers2)

// console.log(allNumbers);

// spread для передачі аргументів у функцію
// const numbers = [1, 2, 3, 4, 5];

// console.log(Math.max(...numbers));

// Math.max(1,2,3,4,5);

// копії об'єктів deep copy vs shallow copy


// spread для об'єктів - shallow copy

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   siblings: {
//     brother: 'Max',
//     sister: 'Tania'
//   }
// };

// const user2 = { ...user };

// console.log('user: ', user);
// console.log('user2: ', user2);

// user2.age = 40;
// user.siblings.brother='Oleh';

// console.log('user: ', user);
// console.log('user2: ', user2);


// lodash - deep copy
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
//   siblings: {
//     brother: 'Max',
//     sister: 'Tania',
//     smallers: {
//         smallBrother: 'Bob',
//     }
//   }
// };

// const user2 = _.cloneDeep(user);

// console.log('user: ', user);
// console.log('user2: ', user2);

// // const userSiblings = [...user2.someArr];
// user.siblings.brother='Oleh';

// console.log('user: ', user);
// console.log('user2: ', user2);

// Object.assign(target, ...sources) // повертає модифікований target, shallow copy
// const first = { name1: 'Bob' };
// const last = { lastName: 'Smith' };
// const name1 = { name1: 'Oleh'};
// const person = Object.assign({...user}, {age1: 40}); 

// person.siblings = {...person.siblings};
// person.siblings.brother = 'Oleh';
// console.log(user);
// console.log(person);
// { name: "Bob", lastName: "Smith" }

//structuredClone - deep copy
// const mushrooms1 = {
//     types: ["мухомор", "шампіньйон"],
// };
  
// const mushrooms2 = structuredClone(mushrooms1);

// console.log(mushrooms2.types);
// console.log(mushrooms1.types);
  
// mushrooms2.types.push("лисичка");
// mushrooms1.types.pop();
  
// console.log(mushrooms2.types);
// console.log(mushrooms1.types);

// shallow copy = operator spread [...array], {...object}, Object.assign(target, ...sources);
// deep copy = lodash _.cloneDeep(object), structuredClone(object);


// Операція rest
// Функція, що сумує усі передані аргументи
// const sum = function (...args) {
//   console.log('arguments', arguments);
//   console.log('tania', args);
//   let total = 0;
//   for (const number of args) {
//     total += number;
//   }

//   return total;
// };

// const numbers = [1, 2, 3, 4];

// console.log(sum(...numbers));
// Math.max(1,2,3,4,5)
// console.log(sum(10, 20, 30)); // [10, 20, 30]
// console.log(sum(10, 20, 30, 40));// [10, 20, 30, 40]
// console.log(sum(10, 20, 30, 40, 50)); // [10, 20, 30, 40, 50]
// console.log(sum()); // []

// const user = {
//     name: 'Oleh',
//     age: 40,
// }

// const sum = function (user, ...colors) {

//     user.favouriteColors = colors;
//     return {...user};
// };

// const numbers = [1, 2, 3, 4];

// // console.log(sum(...numbers));
// console.log(sum(user, 'red', 'blue', 'white'));
// console.log(sum(user, 'black'));
