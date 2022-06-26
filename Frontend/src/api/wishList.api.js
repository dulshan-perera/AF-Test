import axios from 'axios.config.js';

export const createList = (listObj) => axios.post(`/lists`, listObj);
export const fetchLists = () => axios.get(`/lists`);
export const fetchList = (id) => axios.get(`/lists/${id}`);
export const addToList = (id, itemObj) => axios.put(`/lists/${id}`, itemObj);
