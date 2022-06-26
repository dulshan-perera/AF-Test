import { authenticate } from "../dal/login.dao.js";
import jwt  from "jsonwebtoken";

const login = async(creds) =>{
    const result = await authenticate(creds);
    if(result !== null){
        const email = result.email;
        const id = result.id;
        const role = result.role
        const authBody = {email, id, role}
        const accessToken = jwt.sign(authBody, process.env.AUTH_SECRET);
        return {accessToken, role};
    }else{
        return "Login failed!"
    }
}

export {login}