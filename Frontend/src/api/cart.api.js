import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['authentication'] = localStorage.getItem('authentication');

export const createCart = (cartObj) => axios.post(`/carts`, cartObj);
export const fetchCarts = () => axios.get(`/carts`);
export const fetchCart = (id) => axios.get(`/carts/${id}`);
export const addToCart = (id, itemObj) => axios.put(`/carts/${id}`, itemObj);
export const purchase = (id) => axios.get(`/carts/${id}/purchase`);
