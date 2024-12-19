import axios from 'axios'

export const fetcher = axios.create({
    withCredentials: true,

    baseURL: process.env.NODE_ENV === 'production' ? 'https://products-app-api.onrender.com' : 'http://localhost:8000/',
})
