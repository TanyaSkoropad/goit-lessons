'use strict';
// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const unsplashAPI = new UnsplashAPI();

// unsplashAPI.fetchPhotos().then(data => {
//     console.log();
// }).catch(error => {
//     console.log(error);
// })

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const onSubmitForm = async (event) => {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements['user-search-query'].value.trim();
    unsplashAPI.query = searchQuery;
    try {
        const photos = await unsplashAPI.fetchPhotos();
        if(photos.results.length === 0) {
            galleryListEl.innerHTML = '';
            loadMoreBtnEl.classList.add('is-hidden');
            alert('Таких фотографій не знайдено');
            event.target.reset();
            return;
        }
        galleryListEl.innerHTML = createGalleryCards(photos.results);
        loadMoreBtnEl.classList.remove('is-hidden');
    } catch (error){
        console.log(error);
    }
    
    // unsplashAPI.fetchPhotos().then(data => {
    //     if(data.results.length === 0) {
    //         galleryListEl.innerHTML = '';
    //         loadMoreBtnEl.classList.add('is-hidden');
    //         alert('Таких фотографій не знайдено');
    //         event.target.reset();
    //         return;
    //     }
    //     galleryListEl.innerHTML = createGalleryCards(data.results);
    //     loadMoreBtnEl.classList.remove('is-hidden');
    // }).catch(error => {
    //     console.log(error);
    // })
}

const onLoadMore = async event => {
    try {
        unsplashAPI.page += 1;
        const data = await unsplashAPI.fetchPhotos()
        if(data.total_pages === unsplashAPI.page) {
            loadMoreBtnEl.classList.add('is-hidden');
        }
        galleryListEl.insertAdjacentHTML('beforeend',createGalleryCards(data.results));
    } catch(error) {
        console.log(error);
    }
}

searchFormEl.addEventListener('submit', onSubmitForm);
loadMoreBtnEl.addEventListener('click', onLoadMore)

