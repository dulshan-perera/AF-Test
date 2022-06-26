import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['authentication'] = localStorage.getItem('authentication');

export const addPromotion = (promoObj) => axios.post(`/promotions`, promoObj);
export const fetchPromotions = () => axios.get(`/promotions`);
export const fetchPromotion = (id) => axios.get(`/promotions/${id}`);
