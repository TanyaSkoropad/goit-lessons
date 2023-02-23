'use strict';

/*
 *  Контекст виклику this
 */


// про що саме(про кого) йде мова всередині функції
// Грубо кажучи, це — це посилання на якийсь об'єкт, до властивостей якого можна отримати доступ всередині виклику функції.
// В глобальній області видимості this вказує на глобальний об'єкт ( window )
// this існує всередині функцій.
// На контекст не впливає то, де функція була створена.
// На контекст впливає то, де функція викликається(тому і контекст ВИКЛИКУ)
// this містить у собі посилання на об'єкт, у контексті якого функція викликається, тобто
// об'єкт на якому викликаємо функцію === контекст

// const user = {
//   name: 'Luis',
//   age: 30,
//   children: [1,2],
//   showThis() {
//     // this = user;
//     console.log('this ----> ', this);
//   },

//   showName() {
//     // this = user;
//     const myAge = 'age';
//     console.log(this[myAge]);
//   },
// };

// user.showThis(); // user = this, бо user викликає функцію
// user.showName();
// const anotherUser = {
//   name: 'Barry',
//   age: 20,

//   showThis() {
//     // this = user;
//     console.log('this ----> ', this);
//   },

//   showName() {
//     // this = user;
//     console.log(this.name);
//   },
// };

// anotherUser.showThis();
// anotherUser.showName();

// this вказує на найближчого предка.

// const person = {
//     first: 'Andrii',
//     last: 'Kovalchuk',
//     full: function() {
//       console.log(`${this.first} ${this.last}`);
//     },
//     personTwo: {
//       first: 'Ivan',
//       last: 'Yarema',
//       full: function() {
//         console.log(`${this.first} ${this.last}`);
//       }
//     }
//   };

// person.full();
// person.personTwo.full();


// приклад важливості того, де саме викликається this
// Присвоєння функції як методу об'єкту
// function showThis () {
//   console.log(`this ----> `, this);
// };
// window.showThis(); // window.showThis() -> посилається на window, тобто this=window

// function showThisSize () {
//   console.log(this.size);
// };
// showThisName(); // window.showThisName() -> посилається на window, тобто this=window

// const user = {
//   name: 'Tania',
//   age: 30,
//   size: 'small'
// };
// const mediumUser = {
//     name: 'Tania',
//     age: 30,
//     size: 'medium'
//   };

// user.showThisSize = showThisSize; // присвоюємо без ()
// mediumUser.showThisSize = showThisSize;

// user.showThisSize();
// mediumUser.showThisSize();

// user.showThis() -> посилається на user, тобто this=user
// user.showThisName(); // user.showThis() -> посилається на user, тобто this=user


// ПОведінка this у звичайних функціях при строгому і нестрогому режимах

//? Function expression
// const fn = function () {
//   console.log(`this ---->`, this);
// };

// fn();

// //? Function declaration
// function fnD() {
//   console.log(`this ---->`, this);
// }

// fnD();

//? Arrow function
// const fnA = () => {
//   console.log(`this ---->`, this);
// };

// fnA();


// This в стрілочних функціях. Вони не мають свого this, не створюють власний контекст виклику, а зсилаються на батьківський this.
// Тут важливе МІСЦЕ де вони створені, а не то, як вони викликаються
// Їм не потрібно щоб їх викликав об'єкт і тим самим визначав контекст. ВОни завжди зсилатимуться на батьківський this;

// const user = {
//     name: 'Luis',
//     age: 30,
  
//     changeAge: newAge => {
//       console.log(`this ---->`, this);
//       console.log(this.age);
  
//       this.age = newAge;
//     },
//   };
  
//   user.changeAge(40);
//   console.log(user);

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Arrows remember the context during declaration,
//       // from the parent scope
//       console.log("this in foo: ", this); // не потребує контекст
//     };

//     function foo1(){
//         console.log("this in foo1 function declaration: ", this); // потребує контекст
//     }

//     foo();
//     foo1();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();

// Виклик методу без контексту
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const showUserThis = user.showThis;
// const showUserName = user.showName;

// showUserThis(); // undefined або window, бо ми викликаємо функцію без уточнення її контексту
// showUserName(); // нічого або помилка, бо ми викликаємо функцію без уточнення її контексту

// This в callback функціях

// const user = {
//   name: 'Luis',
//   age: 30,
//   showThis() {
//     console.log(`this ---->`, this);
//   },
//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback, obj) {
//   // let callback = user.showThis;
//   // callback === this;
// };

// const smallGnom = {
//     size: 'small',
//     age: 1,
//     getSize(){
//         console.log(this);
//     }
// }

// const mediumGnom = {
//     size: 'medium'
// }

// smallGnom.getSize();
// mediumGnom.getSize = smallGnom.getSize;
// console.log(mediumGnom)
// mediumGnom.mediumAge = smallGnom.age;

// mediumGnom.tania();
// console.log(mediumGnom);

// smallGnom.getSize = function(){
//     console.log('small');
//     console.log(this);
// }

// smallGnom.getSize();
// mediumGnom.getSize();

// // приклад
// let user = {
//   name: 'Джон',

//   go() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// const goFn = user.go;

// goFn();


// приклад
// const makeUser = function () {
//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();

// console.log(user);
// console.log(user.ref);
