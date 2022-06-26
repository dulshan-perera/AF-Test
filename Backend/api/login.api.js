import { auth } from "../dal/login.dao.js";
import jwt  from "jsonwebtoken";

const login = async(creds) =>{
    const result = await auth(creds);
    if(result !== null){
        const authBody = {
            email: result.email,
            id: result.id,
            role: result.role
        }
        const accessToken = jwt.sign(authBody, process.env.AUTH_SECRET);
        return {accessToken};
    }else{
        return "Login failed!"
    }
}

export {login}