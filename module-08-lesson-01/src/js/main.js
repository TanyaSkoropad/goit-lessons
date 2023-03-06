'use strict'

// node -v - перевірити версію
// node your_file - запустити файлик
// npm init - створити package.json
// npm init -y - без опису
// npm install - встановлюємо пакети всі, які є у package.json
// npm install your_package - встановлює необхідний пакет(додає у package.json та додає у папку node_modules)
// npm install your_package@specific_version - встановлює пакет з конкретною версією
// npm unisntall your_package - видаляє з package.json та node_modules усі залежності
// npm update - оновить усі пакети що є в проекті
// npm cache clean
// npm outdated
//
// package.json - опис програми та її залежностей у форматі JSON(слідкує за змінами локацій наших файлів)
// після npm install встановлюється package-lock.js - має в собі пакети, які потрібні тим пакетам, що встановлені у package.json
// якщо перед версією стоїть ^ - значить що коли ми знову зробимо install завантажеться нова версія, яка актуальна зараз, тобто
// може бути від 1.2.3 до 2.0.0
// якщо ~ то від 1.2.3 до 1.3.0
// main властивість - початкова точка, звідки почне працювати проект
// repository - це масив, який визначає, де знаходиться вихідний код для модуля. Як правило, це публічне сховище GitHub для проектів з відкритим кодом.
// scripts - ключі, по яким можна використовувати різні  складні команди
// npm run run-me - запустити команду (start i test можна без run)
// npx postcss src/css/styles.css --use autoprefixer -d build/css
//
// "dependencies": пакети, необхідні для вашої програми у продакшині(наприклад для браузера, коли програма вже запущена).
// "devDependencies": пакети, які потрібні лише для локальної розробки та тестування.
//
// browserslist властивість або .browserslistrc файл
// babel library

// "build": "npm run autoprefixer && npm run babel" - обєднати два пакети

//
// webpack - https://www.taniarascia.com/how-to-use-webpack/
//
// EcmaScript Modules (ESM)
// «Named export» та «Default export» - типи експорту
// два дефолти бути не може

// EditorConfig - застосовує правила ПІД час напсиання коду
// Prettier - застосовує правила коли вже ВЖЕ написаний
// ESLint - показує на речі, повязані з самим кодом, а не з його викладом(змінна, що не використовується)

// dev vs prod

// parcel
// збірник проектів
// https://parceljs.org/getting-started/webapp/
// створює файли, у папку dist, які потім запускатиме, в них в назві буде хеш код -
// код для парселя, таким чином він запамятовує наші файли і швидше їх знаходить
// також створює parcel-cache - ця папка містить інформацію для нього самого
// якщо падає помилка - потрібно виходити з поточного білду і запускати команду ще раз
// дуже легко працює з sass, сам його компіляє без додаткових бібліотек
// dist папку не закидуємо на гітхаб, закидуємо лише ті файли, які написали самі -
// інший розробник запустить npm run build і в нього створяться його власні файли

// import {square, diag} from "module_files";
// import myFileName from "./module_files"; /// default
// import * as myModule from "./module_files"; // namespace
// import myFunc from "./module_files"; // namespace

// console.log(myModule.square(1));
// console.log(myModule.diag(1,2));
// console.log(myModule.diag(1,2))

// console.log(myFunc);

// console.log('Interesting!');
//
//
// // Create heading node
// const heading = document.createElement('h1');
// heading.textContent = 'Interesting!!'
//
// // Append heading node to the DOM
// const app = document.querySelector('#root')
// app.append(heading);

// console.log('Here I am!');
//
// console.log(1+2);
//
// const myFunc = ()=>{
//     console.log(myFunc);
// }
//
// myFunc()


console.log('I am from js');
