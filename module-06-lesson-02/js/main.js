// events - способи взаємодії з користувачем
// ми слідкуємо за усім, що користувач робить на сторінці

// object.addEventListener(event, listener);
// дозволяє додавати декілька обробників до події(можемо слідкувати за кліками кількох елементів одночасно)
// синтаксис
// object (або EventTarget) -  об'єкт у якому призначається подія. Об'єктом може бути window, document, Element...
// event - назва нашої події
// listener - дії(alert, console.log...), які виконаються при виникнені події event

// const button = document.querySelector('#setTime');
// 1 спосіб
// button.addEventListener('click', (tania) => {
//   console.log(tania);
//   console.log("button was clicked");
//   document.querySelector('#demo').innerHTML=Date();
// });

// 2 спосіб
// button.addEventListener('click', clickButton);
// function clickButton(event){
//     console.log(event);
//     console.log("button was clicked");
//     document.querySelector('#demo').innerHTML=Date();
// }

// object.addEventListener(event, listener, options)
// options - уточнює деталі про подію
// є обєктом і може містити відразу усі властивості
// -- once - подія викликається лише раз, по замовчуваню - значення false
// button.addEventListener('click', () => {
//   console.log("button was clicked");
//   document.querySelector('#demo').innerHTML=Date();
// }, {once: true});


// preventDefault() - дозволяє перервати дефолтну поведінку браузера
// const link = document.querySelector('#myLink');

// link.addEventListener("click", checkLink);

// function checkLink(event) {
//     if(link.href.includes('google')){
//         // link.href = 'https://www.netflix.com/browse';
//         let warn = "preventDefault() won't let you navigate!<br>";
//         document.querySelector("#output-box").innerHTML += warn;
//         event.preventDefault(); // подія не відбудеться але сама функція НЕ перерветься
//     }
//     console.log('Im not google');
// }

// options
// -- pasive - не дозволяє використати preventDefault()
// якщо preventDefault у нас все-таки є у функції - 
// він проігнорується і виведеться повідомлення у консоль
// link.addEventListener("click", checkLink, {passive: true});


// options
// -- signal - викликає abortSignal


// bubble event - спершу знаходиться подія, і вона як бульбашка вспливає наверх по ієрархії дерева вузлів

// const body = document.querySelector('body');
// const div = document.querySelector('#bubble-div');
// const span = document.querySelector('#bubble-span');
// const button = document.querySelector('#bubble-button');

// body.addEventListener('click', (event) => {
//     console.log(event); // event.target
//     alert("body was clicked");
// });

// div.addEventListener('click', (event) => {
//   // event.stopPropagation();
//   console.log(event);
//     alert("div was clicked");
// });

// span.addEventListener('click', (event) => {
//   console.log(event);
//   alert("span was clicked");
// });

// button.addEventListener('click', (event) => {
//   console.log(event);
//     // event.stopPropagation(); // існує ще event.stopImmediatePropagation - зупиняє поточну подію
//     alert("button was clicked");
// });

// capture event - навпаки - відображає шлях пошуку нашої події - згору до низу по ієрархії дерева вузлів
// !! capture завжди відпрацьовує перший

// options
// -- capture - застосовує підхід capture до виклику події
// === useCapture
// object.addEventListener(event, listener, useCapture)

// body.addEventListener('click', (event) => {
//   console.log(event);
//   alert("body was clicked");
// }, {capture: true}); //=== {capture: true}

// div.addEventListener('click', (event) => {
//   console.log(event);
//   console.log("div was clicked")
// }); //=== {capture: true}

// span.addEventListener('click', (event) => {
//   console.log(event);
//   console.log("span was clicked");
// }, {capture: true}); //=== {capture: true}

// button.addEventListener('click', () => {
//   console.log("button was clicked");
// }, {capture: true}); //=== {capture: true}


// remove element
// remove event listener
// object.removeEventListener(event, listener)
// object.removeEventListener(event, listener, options)
// object.removeEventListener(event, listener, useCapture)

// const removeEventDiv = document.getElementById("removeEventDiv");
// removeEventDiv.addEventListener("mousemove", myFunction);
// function myFunction() {
//     document.getElementById("removeDemo").innerHTML = Math.random();
//   }

// const removeEvent = document.getElementById('removeEvent');

// function fdRemove (event) {
//     console.log(this);
//     console.log(event);
//     removeEventDiv.removeEventListener("mousemove", myFunction);
// }

// for this context purposes
// const arrowRemove1 = (event) => {
//     console.log(this);
//     console.log(event.type);
//     console.log(event.currentTarget);
//     removeEventDiv.removeEventListener("mousemove", myFunction);
// }

// removeEvent.addEventListener('click', fdRemove);


// keyboard events
// document.addEventListener("keydown", event => {
//     console.log("Keydown: ", event); // викликається коли користувач натискає на кнопку
//   });

// document.addEventListener("keyup", event => {
//     console.log("Keyup: ", event); // викликається коли користувач відпускає кнопку
// });

// const outputEl = document.querySelector('#outputKeyup')
// document.addEventListener('keyup', event => {
//     outputEl.insertAdjacentHTML('beforeend', `code: ${event.code} <br> key: ${event.key} <br> <hr>`);
// });

// document.addEventListener("keydown", event => {
//     event.preventDefault();
  
//     if ((event.ctrlKey || event.metaKey) && event.code === "KeyD") { // metaKey - window button in Windows, command in Mac
//       console.log("«Ctrl + d» or «Command + s» combo");
//     }
//   });


// form events

// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   console.log(event);
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// const login = document.querySelector('[name="login"]');

// login.addEventListener("change", handleChange); // спрацьовує коли ми шось ввели і клікнули деінде

// function handleChange(event) {
//   console.log(event.target.value)
// }

// const password = document.querySelector('[name="password"]');

// password.addEventListener("input", handleInput); // спрацьовує кожного разу як змінюється value інпута
// password.addEventListener("focus", handleFocus); // приклад декількох івентів на одному елементів
// password.addEventListener("blur", handleBlur); // приклад декількох івентів на одному елементів

// function handleInput(event) {
//   console.log(event.target.value)
// }

// function handleFocus(event) {
//     console.log('entered focus')
//   }

// function handleBlur(event) {
//     console.log('lost focus');
// }


