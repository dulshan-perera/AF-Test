import {client} from './index.js';
const promotion = client.db('promotions').collection('promotions');

//add promotions
const save = async (promotionObj)=>{
    const result = await promotion.insertOne(promotionObj);
    return result;
}

//fetchPromotions
const getAll = async() =>{
    return await promotion.find().toArray();
}

//fetchPromotion
const getById = async id =>{
    return await promotion.findOne({id});
}

export {save, getAll, getById}
