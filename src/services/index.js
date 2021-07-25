import Axios from 'axios';

export const apiInstance = Axios.create(
    {
        baseURL: 'https://api.spotify.com/v1',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
);

apiInstance.interceptors.request.use(
    async config => {
        const token = await sessionStorage.getItem('token');
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    error => { return Promise.reject(error); }
)