'use strict';

// створення об'єкту
// const myObj = {
//  ключ: значення 
// }

// Об'єкт фільм, містить в собі інформацію: назва, опис, рейтинг, актори, вікове обмеження
const film = {
  title: 'Matrix1',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nemo iusto! Et doloribus praesentium laboriosam dolorem veritatis, magnam atque amet!',
  rating: 4,
  actors: ['Aiden', 'Mason', 'Jimmy'],
  isAdult: true,
  oscarReward: null,
};

// console.log(film);

// Доступ доступ до ключів(obj.key, obj[key]).

// const objectkey = 'title';
// console.log(film.title); //ctrl+space показує можливі ключі
// console.log(film[objectkey]); // якщо треба знайти значення ключа по стрічці або змінній

// перезапис значень
// film['preview'] = './images/img.jpg'; // для створення нового ключа(краще цей варіант)
// film[objectkey] = 'John Wick';
// film.preview = './images/img.jpg';// для створення нового ключа

// console.log(film);

// присвоєння змінних як значення для ключів
// const username = 'Oleksii';
// const email = 'test@gmail.com';

// const signupData = {
//   username: username,
//   email: email,
// };

// console.log(signupData);


// скорочений запис присвоєння значень
// const firstName = prompt('Введите ваше имя');
// const email = prompt('Ваш email');
// const age = 20;

// const user = {
//   firstName,
//   email,
//   age,
// };

// console.log(user);

// силочний тип
// const obj = {
//   a: 1,
//   b: 2,
// };

// const obj2 = obj;

// console.log('obj: ', obj);
// console.log('obj2: ', obj2);

// obj2.c = 5;
// obj.d = 10;

// console.log('obj: ', obj);
// console.log('obj2: ', obj2);


// об'єкти і масиви 
// const arr = [1, 2, 3, 4];

// const obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   length: 4,
// };

// obj[0];
// arr[0];

// console.log(arr);
// console.log(obj);

// console.log(arr[0]);
// console.log(obj[0]);