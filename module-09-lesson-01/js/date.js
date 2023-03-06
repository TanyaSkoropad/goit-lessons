'use strict';
// const date = new Date();
// const startingDate = new Date(-5000000000);
// const calculateMilliseconds = new Date(500000);
// const tomorrowDate = new Date('2023-03');
// const tomorrowDate1 = new Date(2023,-1);
// console.log(date)
// console.log(startingDate)
// console.log(calculateMilliseconds)
// console.log(tomorrowDate)
// console.log(tomorrowDate1)

// Методи дати
// const date = new Date();
// console.log(date.getDay());
// console.log(date.getUTCHours());
// console.dir(date);

//? TASK 01
// Створіть об'єкт Date для дати: 20 лютого 2012 року, 3 години 12 хвилин.
// const myDate = new Date(2012,1,20,3,12);
// const myDate = new Date('2012/2/20 03:12');
// console.log(myDate);
// console.log(myDate.getUTCHours());

//? TASK 02
// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».
// const getWeekDay = date => {
//     const weekDays = ['НД', 'ПН', 'ВТ','СР','ЧТ','ПТ', 'СБ'];
//     console.log(date)
//     console.log(date.getDay())
//     return weekDays[date.getDay()]
// };

// const date = new Date(2023, 2, 1);
// console.log(getWeekDay(date));

//? TASK 03
// Створіть функцію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
// Параметри:
// year – рік з чотирьох цифр, наприклад, 2012.
// month – місяць від 0 до 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

// const getLastDayOfMonth = (year, month) => {
//     const date = new Date(year, month, 0);
//     return date;
// };

// console.log(getLastDayOfMonth(2012, 0));

//? TASK 04
// Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.
// const getSecondsToTomorrow = () => {
//     const now = new Date();
//     const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
//     console.log(now);
//     console.log(tomorrow);
//     const diff = tomorrow-now;
//     return diff/1000;
// };

// console.log(getSecondsToTomorrow());
