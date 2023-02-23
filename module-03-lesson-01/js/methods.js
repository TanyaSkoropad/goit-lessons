'use strict';

// методи об'єкту і ключове слово this(контекст виклику)

// console.log(this);

// function sayHi1(){
//   console.log(this); // undefined
// }

// sayHi1();

const filmDuna = {
  title: 'Duna',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?',
  rating: 10,
  actors: [
    'Rosetta Pena',
    'Clayton Crawford',
    'Larry Norton',
    'Georgia Garrett',
    'Jackson Ballard',
  ],
  adult: false,

  returnThis(){
    console.log(filmDuna);
  },

  changeTitle(newTitle) {
    this.title = newTitle;
  },

  addActor(newActor) {
    filmDuna.actors.push(newActor);
  },

  updateRating(newRating) {
    if(this.description && this.adult) {
      this.rating = newRating;
    }
  },

  isAdult() {
    return this.adult;
  },
};

// filmDuna.returnThis();
// filmDuna.changeTitle('Matrix');
// filmDuna.addActor('Eddie');
// filmDuna.updateRating(8);
// filmDuna.rating = 8;
// console.log(filmDuna.isAdult());

// console.log(filmDuna);