import React, { useEffect, useState } from "react";
import { getAuth } from "../helper/auth";

export default Home = () =>{
    const [role, setRole] = useState('');
    useEffect(() =>{
        if(localStorage.authentication !== null){
            setRole(getAuth(localStorage.authentication).role);
        }
    })
        return role === 'customer'? (
            <div>
                <h2>Welcome Home {role}</h2>
                
            </div>
        ):role === 'trader' ?(
            <div>
                <h2>Welcome Home {role}</h2>
            </div>
            
        ):(
            <div>
                <h2>Loading.....</h2>
            </div>
        )
}