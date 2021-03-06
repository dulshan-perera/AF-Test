import { client } from './index.js';
const users = client.db('users').collection('users')

//register users
const save = async({id ,name, phone, email, password, role}) =>{
    const result = await users.insertOne({id, name, phone, email, password, role});
    return result;
}

//fetch user
const getById = async id =>{
    return await users.findOne({id});
}

//fetch user by role
const getByRole = async role =>{
    return await users.find({role}).toArray();;
}

export {save, getById, getByRole};