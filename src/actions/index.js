import axios from 'axios';

const API_KEY = 'd731c7ed4999b0ef4d8a71f8b28f22e1';
const URL_REQUEST = `https://crossorigin.me/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${URL_REQUEST}&q=${city}&units=metric`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}