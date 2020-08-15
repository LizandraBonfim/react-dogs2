import axio from 'axios';

const api = axio.create({
    baseURL: "https://localhost:5001/api",
    headers: [
        { 'Content-Type': 'application/json' }
    ]
});



export default api;