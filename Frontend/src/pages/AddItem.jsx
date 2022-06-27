import React, {useState} from "react";
import { addItem } from "../api/item.api";

export default AddItem = () =>{
    const [item, setItem] = useState({
        name:"",
        price:""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        const convereted = parseInt(item.price)
        item.price = convereted;
        addItem(item).then((res) =>{
            console.log(res)
        }).catch((error) =>{
            console.log(error)
        })
    }

    return (
        <div>
            <h2>Add Item</h2>
            <form>
                <label>Enter Item name</label>
                <input type="text" name='name' value={item.name} onChange={(e) => setItem({...item, name:e.target.value})}/> <br/>
                <label>Enter Item Price</label>
                <input type="text" name="price" value={item.price} onChange={(e) => setItem({...item, price:e.target.value})}/> <br/>
                
                <button type='submit' onClick = {handleSubmit}>Submit</button>
            </form>
        </div>
    )
}