'use strict';
// https://api.github.com/users/TanyaSkoropad

// function myAsyncFunction(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();
//     xhr.addEventListener('load', () => {
//         if(xhr.status !== 200) {
//             reject(xhr.responseText);
//         } else {
//             resolve(xhr.responseText);
//         }
//     });
//   });
// }

// myAsyncFunction('https://api.github.com/users/TanyaSkoropad')
//   .then(data => {
//     console.log(JSON.parse(data));
//   })
//   .catch( error => {
//       console.log(JSON.parse(error).message)
//   });

//? Запит за користувачем на колбеках
// const fetchUserByName = (name, onSuccess, onError) => {
//   console.log('Робимо запит на сервер...');

//   setTimeout(() => {
//     const isDone = Math.random();

//     if (isDone < 0.5) {
//       const user = {
//         firstName: name,
//         lastName: 'Francis',
//         age: 30,
//       };

//       onSuccess(user);
//     } else {
//       onError("Користувача з таким ім'ям не знайдено");
//     }
//   }, 2000);
// };

// const handleSuccessFetch = data => {
//   console.log('Success data', data);
// };

// const handleErrorFetch = err => {
//   console.log('Error data', err);
// };

// fetchUserByName('Oleh', handleSuccessFetch, handleErrorFetch);

//? Запит за користувачем на промісах

// const fetchUserByNamePromise = (name) => {
//     console.log('Робимо запит на сервер...');

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const isDone = Math.random();
        
//             if (isDone < 0.5) {
//               const user = {
//                 firstName: name,
//                 lastName: 'Francis',
//                 age: 30,
//               };
        
//               resolve(user);
//             } else {
//                 reject("Користувача з таким ім'ям не знайдено");
//             }
//           }, 2000);
//     })
//   };

// fetchUserByNamePromise('Oleh').then(successUser => {
//     console.log('Success user ', successUser)
// }).catch(errorUser => {
//     console.log('Error user ', errorUser)
// })

