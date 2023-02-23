// Написати функцію, яка приймає масив об'єктів дорогоцінних камнів і рахує ціну за їхню кількість

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
];

// console.log(stones);

const calcTotalPrice = function (stones, stoneName) {
  for (const stone of stones) {
    console.log('stone', stone);
    if (stone.name === stoneName) {
      return stone.price * stone.quantity;
    }
  }
  return 'Такого камня не знайдено';
};

console.log(calcTotalPrice(stones, 'Смарагд')); // 5200
console.log(calcTotalPrice(stones, 'Діамант')); // 8100
console.log(calcTotalPrice(stones, 'Аконіт')); // Такого камня не знайдено