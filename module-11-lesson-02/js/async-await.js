'use strict';

/*
 * async/await
 * асинхронна(async) функція завжди повертає проміс
 * повертаємо звичайне значення, а воно конвертується в проміс
 * await змушує функцію чекати виконання проміса.
 * await не можна використовувати поза асинхронних функцій.
 * try/catch для виявлення помилок
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// const fetchPosts = async () => {
//   try{
//     const responseFetchPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
//     if(!responseFetchPosts.ok) {
//       throw new Error(responseFetchPosts.status)
//     }
//     return responseFetchPosts.json()
//   } catch(error) {
//     console.log(error)
//     return error
//   }
// }

// console.log(fetchPosts())

// const postsResponse = async () => {
//   const posts = await fetchPosts();
//   console.log(posts)
// }
// postsResponse()

// fetchPosts().then(data => {
//   console.log(data)
// }).catch(error => {
//   console.log(error)
// })

// console.log('Start!');

// const summ = async (a,b) => {
//   return a+b;
// }

// summ(10,20).then(data => {
//   console.log(data)
// })

// console.log(summ(10,20))

// console.log(fetchPosts())
// fetchPosts()


// console.log('End!')

// const fetchPosts = async () => {}



//? TASK 01
// Переписати на async/await
// const loadPosts = async url => {
//   try {
//     const postsResponse = await fetch(url);
//     if(!postsResponse.ok) {
//       throw new Error(response.status)
//     }
//     return postsResponse.json()
//   } catch(error) {
//     return error;
//   }
    // return fetch(url).then(response => {
    //     if(!response.ok) {
    //         throw new Error(response.status)
    //     }
    //     return response.json()
    // })
// }

// const onPosts = async () => {
//   console.log(await loadPosts('https://jsonplaceholder.typicode.com/posts'))
  // const posts = await loadPosts('https://jsonplaceholder.typicode.com/posts')
  // console.log(await loadPosts('https://jsonplaceholder.typicode.com/posts'))
// }

// onPosts()

// loadPosts('https://jsonplaceholder.typicode.com/posts')
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.log(error)
// })


//? TASK 02
// Є звичайна функція. Як можна отримати результат виконання асинхронної функції всередині неї?
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 2000))
//   console.log('first')
//   await new Promise(resolve => setTimeout(resolve, 1000))
//   console.log('second')
//   return 10;
// }

// function f() {
//   wait().then(data => {
//     console.log(data)
//   }).catch(error => {
//     console.log(error);
//   })
//  ...що тут написати?
//  щоб викликати wait() і дочекатись результату "10" від асинк-функції
//  використовувати "await" не можна
// }

// f();