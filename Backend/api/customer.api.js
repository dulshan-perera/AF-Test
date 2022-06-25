import {v4 as uuidv4} from 'uuid';
import {getById, save} from '../dal/customer.dao.js';

//register customer
const registerCustomer = async(customer) =>{
    const id = uuidv4();
    customer.id = id;
    return await save(customer);
}

//fetch customer
const fetchCustomer = async (id) =>{
    return await getById(id);
}

export {registerCustomer, fetchCustomer};