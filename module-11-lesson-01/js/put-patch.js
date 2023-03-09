'use strict';

/*
 * Method(PUT/PATCH). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

const updateUserById = (userId, infoForUpdate) => {
    const options = {
        method: 'PUT',
        body: JSON.stringify(infoForUpdate),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${BASE_URL}/users/${userId}`, options).then(response => {
        if(!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
}

updateUserById(55, {name: 'Oleh', email: 'oleh@mail.com'}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})
