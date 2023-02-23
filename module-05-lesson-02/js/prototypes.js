'use strict';

// ооп

/*
 * Цепочки прототипів - наслідування
 * Object.create().
 * obj.hasOwnProperty()
 */

// console.log(Object.prototype); // .prototype викликаємо на класах
// Array.prototype.push()
// const hello = {}
// console.log(hello.valueOf())

// console.dir(Number); // показує властивості обєкту
// __proto__ посилається на [[Prototype]] і дозволяє його змінювати
// prototype - це спеціальна властивість, яка містить посилання на об’єкт і методи, які ми можемо викликати на цьому об'єкті
// [[Prototype]] — це прихована приватна властивість, яку мають усі об’єкти в Javascript, вона містить посилання на прототип Object.

// const o = {
//   a: 1,
//   b: 2,
//   __proto__: { // розширює цепочку прототипів
//     b: 3,
//     c: 4,
//   },
// };
// console.log(o.prototype);

// Вигляд цепочки прототипів
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null
// console.dir(o)

// console.log(o.a); // Чи є у об'єкті властивість 'a'? Є, і значення в неї 1

// console.log(o.__proto__.b); // Чи є у об'єкті властивість 'b'? Є, і значення в неї 2. 
// У прототипі також є значення b але js до нього не дійде(Property shadowing)
// Тобто - Пошук закінчиться при знаходженні першого збігу

// console.log(o.c); // Чи є у об'єкті властивість 'c'? Ні, потрібно перевірити прототип
// Чи є у прототипу об'єкту значення 'с'? Є, і значення в нього 4

// console.log(o.__proto__.__proto__.__proto__.valueOf()); // undefined
// Чи є у об'єкті властивість 'c'? Ні, потрібно перевірити прототип
// Чи є у прототипу об'єкту значення 'с'? Ні, перевірити його(прототипу) прототип
// o.[[Prototype]].[[Prototype]] це Object.prototype і по замовчуваню
// там немає властивості 'd', тому потрібно перевірити і його прототип
// o.[[Prototype]].[[Prototype]].[[Prototype]] є null, тому зупиняємо пошук

// const o1 = {
//     a: 1,
//     b: 2,
//     __proto__: {
//       b: 3,
//       c: 4,
//       __proto__: {
//         d: 5,
//       },
//     },
//   };

// const o2 = o1;
// console.dir(o2)
  
  // { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null
  
//   console.dir(o1);
//   console.log(o1.d); // 5

// Object.create - створює новий об'єкт, використовуючи існуючий об'єкт(той шо є аргументом) як прототип новоствореного об'єкта.

const user = {
  firstName: 'Isaac',
  age: 40,
};

const user2 = Object.create(user);
console.log(user);
console.log(user2);

// user.age = 30;

// console.log(user);
// console.log(user2);

// user2.firstName = 'Louis';
// user2.lastName = 'Miller';
// console.log(user);
// console.log(user2);
// console.log(user2.age);

// const user3 = user2;

// const user3 = Object.create({...user2});
// user3.__proto__.children = 'Jordan';

// console.log('user: ', user);
// console.log('user2: ', user2);
// console.log('user3: ', user3);
// console.log('user3: ', user3.firstName);

// Перевірка властивостей обєкту НЕ заходячи в прототип obj.hasOwnProperty()
// console.log(user3.hasOwnProperty('firstName'));
// console.log(user3.hasOwnProperty('lastName'));
