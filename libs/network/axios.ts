import axios from 'axios';

export const api = axios.create({
    baseURL: '/api',
});

// Интерцепторы для обработки ошибок
api.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error.response?.data?.error || 'Произошла ошибка');
    }
);