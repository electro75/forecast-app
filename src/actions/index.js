import axios from 'axios';

const API_KEY = '21c4b257fe14f6d3d7e80a135c49ca72';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    console.log('request: ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}