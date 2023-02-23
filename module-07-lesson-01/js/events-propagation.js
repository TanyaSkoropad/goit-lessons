'use strict';

// Поширення подій (занурення, таргетинг, спливання) 
// Етапи: Затоплення > Цільова > Спливання
// Починається і закінчується подія на об'єкті window
// event.currentTarget - посилання на об'єкт в обробнику якого зараз обробляється подія
// event.target - посилання на цільовий елемент(на якому сталась подія)

const div = document.querySelector('#bubble-div');
const span = document.querySelector('#bubble-span');
const button = document.querySelector('#bubble-button');

div.addEventListener('click', event => {
  console.group('Listener on div(Bubbling phase)');
  console.log('Target: ', event.target);
  console.log('CurrentTarget:', event.currentTarget);
  console.groupEnd();
});

div.addEventListener(
  'click',
  event => {
    console.group('Listener on div(Capturing phase)');
    console.log('Target: ', event.target);
    console.log('CurrentTarget:', event.currentTarget);
    console.groupEnd();
  },
  { capture: true }
);

span.addEventListener('click', event => {
//   event.stopPropagation(); // припинити спливання події, запобігатиме виконанню будь-яких батьківських обробників
  event.stopImmediatePropagation(); // запобігатиме виконанню будь-яких батьківських обробників, а також будь-яких інших обробників
  console.group('Listener on span(Bubbling phase)');
  console.log('Target: ', event.target);
  console.log('CurrentTarget:', event.currentTarget);
  console.groupEnd();
});

span.addEventListener(
  'click',
  event => {
    console.group('Listener on span(Capturing phase)');
    console.log('Target: ', event.target);
    console.log('CurrentTarget:', event.currentTarget);
    console.groupEnd();
  },
  { capture: true }
);

// span.addEventListener(
//   'mouseleave',
//   event => {
//     console.log('hhh');
//   },
// );

// span.addEventListener(
//   'click',
//   event => {
//     console.log('second click event');
//   }
// );
// span.addEventListener(
//   'click',
//   event => {
//     console.log('third click event');
//   },
// );

// span.addEventListener(
//     'click',
//     event => {
//       console.log('fourth click event');
//     },
//   );

// button.addEventListener('click', event => {
//   console.group('Listener on button(Bubbling phase)');
//   console.log('Target: ', event.target);
//   console.log('CurrentTarget:', event.currentTarget);
//   console.groupEnd();
// });

// button.addEventListener(
//   'click',
//   event => {
//     console.group('Listener on button(Capturing phase)');
//     console.log('Target: ', event.target);
//     console.log('CurrentTarget:', event.currentTarget);
//     console.groupEnd();
//   },
//   { capture: true }
// );