import { client } from './index.js';
const customers = client.db('customers').collection('customers')

//register customers
const save = async({id ,name, phone, email}) =>{
    const result = await customers.insertOne({id, name, phone, email});
    return result;
}