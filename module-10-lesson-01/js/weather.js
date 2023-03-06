// https://www.weatherbit.io/api
// import {fetchWeatherByCityName} from './weather-api.js';

// const weatherFormEl = document.querySelector('.js-search-form');
// const cityName = document.querySelector('.city-name');
// const temp = document.querySelector('.temp');
// const feelsLikeTemp = document.querySelector('.feels-like-temp');
// const sunrise = document.querySelector('.sunrise-time');
// const sunset = document.querySelector('.sunset-time');
// const clouds = document.querySelector('.clouds');

// const onWeatherFormSubmit = event => {
//     event.preventDefault();

//     const searchQuery = event.currentTarget.elements['user_country'].value.trim();
//     console.log(searchQuery);
//     fetchWeatherByCityName(searchQuery).then(cityInfo => {
//         console.log(cityInfo);
//         cityName.textContent = cityInfo.data[0].city_name;
//         temp.textContent = cityInfo.data[0].temp;
//         feelsLikeTemp.textContent = cityInfo.data[0].app_temp;
//         sunrise.textContent = cityInfo.data[0].sunrise;
//         sunset.textContent = cityInfo.data[0].sunset;
//         clouds.textContent = cityInfo.data[0].clouds;
//     }).catch(error => {
//         console.log(error);
//     })
// }

// weatherFormEl.addEventListener('submit', onWeatherFormSubmit);
