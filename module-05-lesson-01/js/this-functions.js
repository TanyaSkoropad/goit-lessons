// 'use strict';

// Метод call і apply
// Обидва прив'язують об'єкт до this
// відразу викликають функцію
// Call передає аргументи через кому по черзі
// apply передає аргументи як масив, АЛЕ не треба звертатись до них всередині функції як до елементів масиву,
// просто через назву параметру(того, як він називається всередині ())


// Викликати функцію showFullName для контексту об'єкта user

// const showFullName = function (message, num) {
//   console.log(`${message} ${this.firstName} ${this.lastName}, ${num}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Hello', 10);
// console.log(user);

// user.showFullName = showFullName;
// user.showFullName('Hello', 10);
// console.log(user);
// showFullName.apply(user, ['Hello', 10]);


// приклад
// const friends = [
//     {name: 'Oleh', lastName: 'Oleh'},
//     {name: 'Ihor', lastName: 'Ihor'},
// ]

// const inviteForBirthday = function(day, time, dresscode) {
//     console.log(this); // === friend
//     console.log(dresscode)
//     console.log(`Welcome to my birthday party ${this.name} ${this.lastName} on ${day} at ${time}!`)
// }

// for(let friend of friends) {
//     // inviteForBirthday.call(friend, 'Monday', '6pm');
//     inviteForBirthday.apply(friend, ['Monday', '6pm', false]);
// }


// bind
// bind повертає копію функції
//аргументи можна передавати відразу або згодом при виклиці цієї копії
// const showFullName = function (num) {
//   console.log(`${this.firstName} ${this.lastName} ${num}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const showUserName = showFullName.bind(user,5);
// showUserName();
// const showUserName = showFullName.bind(user);
// showUserName(5);

// Метод об'єкту в ролі колбеку

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

// const someFunction = function (callback) {
//   // let callback = user.showName;

//   callback();
// };

// const showUserName = user.showName;

// someFunction(showUserName.bind(user));

// два bind підряд
// const f = function () {
//   console.log(this.name);
// };

// const user = {
//   name: 'Oleh',
// };

// const anotherUser = {
//   name: 'Ihor',
// };

// const copyFunc = f.bind(user);

// const copyFunc1 = copyFunc.bind(anotherUser)

// copyFunc();
// copyFunc1();

// const friends = [
//     {name: 'Oleh', lastName: 'Oleh'},
//     {name: 'Ihor', lastName: 'Ihor'},
// ]

// const inviteForBirthday = function(day, time, dresscode) {
//     console.log(this); // === friend
//     console.log(dresscode)
//     console.log(`Welcome to my birthday party ${this.name} ${this.lastName} on ${day} at ${time}!`)
// }

// let friendToInvite;
// for(let friend of friends) {
//     // inviteForBirthday.call(friend, 'Monday', '6pm');
//     friendToInvite = inviteForBirthday.bind(friend);
//     friendToInvite();
// }


