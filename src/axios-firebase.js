import axios from 'axios';

const instance = axios.create({
    baseURL:'https://hoodies-shopping-app-default-rtdb.firebaseio.com/'
})

export default instance;