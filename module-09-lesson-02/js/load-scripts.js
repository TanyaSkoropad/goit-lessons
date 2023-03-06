'use strict';

// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Завантаження скриптів
 */
//? Створіть функцію loadScript(url), яка буде створювати та додавати скрипт на сторінку


function loadScript(url, onSuccess, onFail) {
    const script = document.createElement('script');
    script.src = url;
    document.body.append(script);

    script.addEventListener('load', ()=>{
        onSuccess(script.src)
    })
    script.addEventListener('error', ()=>{
        onFail(script.src)
    })
}

// const handleSuccessFetch = data => {
//   console.log('Success data', data);
// };

// const handleErrorFetch = err => {
//   console.log('Error data', err);
// };

// loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js', data => {
//     console.log('Success data', data);
//     loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', data => {
//         console.log('Success data', data);
//         loadScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js', data => {
//             console.log('Success data', data);
//           }, err => {
//             console.log('Error data', err);
//           });
//       }, err => {
//         console.log('Error data', err);
//       });
//   }, err => {
//     console.log('Error data', err);
//   });
// loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', handleSuccessFetch, handleErrorFetch);
// loadScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js', handleSuccessFetch, handleErrorFetch);

//? Рішення через проміси
//

function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    document.body.append(script);

    return new Promise((resolve, reject) => {
        
        script.addEventListener('load', ()=>{
            resolve(script.src)
        })
        script.addEventListener('error', ()=>{
            reject(script.src)
        })
    })
}

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
.then(success => {
    console.log('Success ', success);
    return loadScript('https://cdnjs.cloudflare.com/ajax/libs/query/3.6.0/jquery.min.js')
})
.then(successNext => {
    console.log('Success ', successNext);
    return loadScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js')
})
.then(successLast => {
    console.log('Success ', successLast);
})
.catch(fail => {
    console.log('Fail ', fail);
})


setTimeout(() => {
    console.log('From setTimeout')
}, 5000)
