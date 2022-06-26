import axios from 'axios.config.js';

export const createCart = (cartObj) => axios.post(`/carts`, cartObj);
export const fetchCarts = () => axios.get(`/carts`);
export const fetchCart = (id) => axios.get(`/carts/${id}`);
export const addToCart = (id, itemObj) => axios.put(`/carts/${id}`, itemObj);
export const purchase = (id) => axios.get(`/items/${id}`);
