import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['authentication'] = localStorage.getItem('authentication');

export const addItem = (itemObj) => axios.post(`/items`, itemObj);
export const fetchItems = () => axios.get(`/items`);
export const fetchItem = (id) => axios.get(`/items/${id}`);
export const updateItem = (id, itemObj) => axios.put(`/items/${id}`, itemObj);
