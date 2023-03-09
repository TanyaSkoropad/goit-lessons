'use strict';

import axios from 'axios'

/*
 * Method (POST). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

const createUser = newUser => {
    return axios.post(`${BASE_URL}/users`, {
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // return fetch(`${BASE_URL}/users`, {
    //     method: 'POST',
    //     body: JSON.stringify(newUser),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(response => {
    //     if(!response.ok) {
    //         throw new Error(response.status);
    //     }
    //     return response.json();
    // })
}

createUser({
    name: 'Warren Soto',
    username: 'Antonette',
    email: 'votutor@vorildo.cd',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: null,
    website: null,
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  }).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})

  