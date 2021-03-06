import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['authentication'] = localStorage.getItem('authentication');

export const fetchUser = (id) => axios.get(`/users/${id}`);
export const fetchCustomers = (role) => axios.get(`/users/customers/${role}`);