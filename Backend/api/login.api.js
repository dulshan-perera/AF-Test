import { authenticate } from "../dal/login.dao.js";
import jwt  from "jsonwebtoken";

const login = async(creds) =>{
    const result = authenticate(creds);
    const email = creds.email;
    const password = creds.password;
    if(result !== null){
        const authBody = {email, password}
        const accessToken = jwt.sign(authBody, process.env.AUTH_SECRET);
        return accessToken;
    }else{
        return "Login failed!"
    }
}

export {login}