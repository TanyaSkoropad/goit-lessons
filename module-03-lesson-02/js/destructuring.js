'use strict';

// Деструктуризація об'єктів
// const firstName = 'John';

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
// };

// const user1 = {
//     firstName: 'John',
//     lastName: 'Reese',
//     age: 30,
//     isAdmin: true
// };


// Деструктуризація:
// значення ключа firstName присвоїть у змінну firstName.
// значення ключа age присвоїть у змінну userAge.
// значення ключа isAdmin присвоїть у змінну isAdmin (false, якщо такого ключа не існує)


// const { firstName, lastName} = user;
// console.log('firstName', firstName);
// console.log('lastName', lastName);
// console.log(user.age);

// const userAge = 'age';

// const { firstName, age: userAge} = user; // присвоєння у наші власні змінні
// const { firstName, age: userAge, isAdmin: isAdmin1 = false } = user; // присвоєння дефолтного значення, якщо такого ключа не існує, інакше буде undefined

// console.log(user[userAge]);
// console.log('firstName: ', firstName);
// console.log('userAge: ', userAge);
// console.log('isAdmin: ', isAdmin1);
// console.log('user', user)

// Глибока деструктуризація об'єктів

// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// const { number, flag, employees, langs } = team;
// const { original: originalLang, secondary: secondaryLang } = langs;

// const {
//   number,
//   flag,
//   employees,
//   langs: { original: originalLang, secondary: secondaryLang },
// } = team;

// console.log('number: ', number);
// console.log('flag: ', flag);
// console.log('employees: ', employees);
// console.log('langs: ', langs);
// console.log('secondaryLang: ', secondaryLang);

// originalLang = 'eeeeeee';
// console.log(team);
// console.log(originalLang);

// Деструктуризація масивів

// const rgb = [0, 255, 34, 5, 10, 15, 20];
// const [red, green, blue, pink, ...rest1] = rgb;
// console.log('red: ', red);
// console.log('green: ', green);
// console.log('blue: ', blue);
// console.log('rest: ', rest1);

// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];
// const [user1, , , , user2] = names;
// console.log(user1);
// console.log(user2);



// Повертає об'єкт, який містить ті самі значення, але ім'я та прізвище об'єднані в одному ключі

const transformUsername = function (user) {
  const { firstName, lastName, ...otherKeys } = user;
  console.log('otherKeys', otherKeys);
  return {
    fullName: `${firstName} ${lastName}`,
    ...otherKeys,
  };
};

// const user = {
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//     abc: 'abc',
//     countries: ['Ukraine', 'Poland', 'UK']
//   }

// const transformedUser = transformUsername(structuredClone(user))

// console.log('transform', transformedUser);
// console.log('user', user);

// user.countries.push('Canada');

// console.log('transform', transformedUser);
// console.log('user', user);
