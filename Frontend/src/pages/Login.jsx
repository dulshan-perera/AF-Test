import React, { useState } from "react";
import { login } from "../api/open.api";
import { getAuth } from "../helper/auth";

export default Login = () =>{
   
    const [creds, setCreds] = useState({
        email:"",
        password:""
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        login(creds).then((res) =>{
            console.log(res)
            if(res.data.accessToken !== null){
                localStorage.setItem('authentication', res.data.accessToken);
                    window.location='/';
            }
        })
    }
    return(
        <div className="container">
            <h2>LOGIN</h2>
            <br/>
            <label>Email</label>
            <input type="text" id="email" value={creds.email} onChange={(e) => setCreds({...creds, email:e.target.value})}/><br/>
            <label>Password</label>
            <input type="text" id="password" value={creds.password} onChange={(e) => setCreds({...creds, password:e.target.value})}/><br/>
            <button type="submit" onClick={handleSubmit}>LOGIN</button>
        </div>
    )
    
}