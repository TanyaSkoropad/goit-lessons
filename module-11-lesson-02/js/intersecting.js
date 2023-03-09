const sectionsEl = document.querySelectorAll('.section');
const targetSecEl = document.querySelector('.target-section');

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

sectionsEl.forEach(el => {
  el.style.backgroundColor = `rgb(${randomInteger(0, 255)}, ${randomInteger(
    0,
    255
  )}, ${randomInteger(0, 255)})`;
});

const observerOptions = {
  root: null,
  rootMargin: "300px",
  threshold: 1,
};

const logFunction = (entries, observer) => {
  // console.log(entries);
  // console.log(observer);
  if(entries[0].isIntersecting) {
    console.log('Hello');
  }
}

let observer = new IntersectionObserver(logFunction, observerOptions);
observer.observe(targetSecEl);