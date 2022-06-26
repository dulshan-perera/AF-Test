import {v4 as uuidv4} from 'uuid';
import {getById, save} from '../dal/user.dao.js';

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

export {registerUser, fetchUser};