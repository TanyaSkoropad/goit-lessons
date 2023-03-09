'use strict';

import axios from 'axios'
// const axios = require('axios');

/*
 * Method (GET).
 */

const BASE_URL = 'http://localhost:3000';

const getUsers = () => {
    const params = new URLSearchParams({
        _limit: 4
    })
    return axios.get(`${BASE_URL}/comments`, {
        params
    })
    // return fetch(`${BASE_URL}/comments`, {
    //     method: 'GET'
    // }).then(response => {
    //     if(!response.ok) {
    //         throw new Error(response.status);
    //     }
    //     return response.json();
    // })
}

getUsers().then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})
  