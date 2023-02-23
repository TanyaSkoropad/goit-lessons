// if (умова) {
//     виконання дії
// }

// якщо виконається умова -> то відбудеться певна дія

// if(true) {
//     console.log('Congratulations!');
// }

// undefined, '', null, NaN, 0, false
// if(0) {
//     alert('It is undefined');
// }

// const num = 11;
// if (num !== 5) {
//   console.log('Num більший ніж 5');
// }

// if (умова) {
//     виконання дії
// } else {
//     виконання дії
// }

// const myConst = 'World';
// if(myConst.includes('el')){
//     alert(`${myConst} World!`);
// } else {
//     alert('Hello не знайдено');
// }

// const number = Number(prompt('Введіть число'));
// if (number === 10) {
//   console.log('Дорівнює 10');
// } else {
//   console.log('НЕ дорівнює 10');
// }

// if (умова) {
//     виконання дії
// } else if (умова) {
//     виконання дії
// } else {
//     виконання дії
// }

// const min = 30;
// if (min >= 0 && min < 15) {
//   console.log('Перша чверть години');
// } else if (min >= 15 && min < 30) {
//   console.log('Друга чверть години');
// } else if(min === 30){
//     console.log('Половина години');
// } else if (min > 30 && min < 45) {
//   console.log('Третя чверть години');
// } else if (min >= 45 && min < 60) {
//   console.log('Четверта чверть години');
// } else {
//   console.log('Значення не попадає в діапазон');
// }



// switch (значення) {
//   case значення:
//     виконання дії;
//     break;
//   case значення:
//     виконання дії;
//     break;
//   default:
//     виконання дії;
// }
// !! default обовязково має бути в кінці
// !! використовує для порівняння ===

// const num = 0;
// switch(num) {
//     case 0:
//         console.log('False');
//         break;
//     case 1:
//         console.log('True');
//         break;
//     default:
//         console.log('Введене значення не є числом');
// }

// if(num === 0) {
//     console.log('False');
// } else if (num === 1) {
//     console.log('True')
// } else {
//     console.log('Введене значення не є числом');
// }

// switch('січень') {
//     case 'Грудень':
//     case 'Січень':
//     case 'Лютий':
//         console.log('Це зима');
//         break;
//     case 'Березень':
//     case 'Квітень':   
//     case 'Травень': 
//         console.log('Це весна');
//         break;
//     case 'Чеврень':
//     case 'Липень':   
//     case 'Серпень': 
//         console.log('Це літо');
//         break;
//     case 'Вересень':
//     case 'Жовтень':   
//     case 'Листопад':
//         console.log('Це осінь');
//         break; 
//     default:
//         console.log('Введене значення не є місяцем');
//         break;
// }

// Тернарний оператор

//<умова> ? <якщо умова є true> : <якшо умова є false>

// const a = 6;
// const b = 9;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }
// (a>5 && b<10) ? console.log('Small') : console.log('Big');
// console.log(result)

// const cafe = 'kkkkk';
// let tania = 'tania';

// const cafeNearby = (cafe === 'Близько') ? 'Кафе знаходиться близько' : (cafe === 'Далеко')
//     ? 'Кафе знаходиться далеко' : tania === ''
//     ? 'Немає такого кафе поблизу' : '';
// console.log(cafeNearby)


// switch(cafe) {
//     case 'Близько':
//         console.log('Кафе знаходиться близько');
//         tania
//         break;
//     case 'Далеко':
//         console.log('Кафе знаходиться далеко');
//         tania
//         break;
//     case '':
//         console.log('Немає такого кафе поблизу');
//         tania = 'netania'
//         break;
//     default:
//         tania
//         break;
// }


// блочна область видимості

// let myNumber = 15
// const tania = 'tania';


// if (true) {
//   const myNumber = 20; 
  
//   console.log(myNumber);
//   if(myNumber > 10){
//     console.log('myNumber second if:', myNumber);
//     // console.log(tania);
//   } else if(myNumber< 10) {

//     console.log('else tania', taniaElse);
//   }
//   console.log(tania);
// }

// let num = 10;
// num = 100;

// if(true){
//     let num = 20;
//     console.log('if', num);
//     num = 30;
//     console.log('if second', num);
// }

// console.log('global',num);

