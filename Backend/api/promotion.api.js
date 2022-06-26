import {v4 as uuidv4} from 'uuid';
import { save, getAll, getById } from '../dal/promotion.dao.js';

//addPromotion
const addPromotion = async(promotion) =>{
    const id = uuidv4();
    promotion.id = id;
    return await save(promotion);
}

//fetchPromotions
const fetchPromotions = async() =>{
    return await getAll();
}

//fetchPromotion
const fetchPromotion = async(id) =>{
    return await getById(id);
}

export {addPromotion, fetchPromotion, fetchPromotions}