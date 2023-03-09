'use strict';

export class UnsplashAPI {
    #BASE_URL = 'https://api.unsplash.com'
    #API_KEY = 'RbXevfa1NtS9dP8Ai4H9KAdtwLwLauyauhvo2uRqwuY'

    constructor(){
        this.page = 1;
        this.query = null;
    }

    fetchPhotos(){
        const params = new URLSearchParams({
            query: this.query,
            page: this.page,
            per_page: 50,
            client_id: this.#API_KEY,
            color: 'yellow'
        });
        return fetch(`${this.#BASE_URL}/search/photos?${params}`).then(response => {
            if(!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
        })
    }
}


// #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';