import axios from 'axios.config.js'

export const addPromotion = (promoObj) => axios.post(`/promotions`, promoObj);
export const fetchPromotions = () => axios.get(`/promotions`);
export const fetchPromotion = (id) => axios.get(`/promotions/${id}`);
