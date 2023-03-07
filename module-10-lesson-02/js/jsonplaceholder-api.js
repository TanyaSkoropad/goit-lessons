'use strict';

export class JsonplaceholderAPI {
    #BASE_URL = 'https://jsonplaceholder.typicode.com'


    constructor(){
        this.page = 1;
    }


    fetchPosts(){
        return fetch(`${this.#BASE_URL}/posts?_limit=10&_page=${this.page}`).then(response => {
             if(!response.ok) {
             throw new Error(response.status);
        }
            return response.json();
        })
    }
}