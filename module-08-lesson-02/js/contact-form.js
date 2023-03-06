'use strict';

const save = (keyToLS, valueToLS) => {
  try {
    const value = JSON.stringify(valueToLS);
    localStorage.setItem(keyToLS, value)
  } catch(saveError){
    console.log('Save to LS error', saveError.message)
  }
}

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('Remove item error: ', error.message);
  }
};

const CONTACT_FORM_LOCAL_STORAGE_KEY = 'formData';

class User {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
}


const saveUserForm = document.querySelector('form');
const nameInput = document.querySelector('#name');

function saveToLocalstorage(event){
  event.preventDefault();
  console.log(event.currentTarget.elements.age.value);
  
  const user = new User(
    document.querySelector('#name').value,
    document.querySelector('#lastname').value,
    document.querySelector('#age').value,
  )

  console.log(user);
  save(CONTACT_FORM_LOCAL_STORAGE_KEY, user)
}


saveUserForm.addEventListener('submit', saveToLocalstorage)

const getFromLocalstorage = (event) => {
    const savedData = load(CONTACT_FORM_LOCAL_STORAGE_KEY);
    console.log(savedData);
    for(let key in savedData) {
        document.querySelector(`#li-${key}`).textContent = savedData[key]
    }
}
document.querySelector('#getFromLS').addEventListener('click', getFromLocalstorage);

const removeFromLocalstorage = (event) => {
    remove(CONTACT_FORM_LOCAL_STORAGE_KEY)
}

document.querySelector('#removeFromLS').addEventListener('click', removeFromLocalstorage);
