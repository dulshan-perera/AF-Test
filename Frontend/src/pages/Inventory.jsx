import React, { useEffect, useState } from "react";
import { fetchItems } from "../api/item.api";
import { useMatch } from 'react-router-dom'
import { addToCart } from "../api/cart.api";

export default Inventory = () =>{
    const [items, setItems] = useState([]);
    const match = useMatch('/inventory/:id')
    const cartId = match.params.id

    useEffect(() =>{
        getItems();
    }, [])

    const getItems = () =>{
        fetchItems().then((res) =>{
            setItems(res.data);
        }).catch((error) =>{
            console.log(error);
        })
    }

    const add = (name, price) =>{
        const itemObj ={
            name:name,
            price:price
        }
        console.log(itemObj)
        addToCart(cartId, itemObj).then((res) =>{
            console.log(res)
        })
    }

    return (
        <div>
            <h2>Inventory</h2>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                        {
                            items.map((row) =>(
                                <tr>
                                    <td>{row.name}</td>
                                    <td>{row.price}</td>
                                    <td>
                                        <button onClick={() => add(row.name, row.price)}>Add Item</button>
                                    </td>
                                </tr>
                            ))
                        }    
                </tbody>
            </table>
        </div>
    )
}