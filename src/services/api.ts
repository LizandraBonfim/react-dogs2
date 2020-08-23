import axio from 'axios';
import Constants from '../Shared/Constants';


const api = axio.create({
    baseURL:  `${Constants.URL_BASE}/api`,
    headers: [
        { 'Content-Type': 'application/json' }
    ]    
});



export default api;