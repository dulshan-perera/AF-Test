import {client} from './index.js';
const list = client.db('wishlists').collection('wishlists');

//create wishlist
const save = async (listObj)=>{
    const result = await list.insertOne(listObj);
    return result;
}

//fetchWishlist
const getAll = async() =>{
    return await list.find().toArray();
}

//fetchList
const getById = async id =>{
    return await list.findOne({id});
}

//addToList
const add = async (id, item) =>{
    const itemObj = {
        name:item.name,
        price:item.price
    }
    return await list.findOneAndUpdate({id}, {$push:{items:itemObj}})
}
export {save, getAll, getById, add}
