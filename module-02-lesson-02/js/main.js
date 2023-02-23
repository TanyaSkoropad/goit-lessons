// передаємо аргументи - приймаємо параметри

// function declaration
function sayHi() {
    console.log('Привіт привіт');
}

// sayHi();
// // function expression
// let sayHi = function() {
//    console.log('Привіт');
// }; // потрібна крапка з комою

// console.log(sayHi);
// sayHi()
// console.log('sayHi()1111111111111', sayHi());


// різниця між ними - поняття heap

myFunc1(); // все ок

function myFunc1() {
    console.log('Function declaration');
}

myFunc2(); // помилка

let myFunc2 = function() {
   console.log('Function expression');
};

// let func = sayHi;
// console.log('create my func', func);
// console.log('call my func', func()); // Привіт
// sayHi(); // Привіт

// let func = sayHi(); // кожного разу, як викликаються () - спрацьовує функція
// console.log(func);
// func(); // Привіт
// sayHi(); // Привіт  

// параметри
// function showMessage(name) {
//   console.log(`Hello ${name}!`);
// }

// аргументи
// showMessage('Mike');
// showMessage('John');


// function calculateSum(numToCalculate) {
//     let total = 0;
//     for(let i=0; i<=numToCalculate;i++) {
//         total = total + i; // total+=1
//     }
//     console.log('total', total);
// }

// calculateSum(6);
// calculateSum(10);
// calculateSum(100);

// function splitString(myString) {
//     console.log(myString.split(' '));
// }

// splitString('aa bb cc dd');
// splitString('11 22 33 33');

// showMessage(userName1, 10, );
// showMessage('John', 'Lennon');

// console.log('Mike', 'Jordan');
// console.log('John', 'lennon');
// console.log('John1', 'lennon1');

// return
// function add(a, b) {
//   const result = a + b;
//   let finishResult = 0;
//   if (result > 100) {
//     finishResult = result;
//   } else if(result <100 && result>50) {
//     finishResult = result/2;
//   } else {
//     finishResult = 0;
//   }
//   console.log(finishResult);
//   return finishResult;
// }

// function add1(a, b) {
//     const result = a + b;
//     if (result > 100) {
//       return result;
//     } 
//     if(result>50) {
//       return result/2;
//     }
//     return 0;
//   }

// const result = add(10, 10);
// console.log(result);

// function findLargestNumber(numbers) {
//   let max = numbers[0];
//   for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }
// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// дефолтні значення
// function min(a, b=15) {
//     console.log(a);
//     console.log(b);
//   return a < b ? a : b;
// }
// console.log(min(10, 20));
// console.log(5 < undefined);


// область видимості функції - видно і локальні, і глобальні змінні
// function setColor(color){
//     // redColor = color === 'red' ? color : 'Not red';
//     if(color === 'red'){
//         redColor = color;
//         if(true){
//             var redColor;
//         }
//     } else {
//         redColor = 'Not red';
//     }
//     console.log(redColor);
// }
// setColor('red1');
// console.log('redColor', redColor);

// патерн раннє повернення - повертаємо значення всюди, де це тільки можливо
// const courses = ['HTML', 'CSS', 'JS', 'React']

// function checkCourse(course) {
//     let myCourses = [];
//     if(!courses.includes(course)){
//         console.log('New course added');
//         courses.push(course);
//         myCourses = courses.slice();
//     } else {
//         console.log('This course already exists');
//         myCourses = courses.slice();
//     }
//     return myCourses;
// }

// function checkCourse1(course) {
//     let myCourses = [];
//     if(!courses.includes(course)){
//         console.log('New course added');
//         courses.push(course);
//         myCourses = courses.slice()
//         return myCourses;
//     }

//     console.log('This course already exists');
//     return courses.slice();
// }

// const newCourses = checkCourse1('React');
// console.log('' ,newCourses);

// console.log('join' ,newCourses.join(', '));




// arguments псевдомасив - 
// схожий на масив, який містить у собі всі аргументи функції.
// Хоча він схожий на масив - але не має жодних його методів крім length.
// Нам не обовязково вказувати, що функція приймає параметри

// function myFunc() {
//     console.log(arguments);
//     console.log(arguments[0]);
//     // Expected output: 1
  
//     console.log(arguments[1]);
//     // Expected output: 2
  
//     console.log(arguments[2]);
//     // Expected output: 3
// }
  
// myFunc('a', 'b', 'c');

// callstack - порядок виконання функцій
// (перший прийшов - останній пішов; first in - last out)
// вкладка source в браузері
// function firstFunction() {
//     console.log('log1');
//     console.log('log2');
// }

// function secondFunction() {
//     console.log('log0');
//     const sum = arguments[0] + arguments[1];
//     console.log('log3');
//     firstFunction();
//     console.log('log4');
// }
  
// const mySecFunc = secondFunction(1, 2);


// // асинхронні функції - функції, які відбуваються з затримкою у часі

// function myCallback(a, b){ // функція колбек - функція,
// яка викликається в якості аргументу для іншої функції
//     console.log(a);
//     console.log(b);
//    }

// const tania = 'tania';
// setInterval(функціяКолбек, час(в мілісекундах), аргументи);
// setInterval(function myCallback(a, b, c){
//  console.log(a);
//  console.log(b);
//  console.log(c);
// }, 3000, 'Parameter 1', tania, ['Parameter 3']);

// setTimeout(function callback(){
//     console.log('From inside setTimeout');
// }, 0);

// // callstack з асинхронними функціями
// setTimeout(function callback(){
//     console.log('From inside setTimeout');
// }, 3000);

// console.log('Second console.log');

// setTimeout(function callback(){
//     console.log('From inside second setTimeout');
// }, 0);

// console.log('First console.log');
// console.log('Third console.log');