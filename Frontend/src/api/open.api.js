import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['authentication'] = localStorage.getItem('authentication');

export const login = (authObj) => axios.post('/login', authObj);
export const register = (userObj) => axios.post('/register', userObj);