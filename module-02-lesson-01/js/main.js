'use strict'

// Оголошення масивів двома способами

// const myArr = [];
// const myArr1 = new Array();

// const fruits = ["Apple", "Orange", "Plum"];
// const everything = [5, false, "JS", null, undefined, NaN, [fruits]];
// console.log(fruits);
// console.log(everything);

// fruits = ['no'];
// fruits[10] = 'no';
// console.log(fruits);

// console.log(fruits[0]); // Apple
// console.log(fruits[1]); // Orange
// console.log(fruits[2]); // Plum

// fruits[3] = 'Pear'; // тепер ["Apple", "Orange", "Pear"]
// console.log('fruits.length', fruits.length);
// console.log(fruits);

// fruits[3] = 'Lemon'; // тепер ["Apple", "Orange", "Plum", "Lemon"]
// console.log(fruits);
// console.log('fruits.length', fruits.length);
// console.log('fruits last element', fruits[fruits.length - 1]); // get last element

// let myCars1 = new Array(10, 20); // створює пустий масив з довжиною 10
// let myCars2 = [10, 20]; // створює масив з одним елементом

// console.log(myCars1);          // returns undefined
// console.log(myCars1.length);      // returns 10
// console.log(myCars2);          // returns 10
// console.log(myCars2.length);      // returns 1

// myCars1[10] = 5;
// console.log(myCars1);

// передача по значенню і по силці

// let a = 10;
// let b = a;

// console.log('a: ', a);
// console.log('b: ', b);

// a = 20;

// console.log('a: ', a);
// console.log('b: ', b);


// const marks = [10, 11, 5, 9, 10];
// const editedMarks = marks;
// const editedMarks1 = marks;

// console.log('marks', marks);
// console.log('editedMarks', editedMarks);
// console.log('editedMarks1', editedMarks1);

// editedMarks[10] = 100;
// console.log('marks1', marks);
// console.log('editedMarks1', editedMarks);
// console.log('editedMarks11', editedMarks1);


// const music = ['rock', 'jazz', 'pop'];

// music[music.length] = 'indie'
// music.push('indie');
// console.log(music);

// const lastElement = music.pop();
// console.log('lastElement', lastElement)

// music.unshift('classic'); // бажано не використовувати, бо пересуває всі елементи -> забирає багато ресурсу
// console.log(music);
// music.shift();

// console.log(music);

// const welcome = 'Welcome to our third lesson';
// const welcomeArray = welcome.split(' ');
// console.log(welcomeArray);
// console.log(welcomeArray.join(', ')); // по замовчуванню буде кома між елементами масиву
// const title = 'Title 1'.split(' ').join('-'); // Title-1
// console.log(title);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];

// const index = fruits.indexOf("Apple"); // 1
// console.log('index', index);
// const index1 = fruits.indexOf("Apple", 3);
// console.log('index from 3 element', index1);

// console.log('includes', fruits.includes('Apple'));

// const fruits = ["Banana", "Orange", "Kiwi", "Mango", "Apple"];

// const myFruits = fruits.slice();
// myFruits[0] = 'BANANA';
// console.log('fruits', fruits);
// console.log('myFruits', myFruits);

// не змінює оригінальний масив
// робить копію
// console.log('fruits.slice(1)', fruits.slice(0));
// console.log('fruits.slice(1, 3)', fruits.slice(1, 3)); // !! якщо є індекс "до"(другий аргумент) - він не включається
// console.log('fruits.slice(-3, -1)', fruits.slice(-3, -1));



// змінює оригінальний масив
// видаляє елементи
// console.log('fruits.splice()', fruits.splice());
// console.log('fruits.splice(2)', fruits.splice(2));
// console.log('fruits.splice(2, 2)', fruits.splice(2, 1))
// console.log(fruits.splice(-2, 0, "Lemon"));
// console.log(fruits);

// обєднує масиви в один
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin"];

// const children = arr3.concat(arr1, arr3);
// console.log(children);

// цикли

// for (ініціалізація; умова; пост-вираз) {
// statement
// }

// const salaries = [200, 450, 600, 150, 300];

// for (let i = 0; i < salaries.length; i++) {
//   console.log(`${i}: ${salaries[i]}`);
// }

// for (const salary of salaries) {
//   console.log(salary);
//   console.log(salaries.indexOf(salary) === 3);
// }

// порахувати суму
// let total = 0;

// for (let i = 0; i < salaries.length; i += 1) {
//   total += salaries[i];
// }

// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);

// const myString = 'Welcome to our third lesson';
// let reverseStr = '';

// for (let i = myString.length - 1; i >= 0; i--) {
//   reverseStr += myString[i];
// }

// console.log(reverseStr);


// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// const filteredFruits = [];

// for(let i = 0; i<fruits.length; i++) {
//     console.log('fruits.indexOf(fruits[i])', fruits.indexOf(fruits[i]));
//     console.log('i', i);
//     if(fruits.indexOf(fruits[i]) === i) { // Apple, indexof = 2; i = 4
//         filteredFruits.push(fruits[i]);
//     }
// }

// console.log(filteredFruits);

// function calculateTotal(number) {
//     // Change code below this line
//     // const number = 6;
//     let total = 0;
//    for (let i = 0; i <= number; i++){
//     console.log('i', i);
//     console.log('total before plus', total);
//     total +=i;
//     console.log('total after plus', total);
//    }
//    console.log(total);
// }

// calculateTotal(6);