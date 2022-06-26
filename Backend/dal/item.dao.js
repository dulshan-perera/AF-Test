import {client} from './index.js';
const item = client.db('items').collection('items');

//addItem
const save = async(itemObj) =>{
    const result = await item.insertOne({itemObj});
    return result;
}

//fetch all Items
const getItems = async() =>{
    return await item.find().toArray();
}

//fetch Item
const getById = async id =>{
    return await item.findOne({id});
}

//update item
const updateById = async(id, itemObj) =>{
    const result = item.findOneAndUpdate({id}, {$set:itemObj})
    return result;
}

export {save, getItems, getById, updateById}

