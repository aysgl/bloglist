import axios from "axios";

export const Api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

Api.interceptors.response.use(
    res => res,
    err => {
        if (err.response.status === 401) {
            window.location.href = '/';
        }
    });

export default Api;