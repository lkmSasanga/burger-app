import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-my-burger-1b052-default-rtdb.firebaseio.com/'
});

export default instance;