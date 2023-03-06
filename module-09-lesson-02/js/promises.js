'use strict';

/*
 * Проміси
 */

// конструктор new Promise(callback(resolve, reject));
// callback(resolve, reject) = функція executor
// Об'єкт, що представляє результат асинхронної операції
// Pending(початковий стан), Fulfilled, Rejected - стани
// Fulfilled та Rejected - стани, коли проміс здійнився(settled)
// відбувається одразу
// сам проміс - не асинхронний
// const promise = new Promise((resolve, reject) => {
//     // Asynchronous operation
// });

// console.log('first');

// const promise = new Promise((resolve, reject) => {
//     const isDone = Math.random();
//     console.log(isDone)
//     setTimeout(()=> {
//         if(isDone<0.5){
//             resolve('Data')
//         } else {
//             reject('Fail')
//         }
//     }, 1000)
// })

// console.log(promise);

// console.log('second');


// promise.then(success, error) + порядок виконання

// console.log('third');

// promise.then(successValue => {
//     console.log(promise);
//     console.log(successValue);
// }, error => {
//     console.log(promise);
//     console.log(error)
// })

// console.log('forth');

// promise.catch(error)

// promise.then(successValue => {
//     console.log('From Then function', promise);
//     console.log(successValue);
// }).catch( error => {
//     console.log('From catch function', promise);
//     console.log(error)
// })


// ланцюжок промісів та catch(onError)

// promise.then(successValue => {
//     console.log('From Then function', promise);
//     console.log(successValue);
//     return successValue
// }).then(nextValue => {
//     console.log(nextValue+'!');
//     return nextValue+'!'
// }).then(nextValue => {
//     console.log(nextValue+'!!!');
// }).catch( error => {
//     console.log('From catch function', promise);
//     console.log(error)
// })


// finally()

// promise.then(successValue => {
//     console.log('From Then function', promise);
//     console.log(successValue);
//     return successValue
// }).then(nextValue => {
//     console.log(nextValue+'!');
//     return nextValue+'!'
// }).then(nextValue => {
//     console.log(nextValue+'!!!');
// }).catch( error => {
//     console.log('From catch function', promise);
//     console.log(error)
// }).finally(() => {
//     console.log('The end')
// })


// then, catch, finally - асинхронні


//? TASK 01
// Чи можна "перевиконати" проміс?

// const promise = new Promise((resolve, reject) => {
//   reject(1);

//   setTimeout(() => {
//     reject(2);
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// }).catch(error => {
//     console.log(error);
// });

//? TASK 02
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // 1
//   })
//   .then(data => {
//     console.log(data); // undefined
//     return '2';
//   })
//   .then(data => {
//     console.log(data); // 2
//   });


//? TASK 03
// Що буде у консолі

// const promise = new Promise((res, rej) => {

//     res('my object');
// });
// console.log(promise)
// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('Error state')
//     console.log(err);
//   });
