import { client } from './index.js';
const customers = client.db('customers').collection('customers')

//register customers
const save = async({id ,name, phone, email, password}) =>{
    const result = await customers.insertOne({id, name, phone, email, password});
    return result;
}

//fetch customer
const getById = async id =>{
    return await customers.findOne({id});
}

export {save, getById};