'use strict';

// CDN - content delivery network

// chatty events - балакучі події(input, resize, scroll...)
// Викликаються багато разів за якись проміжок часу(наприклад за 1 сек)

// callstack

// scroll - викликається на будь-якому елементі, що має скрол
// не викликається на кожному пікселі але всерівно дуже часто

// lodash 
// усі бібліотеки підключаємо перед закриваючим тегом Body і перед ннашими власними файлами js

// _.throttle - приймає функцію, яку треба виконати і 
// мінімальний час затримки між виконанням поточного виклику і наступного
// тобто функція буде виконуватись НЕ частіше ніж раз у ... часу
// контролює кількість викликів функції протягом проміжку часу
// !! повертає нову функцію

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const sectionElements = document.querySelectorAll('.section');

sectionElements.forEach(section => {
  section.style.backgroundColor = randomColor();
});

const sectionEl = document.querySelector('.animated-section');

const onDocumentScroll = (event) => {
  console.log(window.pageYOffset);
  if(window.pageYOffset >= 800) {
    sectionEl.classList.add('active');
    document.removeEventListener('scroll', onThrottleEvent);
  }
}

const onThrottleEvent = _.throttle(onDocumentScroll, 300);

document.addEventListener('scroll', onThrottleEvent);

console.log(_)

document.addEventListener(
  "scroll",
  _.debounce(() => {
    console.log("Scroll handler call after 300ms pause");
  }, 300)
);
