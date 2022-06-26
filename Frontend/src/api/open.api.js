import axios from 'axios.config.js';

export const login = (authObj) => axios.post('/login', authObj);
export const register = (userObj) => axios.post('/register', userObj);