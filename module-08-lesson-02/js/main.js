'use strict'

// JSON (JavaScript Object Notation)
// ключі і значення у лапках(як тип string)
// всі значення вважаються стрічкою але можуть містити:
// число, стрічку, буліан, об'єкт, масив, null
// Формат JSON синтаксично схожий на код для створення об’єктів JavaScript.
// Тому можна легко конвертувати дані JSON в об’єкти JavaScript. 
// Оскільки це лише текстовий формат, дані JSON можна легко пересилати між комп’ютерами та використовувати будь-якою мовою програмування.
// !! Функції ігноруються, оскільки вони не входять до зрозумілих даних для JSON


// JSON.stringify(data-to-JSON)
// робить формат JSON з переданих їй даних
// можна застосовувати до всіх даних, які сприймаються JSON

const user = {
    name: 'oleh',
    age: 30,
    children: [1, 2, 3, ['grandchild']],
    newCar: null,
    job: {
        responsibility: 'Manager'
    },
    getChildren(){
        console.log(this.children)
    },
    newHouse: undefined
}

// console.log(user);
// console.log(JSON.stringify(user));



// function showUser(){
//     console.log(this.user);
// }

// const myString = 'Tania'

// console.log(user);
// console.log(JSON.stringify(user));
// console.log(JSON.stringify(myString));
// console.log(JSON.stringify(null));
// console.log(JSON.stringify(showUser));
// console.log(JSON.stringify(()=>console.log(this.user)));

//JSON.parse(JSON-to-data)
// перетворює у формат зрозумілий для JS із JSON

// const json = '{"name":"Mango","age":3,"isHappy":true}';
// const jsonArray = '["name", "mango", {"name":"Mango","age":3,"isHappy":true}]';
// const jsonString = 'Mango'
// const jsonString1 = '"Mangooo"'

// const parsedJSON = JSON.parse(json);
// console.log(parsedJSON); // {name: "Mango", age: 3, isHappy: true}
// console.log(parsedJSON.name); // "Mango"
// console.log(JSON.parse(jsonArray))
// console.log(JSON.parse(jsonString))

// try{}catch(){}
// якщо знаходить помилку - try переривається і далі дії не виконуються, відразу переходить до catch

// const data = JSON.parse("String can't be parsed");
// console.log("Log after error");

// try {
//     const data = JSON.parse("String can't be parsed");
//   } catch (jsonError) {
//     console.log(jsonError);
//     console.log(jsonError.name);
//     console.log(jsonError.message);
//   }
  
//   console.log("Log after error");

// localStorage.setItem('language', 'en');
// localStorage.setItem('theme', 'dark');
// localStorage.setItem('location', 'Odesa');
// const lsArray = ['Odesa', 'Lviv', 'Kharkiv']
// localStorage.setItem('locations', JSON.stringify(lsArray))
// const userFromLS = localStorage.getItem('user');
// console.log(JSON.parse(localStorage.getItem('user')));
// localStorage.removeItem('language1');
// console.log(localStorage.clear());

