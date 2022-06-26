import {client} from './index.js';
const cart = client.db('carts').collection('carts');

//create cart
const save = async (cartObj)=>{
    const result = await cart.insertOne(cartObj);
    return result;
}

//fetchcarts
const getAll = async() =>{
    return await cart.find().toArray();
}

//fetchCart
const getById = async id =>{
    return await cart.findOne({id});
}

//addToCart
const add = async (id, item) =>{
    const itemObj = {
        name:item.name,
        price:item.price
    }
    return await cart.findOneAndUpdate({id}, {$push:{items:itemObj}})
}

export {save, getAll, getById, add}
