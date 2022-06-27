import React from "react";

export default Nav = () =>{

    const logout = () =>{
        localStorage.removeItem('authentication');
        window.location='/login'
    }
    const home = () =>{
        window.location='/'
    }
    const login = () =>{
        window.location='/login'
    }
    const signup = () =>{
        window.location='/register'
    }

    return (
        <div>
            {
                localStorage.authentication?
                <>
                    <button onClick={home}>HOME</button><br/>
                    <button onClick = {logout}>LOGOUT</button>
                </>:
                <>
                    <button onClick={login}>LOGIN</button><br/>
                    <button onClick = {signup}>SIGNUP</button>
                </>
            }
            
        </div>
    )
}