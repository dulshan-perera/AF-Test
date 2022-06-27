import React, { useEffect, useState } from "react";
import { fetchItems } from "../api/item.api";
import { useMatch } from 'react-router-dom'
import { addToCart } from "../api/cart.api";
import ViewCart from "./ViewCart";
import { addToList } from "../api/wishList.api";
import { getAuth } from "../helper/auth";

export default Inventory = () =>{
    const [items, setItems] = useState([]);
    const [role, setRole] = useState("")
    const match = useMatch('/inventory/:cartid/:listid')
    const cartId = match.params.cartid
    const listId = match.params.listid

    useEffect(() =>{
        if(!localStorage.authentication){
            setRole(getAuth(localStorage.authentication).role)
        }
        getItems();
        console.log(cartId)
    }, [])

    const getItems = () =>{
        fetchItems().then((res) =>{
            setItems(res.data);
        }).catch((error) =>{
            console.log(error);
        })
    }

    const add = (name, price, type) =>{
        const itemObj ={
            name:name,
            price:price
        }
        if (type === 'cart') {
            console.log(itemObj)
            addToCart(cartId, itemObj).then((res) =>{
                console.log(res)
            })
        }else if(type ==='list'){
            addToList(listId, itemObj).then((res) =>{
                console.log(res)
            })
        }
    }

    const edit = (id) =>{
        window.locaiton = `/item/${id}`
    }

    const viewCart = () =>{
        window.location = `/cart/${cartId}`
    }
    const viewList = () =>{
        window.location = `/list/${listId}`
    }

    return (
        <div>
            <h2>Inventory</h2>
            {
                cartId !== ':cartid'?
                <>
                    {
                        cartId !== null ?
                            <button onClick={() => viewCart()}>ViewCart</button> :
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
                                            <td>
                                                <button onClick={() => add(row.name, row.price, 'cart')}>Add Item</button>
                                            </td>
                                        </tr>
                                    ))
                                }    
                        </tbody>
                    </table>
                </>: listId !== ':listid' ?
                <>
                    {
                        listId !== null ?
                            <button onClick={() => viewList()}>View List</button> :
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
                                            <td>
                                                <button onClick={() => add(row.name, row.price, 'list')}>Add Item</button>
                                            </td>
                                        </tr>
                                    ))
                                }    
                        </tbody>
                    </table>
                </>:
                <>
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
                                                <button onClick={() => edit(row.id)}>Edit Item</button>
                                            </td>
                                        </tr>
                                    ))
                                }    
                        </tbody>
                    </table>
                </>
            }
        </div>
    )
}