import {v4 as uuidv4} from 'uuid';
import { save, getAll, getById, add } from '../dal/cart.dao.js';

//create cart
const createCart = async(cart) =>{
    const id = uuidv4();
    cart.id = id;
    return await save(cart);
}

//fetchCarts
const fetchCarts = async() =>{
    return await getAll();
}

//fetchCart
const fetchCart = async(id) =>{
    return await getById(id);
}

//addTocart
const addToCart = async (id, item) =>{
    return await add(id, item);
}

export {createCart, fetchCarts, fetchCart, addToCart}