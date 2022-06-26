import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['authentication'] = localStorage.getItem('authentication');

export const createList = (listObj) => axios.post(`/lists`, listObj);
export const fetchLists = () => axios.get(`/lists`);
export const fetchList = (id) => axios.get(`/lists/${id}`);
export const addToList = (id, itemObj) => axios.put(`/lists/${id}`, itemObj);
