import axios from "axios";

// ----------------------- initial Axios ----------------------- //

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosClient;