import axios from "axios";

// ----------------------- initial Axios ----------------------- //

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})



// ----------------------- initial JWT ----------------------- //

axiosClient.interceptors.request.use((config) => {
    if(typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})



export default axiosClient;