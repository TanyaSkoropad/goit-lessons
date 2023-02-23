'use strict';

// Патерн об'єкт параметрів
// Замість того, щоб передавати безліч різних значень окремо, потрібно передавати їх одним об'єктом

const logFunction = function (userInfo) {
  const { firstName, lastName, age, gender, userEmail, userPhoneNumber } = userInfo;

  console.log(firstName, lastName, age, gender, userEmail, userPhoneNumber);
};

logFunction({
  firstName: 'Amelia',
  lastName: 'Burgess',
  age: 30,
  gender: 'female',
  userEmail: 'apjez@eh.aq',
  userPhoneNumber: '(096) 35-21-476',
});

// logFunction(firstName, lastName, age, gender, userEmail, userPhoneNumber);