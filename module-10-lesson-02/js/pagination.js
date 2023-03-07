// 'use strict';
// https://jsonplaceholder.typicode.com/

// завантажити перші 10 постів на сторінку
// підвантажувати пости після кліку на кнопку

import createPostsCards from '../templates/posts.hbs';
import {JsonplaceholderAPI} from './jsonplaceholder-api';

const jsonplaceholderAPI = new JsonplaceholderAPI();

const jsPosts = document.querySelector('.js-posts');
const loadMoreButton = document.querySelector('.js-load-more');

const renderPosts = () => {
    jsonplaceholderAPI.fetchPosts().then(posts => {
        jsPosts.innerHTML = createPostsCards(posts);
    }).catch(postsError => {
        console.log(postsError)
    })
}

renderPosts();

const onLoadMore = () => {
    jsonplaceholderAPI.page += 1;
    jsonplaceholderAPI.fetchPosts().then(posts => {
        jsPosts.insertAdjacentHTML('beforeend', createPostsCards(posts));
    }).catch(postsError => {
        console.log(postsError)
    })
}

loadMoreButton.addEventListener('click', onLoadMore)



