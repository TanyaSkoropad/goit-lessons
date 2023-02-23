// while (condition) {
// код, тіло цикла (statement)
// }

// 0 < 5 = true
// 1 < 5 = true
// 2 < 5 = true
// 3 < 5 = true
// 4 < 5 = true
// 5 < 5 = false

// let iterator = -10;
// while (iterator > 0) {
//   console.log('Hello!' + iterator);
//   iterator = iterator - 1; // !! обовязкова операція
// }

// let number = 1;
// let result = 0;
// while (number <= 100) {
//   result += number; // result = result + number;
//   number += 1; // number++
// }

// console.log(result);



// do {
// statement
// } while (condition);

// let doWhileLet = -1;
// do {
//     console.log('doWhileLet', doWhileLet);
//     doWhileLet++;
// } while (doWhileLet > 0 && doWhileLet < 10)


// for (ініціалізація; умова; пост-вираз) {
// statement
// }

// for (let i = -100; i < 20;i++) {
//     console.log(i);
// }

// Вивести в консоль
// *
// **
// ***
// ****
// *****
// ******
// *******

// let star = '*';
// for (let i = 0; i< 7; i++) {
//   console.log(star);
//   star += '*';
// }

// let iterator = 0

// while(iterator<7) {
//     console.log('while', star);
//     star += '*';
//     iterator++;
// }

// for (let i = 1; i <20; i *= 2) {
//   console.log(i);
// }

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
//   console.log('second', i)
// }

// let iterator = -10;
// while (iterator > 0) {
//   console.log('Hello!' + iterator);
//   iterator = iterator - 1; // !! обовязкова операція
// }

let i = 5;

for (i; i < 10;i++) {
  if (i === 4) {
    console.log('Ми знайшли 7');
    break;
  }
  console.log('if', i);
}

console.log('global', i)

// const number = 10;

// if(true) {
//     const number = 20;
//     const tania = 'tania';
//     var netania = 'netania';
// }

// if(true){
//     const number = 30;
// }

// console.log(netania);
// console.log(tania);
// console.log(number)

