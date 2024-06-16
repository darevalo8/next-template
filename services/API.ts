import axios from 'axios';
const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    // timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
        // 'Authorization': `Bearer ${token}`
    }
});

API.interceptors.request.use(function (config) {
    // Obtener el token dentro del interceptor asegura que se ejecute en el lado cliente
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default API;
