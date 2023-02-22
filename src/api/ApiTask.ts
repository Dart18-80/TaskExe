import axios from 'axios';

const ApiTask = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export default ApiTask;