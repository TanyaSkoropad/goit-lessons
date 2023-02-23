'use strict';
const calendarEl = document.querySelector('.calendar');
let prevTdEl = null;

const onCalendarElClick = function (event) {
  console.log('inside');
  const target = event.target;

  if (target.nodeName !== 'TD' || target.textContent === '') {
    return;
  }

  if (prevTdEl === target) {
    target.classList.toggle('active');
    return;
  }

  if (prevTdEl) {
    prevTdEl.classList.remove('active');
  }

  target.classList.add('active');
  prevTdEl = target;
};

calendarEl.addEventListener('click', onCalendarElClick);