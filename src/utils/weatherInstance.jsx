import axios from "axios";


const weatherApiInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    
})

export default weatherApiInstance