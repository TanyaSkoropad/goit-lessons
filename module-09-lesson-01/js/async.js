'use strict';

// По замовчуванню JS сихнронний, однопоточний

// Асинхронні функції додавання лістенерів на елементи
/*
 * Синхронний vs Асинхронний JS
 */

// console.log('Hello');

// setTimeout((hello)=>{
//     console.log(hello)
// }, 0, 'hello1111');

// let count;
// for(let i=0;i<1000000000; i++){
//     count = i;
// }
// console.log(count);
// console.log('Hello second');


// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!
// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// Синхронний код заходить у колстек по принципу перший прийшов - останній пішов
// Асинхронний код заходить у колстек після перебування у callback queue
// по принципу перший прийшов - перший пішов(один за одним)
// Асинхронний код: callstack -> web apis(чекають поки пройде час) -> callback queues -> callstack

// Очищення інтервалів і таймаутів clearInterval(intervalID), clearTimeout(timeoutID)
// const intervalId = setInterval((hello) => {
//   console.log(hello);
// }, 1000, 'Hello');

// console.log('intervalId', intervalId);

// document.addEventListener('click', () => {
//   clearInterval(intervalId);
// });

// const greet = () => {
//     console.log("Hello!");
// };

// const timerId = setTimeout(greet, 3000);
// //
// console.log('timerId', timerId);

// document.addEventListener('click', () => {
//     clearTimeout(timerId);
//   });

