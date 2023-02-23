'use strict'

// обєкти window і document 

// window - Вікно браузера
// document - HTML-документ, завантажений в браузері
// Об'єкт document є нащадком об'єкта window.
// Маємо доступ і до того, і до того - відповідно можемо з ними працювати(змінювати/слідкувати..)

// console.log(window);
// console.log(document);
// console.log(this);

// DOM і BOM
// BOM - Browser object model - представлення інформації про браузер
// console.log(window.navigator);
// console.log(window.screen);
// console.log(window.location);
// console.log(window.document);

// DOM - document object model - представлення нашої html сторінки як об'єкту
// Являє собою ієрархію нашого html файлу
// console.dir(document);
// console.log(document.navigator); // не має тих методів, що має window
// console.log(document.screen);
// document.write(document.title +"<br>");
// document.write(document.lastModified +"<br>");

// window = {
//     document: {
//         html: {
//             head: {
//                 meta: Element,
//                 title: Element,
//                 link: Element
//             },
//             body: {
//                 div: {
//                     img: Element,
//                     h1: Element,
//                     p: Element,
//                     div: {
//                         ul: {
//                             li: Element,
//                             li: Element,
//                             li: Element,
//                         }
//                     }
//                 },
//                 script: {}
//             }
//         }
//     }
// }

// документ(html) перетворюється в node tree 
// h4(Element) -> 'A h4 element'(text);

// getElementBy...
// const firstUl = document.getElementById('first-ul');
// console.log(firstUl.innerHTML);
// const listItems = document.getElementsByTagName('li');
// console.log(listItems); // повертає HTMLCollection
// console.log(listItems[0].innerHTML);

// querySelectors = рекомендується
// базуються на тегах('h1'), класах('.my-class') та айдішках('#myId');
// console.log(document.querySelector('h1')); // шукає тег h1
// console.log(document.querySelector('.list-item')); // шукає клас list-item
// console.log(document.querySelector('#first-ul')); // шукає id first-ul
// console.log(document.querySelector('div')); // повертає перший елемент який знайде
// console.log(document.querySelectorAll('div')); // повертає всі елементи які знайде // повертає NodeList
// console.log(document.querySelector('div.p-container')); // шукає div з класом p-container
// console.log(document.querySelector("div > .paragraph")) // шукає щось з класом paragraph всередині div
// console.log(document.querySelector("a[href]")); // Шукає а з атрибутом target
// console.log(document.querySelector("h3, h4")); // шукає перший елемент - це буде або h3 або h4
// console.log(document.querySelectorAll("h3, h4")); // шукає всі елементи

// const myH1 = document.querySelector('h1');
// myH1.id = '';
// console.log(myH1);

// function changeInnerHTML(){
//     // const firstUl = document.querySelector('ul');
//     const link = document.querySelector("a[target]");
//     // console.log(firstUl.textContent);
//     // console.log(firstUl.innerHTML);
//     // firstUl.innerHTML = '<h1>I\'m first unordered list!</h1>'// візьме і всьо перезапише
//     // firstUl.innerHTML = '<button onclick="myFunction()">Changed inner HTML!</button>'
//     link.href = "https://www.google.com/";
// }

// function myFunction(){
//     console.log('Hello!')
// }

// const firstUl = document.querySelector('ul');
// console.log(firstUl)
// console.log(firstUl.firstChild);
// console.log(firstUl.firstElementChild);

// classList

// const myDiv = document.querySelector('#checkClassList');

// додаємо і видаляємо класи
// myDiv.classList.add("foo");
// myDiv.classList.remove("foo");
// myDiv.classList.add("another-class");

// перевіряємо чи такий клас є на нашому елементі

// console.log(myDiv.classList.contains("another-class"));

// // якщо клас visible вже є на елементі - видаляємо його, якщо немає - додаємо
// myDiv.classList.add("visible");
// myDiv.classList.toggle("visible");

// додаємо або видаляємо клас в залежності від умови
// const i = 20;
// myDiv.classList.toggle("visible", i < 10);

// // додаємо або видаляємо декілька класів
// myDiv.classList.add("foo", "bar", "baz");
// myDiv.classList.remove("foo", "bar", "baz");

// // додаємо або видаляємо декілька класів за допомогою spread syntax
// const cls = ["foo", "bar"];
// myDiv.classList.add(...cls);
// myDiv.classList.remove(...cls);

// // якщо є foo - заміняє його на bar
// myDiv.classList.replace("", "bar");

// console.log(myDiv);

// set styles 
// const bgColor = 'background-color'
// const myDiv = document.querySelector('#checkClassList');
// myDiv.style.backgroundColor = "blue";
// myDiv.style['background-color'] = "blue";
// console.log(myDiv.style.display = 'none');

// атрибути
// const link = document.querySelectorAll(".my-h4[target]");
// console.log(link);
// link.classList.add('hover-class');
// const listContainer = document.querySelector('.list-container');
// console.log(link.hasAttribute('target')); // перевіряє чи такий атрибут є
// console.log(link.getAttribute('target')); // отримує і повертає значення такого атрибуту
// link.setAttribute('disabled', ''); // встановлює атрибут // rel - встановлює відношення між тегом і посиланням
// // link.removeAttribute('rel'); // видаляє атрибут
// // myDiv.removeAttribute('id');
// // listContainer.removeAttribute('class');
// console.log(link.attributes[1]); // повертає всі атрибути
// console.log(link);
// console.log(myDiv);
// console.log(listContainer);

// створення елементів

// append/prepend - додають дочірні елементи всередину нашого елементу
// let div = document.createElement("div");
// div.prepend("Some text");
// div.prepend("Headline: ");
// div.prepend("lets start!: ");
// console.log(div);
{/* <div>lets start!: Headline: Some text</div> */}

// console.log(div.textContent);

// div.append("Some text");
// div.append("Headline: ");
// div.append("lets start!: ");
{/* <div>Some textHeadline: lets start!: </div> */}

// let div = document.createElement("div");
// let p = document.createElement("p");
// div.prepend("Some text", p);

// console.log(div);
// console.log(div.childNodes);

// before/after - додають сусідів нашому елементу !!! батьківському елементу ми його не добавляємо вручну
// let container = document.createElement("div");
// let p = document.createElement("p");
// container.appendChild(p);
// let span = document.createElement("span");

// // p.before(span);
// p.after(span);

// console.log(container);
// console.log(container.outerHTML);

//додавання в кінець
// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node); //append() дозволяє додавати декілька елементів, а appendChild() лише один
// console.log(para);
// const element = document.querySelector("#div1");
// element.appendChild(para);

// додавання на початок
// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);
// const element = document.querySelector("#div1");
// const child = document.querySelector("#p2");
// element.insertBefore(para,child);


// function myFunction() {
//     // видалення елемента
//     // document.querySelector("#p2").remove();
//     // видалення дочірнього елемента
//     const parent = document.querySelector("#div1");
//     const child = document.querySelector("#p1");
//     parent.removeChild(child);
//     }



// // заміна елемента
// const parent = document.querySelector("#div1");
// const child = document.querySelector("#p1");
// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node); // <p>This is new.</p> 228-230
// console.log(para);
// parent.replaceChild(para,child);

// insertAdjacentHTML
// insertAdjacentHTML(position, text)
// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->

// function myFunction() {
//     const h2 = document.querySelector("#myH2");
//     let html = "<p>My new paragraph.</p>";
//     h2.insertAdjacentHTML("beforebegin", html);
//     // insertAdjacentElement(приймає лише один елемент - як appendChild) // insertAdjacentText
//   }