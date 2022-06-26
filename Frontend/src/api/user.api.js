import axios from 'axios.config.js'

export const fetchUser = (id) => axios.get(`/users/${id}`);