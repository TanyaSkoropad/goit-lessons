'use strict';

const BASE_URL = 'http://api.weatherbit.io/v2.0/current';
const API_KEY = 'ec0e38ec174d48269bd0735419124275';

export const fetchWeatherByCityName = cityName => {
    return fetch(`${BASE_URL}?city=${cityName}&lang=uk&key=${API_KEY}`).then(response => {
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })
}