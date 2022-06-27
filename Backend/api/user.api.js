import {v4 as uuidv4} from 'uuid';
import {getById, getByRole, save} from '../dal/user.dao.js';

//register user
const registerUser = async(user) =>{
    const id = uuidv4();
    user.id = id;
    return await save(user);
}

//fetch user
const fetchUser = async (id) =>{
    return await getById(id);
}

//fetch user from role 
const fetchCustomers = async(role) =>{
    return await getByRole(role)
}

export {registerUser, fetchUser, fetchCustomers};