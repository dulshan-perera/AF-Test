import {client} from './index.js';
const users = client.db('users').collection('users')

const auth = async({email, password}) =>{
    const filter = {email, password}
    const result = await users.findOne(filter);
    return result;
}

export {auth}