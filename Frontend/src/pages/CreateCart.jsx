import React, { useState } from "react";
import { createCart } from "../api/cart.api";

export default CreateCart = () =>{
    const [cart, setCart] = useState({
        id:"",
        name:"",
        items:[]
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        let cartId = new Date().getTime().toString(36);
        cart.id = cartId;
        createCart(cart).then((res) =>{
            console.log(res)
            window.location=`/inventory/${cartId}/:listid`
        }).catch((error) =>{
            console.log(error)
        })
    }

    return(
        <div>
            <h2>Create Cart</h2>
            <form>
                <label>Enter Cart name</label>
                <input type="text" name='name' value={cart.name} onChange={(e) => setCart({...cart, name:e.target.value})}/> <br/>
            
                <button type='submit' onClick = {handleSubmit}>Submit</button>
            </form>
        </div>
    )
}