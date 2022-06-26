import {v4 as uuidv4} from 'uuid';
import { save, getAll, getById, add } from '../dal/wishList.dao.js';

//create list
const createWishList = async(list) =>{
    const id = uuidv4();
    list.id = id;
    return await save(list);
}

//fetchLists
const fetchLists = async() =>{
    return await getAll();
}

//fetchlist
const fetchList = async(id) =>{
    return await getById(id);
}

//addToList
const addToList = async (id, item) =>{
    return await add(id, item);
}

export {createWishList, fetchLists, fetchList, addToList}