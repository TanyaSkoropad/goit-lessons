'use strict';
/*
 * Клас - шаблон по якому будуть створені об'єкти одного типу
 * Екземпляр(instance) - це об'єкт який створений по класу - Окремий конкретний представник класу
 * Інтерфейс - набір доступних методів і властивостей (!!! не можна створити об'єкт від інтерфейсу, лише визначає тип)
 */

//? Функція конструктор

// function User(params) {
//   const { firstName, lastName, age, hairColor, eyesColor, gender } = params;
//   // this = {};
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.legs = 2;
//   this.hands = 2;
//   this.eyes = 2;
//   this.hairColor = hairColor;
//   this.eyesColor = eyesColor;
//   this.gender = gender;
//   // return this;
// }

// User.prototype.changeHairColor = function (newColor) {
//   this.hairColor = newColor;
// };

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.dir(User);

// const user = new User({
//   firstName: 'Jeff',
//   lastName: 'Tucker',
//   age: 30,
//   hairColor: 'brown',
//   eyesColor: 'brown',
//   gender: 'male',
// });

// const user2 = new User({
//   firstName: 'Jean',
//   lastName: 'Smith',
//   age: 40,
//   hairColor: 'pink',
//   eyesColor: 'blue',
//   gender: 'female',
// });

// console.log(user);
// console.log(user.getFullName());
// console.log(user2);
