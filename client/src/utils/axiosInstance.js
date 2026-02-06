
import axios from "axios";

import { BASE_URL } from "./apiPath";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})

// Request Interceptor
axiosInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("token")
    if (accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`
    return config;
}, error => Promise.reject(error)
);

// Response Interseptor
axiosInstance.interceptors.response.use((response) => {
    return response

}, (error) => {
    // Handle Comman Error globally 
    if (error.response) {
        if (error.response.status === 401) {
            // Only redirect to login if it's not a weather API error
            // We don't want to log out the user just because the weather key is pending
            if (!error.config.url.includes('/api/weather')) {
                window.location.replace("/login");
            }
        } else if (error.response.status === 500) {
            console.error("Server Error : Please try again later .. ");

        }
    } else if (error.code === "ECONNABORTED") {
        console.error("Request TimeOut : Please try again.");
    }
    return Promise.reject(error)
})

