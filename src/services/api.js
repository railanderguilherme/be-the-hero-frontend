import axios from 'axios';

const api = axios.create({
    baseURL: 'https://beherorai.herokuapp.com/',
})

export default api;