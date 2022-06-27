import React, { useEffect, useState } from 'react'
import {useMatch} from 'react-router-dom';
import { fetchCart, purchase } from '../api/cart.api';
import { fetchItems } from '../api/item.api';

export default ViewCart = () =>{
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState("");
    const match = useMatch('/cart/:id');
    const cartId = match.params.id;

    useEffect(() =>{
        cartItems();
       console.log(items)
    },[])

    const cartItems = () =>{
        fetchCart(cartId).then((res) =>{
            const data = res.data;
            setItems(data.items)
    
        }).catch((err) =>{
            console.log(err)
        })
    }

    const calculate = () =>{
        purchase(cartId).then((res) =>{
            console.log(res.data)
            setTotal(res.data)
        }).catch((err) =>{
            console.log(err);
        })
    }

    return(
        <div>
            <h2>View Cart</h2>
            <h4>CART ID: {cartId}</h4>
            <button onClick={calculate}>PURCHASE</button>
            {
                total !== "" ?
                <h4>The total price of the purchase is Rs: {total}</h4> :
                <></>
            }
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
                                </tr>
                            ))
                        }    
                </tbody>
            </table>
        </div>
    )
}