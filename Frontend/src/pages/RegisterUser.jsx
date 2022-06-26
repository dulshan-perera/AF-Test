import React, { useState } from 'react'
import { register } from '../api/open.api';

export default RegisterUser = () =>{
    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:"",
        role:"",
        password:""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        register(user).then((res) =>{
            console.log(res)
        }).catch((error) =>{
            console.log(error)
        })
    }

    return(
        <div>
            <h2>Register User</h2>
            <form>
                <label>Enter name</label>
                <input type="text" name='name' value={user.name} onChange={(e) => setUser({...user, name:e.target.value})}/> <br/>
                <label>Enter Email</label>
                <input type="text" name="email" value={user.email} onChange={(e) => setUser({...user, email:e.target.value})}/> <br/>
                <label>Enter Phone</label>
                <input type="text" name="phone" value={user.phone} onChange={(e) => setUser({...user, phone:e.target.value})}/> <br/>
                <label>Enter Role</label>
                <input type="text" name="role" value={user.role} onChange={(e) => setUser({...user, role:e.target.value})}/> <br/>
                <label>Enter Password</label>
                <input type="text" name="password" value={user.password} onChange={(e) => setUser({...user, password:e.target.value})}/> <br/>
                <button type='submit' onClick = {handleSubmit}>Submit</button>
            </form>
        </div>
    )
}