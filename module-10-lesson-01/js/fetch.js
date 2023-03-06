'use strict';
// https://jsonplaceholder.typicode.com/

// запит fetch
// response.json()
// throw (треба робити у першому then)
// new Error()

// fetch('https://jsonplaceholder.typicode.com/users?').then(result => {
//     console.log(result);
//     if(!result.ok) {
//         throw new Error('bad request');
//     }
//     return result.json();
// }).then(users => {
//     console.log(users)
//     const filteredUsers = users.map(user => ({name: user.name, username: user.username}))
//     console.log(filteredUsers)
// })
// .catch(error => {
//     console.dir(error);
// });

//? TASK 01
// Створіть функцію getUsers(names), яка отримує на вхід масив логінів користувачів GitHub, робить запит на GitHub за інформацією про них та повертає масив об'єктів користувачів.
// Інформація про користувача GitHub з логіном USERNAME доступна за посиланням: https://api.github.com/users/USERNAME.

// Важливі деталі:

// На кожного користувача повинен бути один запит fetch.
// Запити не повині чекати завершеня один одного. Потрібно, щоб дані поверталися як можна швидше.
// Якщо якийсь запит завершуєтся помилкою або вияволось, що даних про користувачева немає, то функція повина повертати null в масиві результатів .

// const BASE_URL = 'https://api.github.com';
// const userLogins = ['luxplanjay', 'TanyaSkoropad', 'salikovskyi'];

// const getUsers = names => {
//     const promises = names.map(name => {
//         return fetch(`${BASE_URL}/users/${name}`).then(response => {
//             console.log(response)
//             if(!response.ok) {
//                 throw new Error('not found');
//             }
//             return response.json();
//         })
//     })
//     return Promise.all(promises);
// }

// getUsers(userLogins).then(resultData => {
//     console.log(resultData);
// }).catch(error => {
//     console.log('my error', error);
// })