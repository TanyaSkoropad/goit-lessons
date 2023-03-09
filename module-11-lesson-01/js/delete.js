'use strict';
/*
 * Method(DELETE)
 */

const BASE_URL = 'http://localhost:3000';

const deleteUserById = userId => {
    return fetch(`${BASE_URL}/users/${userId}`, {method: 'DELETE'}).then(response => {
        if(!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
}

deleteUserById(13).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})


