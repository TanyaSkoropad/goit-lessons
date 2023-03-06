'use strict';

// lazy-loading
// медіа зображення дуже великі, якшо їх багато - користувач буде довго чекати

const galleryEl = document.querySelector('.gallery');
const bannerImgEl = document.querySelector('.banner__img');
const galleryImgEls = document.querySelectorAll('.gallery__img');

galleryEl.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;

  if(target.nodeName !== 'IMG'){
    return;
  }

  bannerImgEl.src = target.dataset.bannerUrl;
});

galleryImgEls.forEach(picture => {
  picture.addEventListener(
    'load', // не вспливає, тому маємо вішати на кожен елемент окремо
    event => {
      console.log(event);
      event.target.classList.add('appear');
    },
    { once: true }
  );
});

// const addSrcAttrToImg = () => {
//   const imageEls = document.querySelectorAll('img');
//   imageEls.forEach(el => {
//     el.src = el.dataset.src;
//   });
// };

// const createLazySizesScript = () => {
//   const script = document.createElement('script');
//   script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';

//   return script;
// };

// if ('loading' in HTMLImageElement.prototype) {
//   console.log('Атрибут loading підтримується');
//   addSrcAttrToImg();
// } else {
//   console.log('Атрибут loading не підтримується');
//   document.body.append(createLazySizesScript());
// }