import axios from 'axios'

export const fetcher = axios.create({
    withCredentials: true,

    baseURL: process.env.NODE_ENV === 'production' ? 'https://config-production.up.railway.app' : 'http://localhost:8000',
})
