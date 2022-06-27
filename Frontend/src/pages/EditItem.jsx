import React, { useState } from "react";
import { useMatch } from "react-router-dom";
import { updateItem } from "../api/item.api";

export default EditItem = () =>{
    const match = useMatch('/item/:id')
    const itemId = match.params.id;
    const [item, setItem] = useState({
        name:"",
        price:""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        const updatedPrice = parseInt(item.price)
        item.price = updatedPrice;
        updateItem(itemId, item).then((res) =>{
            console.log(res)
            window.location = '/inventory/:cartid/:listid'
        }).catch((error) =>{
            console.log(error)
        })
    }

    return (
        <div>
            <h2>Edit Item</h2>
            <form>
                <label>Enter Item name</label>
                <input type="text" name='name' value={item.name} onChange={(e) => setItem({...item, name:e.target.value})}/> <br/>
                <label>Enter Item Price</label>
                <input type="text" name="price" value={item.price} onChange={(e) => setItem({...item, price:e.target.value})}/> <br/>
                
                <button type='submit' onClick = {handleSubmit}>Update</button>
            </form>
        </div>
    )
}