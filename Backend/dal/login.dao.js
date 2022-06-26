import {client} from './index.js';
const customers = client.db('customers').collection('customers')

const authenticate = async({email, password}) =>{
    const filter = {email, password}
    const result = await customers.findOne(filter);
    return result;
}

export {authenticate}