'use strict';
// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashAPI();

const appendRandomPhotos = async () => {
  try {
    const response = await unsplashApi.fetchRandomPhotos();

    galleryListEl.innerHTML = createGalleryCards(response.data);
  } catch (err) {
    console.log(err);
  }
};

appendRandomPhotos();

const onSearchFormSubmit = async event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['user-search-query'].value;
  unsplashApi.query = searchQuery;
  unsplashApi.page = 1;

  try {
    const photosResponse = await unsplashApi.fetchPhotos();

    galleryListEl.innerHTML = createGalleryCards(photosResponse.data.results);
    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

const onLoadMoreBtnClick = async event => {
  unsplashApi.page += 1;

  try {
    const photosResponse = await unsplashApi.fetchPhotos();

    if (unsplashApi.page === photosResponse.data.total_pages) {
      loadMoreBtnEl.classList.add('is-hidden');
    }

    galleryListEl.insertAdjacentHTML('beforeend', createGalleryCards(photosResponse.data.results));
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);