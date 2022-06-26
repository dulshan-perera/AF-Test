import React, { useEffect, useState } from "react";
import { getAuth } from "../helper/auth";

export default Home = () =>{
    const [role, setRole] = useState('');
    useEffect(() =>{
        if(localStorage.authentication !== null){
            setRole(getAuth(localStorage.authentication).role);
        }
    })
        return(
            <div>
                <h2>HOME helloo {role}</h2>
            </div>
        )
}