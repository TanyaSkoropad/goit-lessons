'use strict';

// випливання події дозволяє реалізувати прийом "делегування" подій
// 1) Визначите спільного предка для групи елементів для моніторингу подій.
// 2) На батьківському елементі зареєструвати обробник для події, яку потрібно відстежувати в групі елементів.
// 3) В обробнику використовувати event.target, щоб вибрати цільовий елемент.
const palletEl = document.querySelector('.js-pallet');
const palletItemEl = document.querySelectorAll('.js-pallet > li');

const randomColor = () => {
  // console.log(Math.random().toString(10)); // 10-кова система лише цифри
  // console.log(Math.random().toString(16)); // 16-кова система - цифри + букви
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};

const paintElements = () => {
  palletItemEl.forEach(element => {
    const color = randomColor();
    console.log(color);

    element.style.backgroundColor = color;
    element.dataset.color = color;
    // атрибут data-color = color
    console.log(element);
  });
};

paintElements();

const onPalletElClick = event => {
  
  const target = event.target;
  console.log();

  if (target.nodeName !== 'LI') { // важливо перевіряти, щоб випадково не відреагувати на неправильний елемент
    return;
  }

  const currentColor = target.dataset.color;
  // const currentColor = target.style.backgroundColor;
  const outputColor = target.querySelector('.pallet__item-color');

  outputColor.textContent = currentColor;
};

palletEl.addEventListener('click', onPalletElClick);