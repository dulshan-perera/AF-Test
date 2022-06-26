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

//purchase
const purchase = async(id) =>{
    const cart = await getById(id);
    if(cart !== null) {
        let length = cart.items.length;
        console.log(cart.items.length)
        let total = 0;
        for(let i = 0; i<length; i++){
            total = total + cart.items[i].price;
        }
        return total;
    }
}

export {createCart, fetchCarts, fetchCart, addToCart, purchase}