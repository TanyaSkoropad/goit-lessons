'use strict';
/*
 * Класи: створення, конструктор(можемо проголошувати, або не проголошувати), методи
 * Приватні поля і методи - можуть використовуватись всюди всередині класу, але не за його межами. 
// Оголошуються поза межами конструктора
 * Статичні поля і методи - їх треба викликати без створення об'єкту - відповідно менше пам'яті. 
// Властивості що не додаються в екземпляри (інстанси) при створенні
 * Гетери і сетери - доступ до приватних полів(інкапсуляція) !!! мутабельні
 */

// class User { // завжди позначається з великої
//   #userEmail = 'geff@ua';

//   static test = 5;

//   static compareEmails(user1, user2) {
//     user1.email === user2.email;
//   }

//   constructor(firstName, lastName, email) {
//     // this = {}
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.#userEmail = email;
//     // return this;
//   }

//   constructor(params) {
//     // this = {}
//     const { firstName, lastName, age, hairColor, eyesColor, gender, email } = params;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.legs = 2;
//     this.hands = 2;
//     this.eyes = 2;
//     this.hairColor = hairColor;
//     this.eyesColor = eyesColor;
//     this.gender = gender;
//     this.#userEmail = email;
//     // retrun this;
//   }


//   changeHairColor(newColor) {
//     this.hairColor = newColor;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   get email() {
//     return this.#userEmail;
//   }

//   set email(newEmail) {
//     this.#userEmail = newEmail;
//   }
// }

// class Gnom {
//     static boots = true;
//     constructor(hat, size){
//         this.hatColor = hat;
//         this.gnomSize = size
//     }

//     changeSize(size){
//         this.gnomSize = size;
//     }
// }

// const user = new User('Jeff', 'bezis', 'hgvg@.com'); 
// console.log(user);

// const user2 = new User('Adele', 'adele');
// console.log(user);
// console.log(user2);
// user2.email='adele@.com';
// console.log(user);
// console.log(user2);

// User.#useremail='anna@.com';
// console.dir(User);

// const smallGnom = new Gnom();
// console.log(Gnom.boots);
// Gnom.boots = false;
// console.dir(Gnom);

// smallGnom.changeSize(5);

// const user = new User({ // використовуємо слово new
//   firstName: 'Jeff',
//   lastName: 'Tucker',
//   age: 30,
//   hairColor: 'brown',
//   eyesColor: 'brown',
//   gender: 'male',
//   email: 'kuhhu@od.ye'
// });

// console.dir(User);