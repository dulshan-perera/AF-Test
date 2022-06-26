import {v4 as uuidv4} from 'uuid';
import { getById, getItems, save, updateById } from "../dal/item.dao.js";

//additem
const addItem = async(item) =>{
    const id = uuidv4();
    item.id = id;
    return await save(item);
}

//fetch Items
const fetchItems = async() =>{
    return await getItems();
}

//fetch Item
const fetchItem = async(id) =>{
    return await getById(id);
}

//update Item 
const updateItem = async(id, item) =>{
    return await updateById(id, item);
}

export {addItem, fetchItems, fetchItem, updateItem}

