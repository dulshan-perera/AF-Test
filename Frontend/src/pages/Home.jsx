import React, { useEffect, useState } from "react";
import { getAuth } from "../helper/auth";

export default Home = () =>{
    const [role, setRole] = useState('');
    useEffect(() =>{
        if(localStorage.authentication !== null){
            setRole(getAuth(localStorage.authentication).role);
        }
    })

    const nav = (type) =>{
        switch(type){
            case 'addToCart':{
                window.location = '/create-cart'
                break;
            }case 'addToList':{
                window.location = '/create-list'
                break;
            }case 'viewPromotions':{
                window.location = '/promotions'
                break;
            }case 'viewCart':{
                window.location = '/cart/:id'
                break;
            }case 'viewList':{
                window.location = '/list/:id'
                break;
            }case 'addItems':{
                window.location = '/add-item'
                break;
            }case 'addPromotions':{
                window.location = '/promotion'
                break;
            } case 'viewPromotions':{
                window.location = '/promotions'
                break;
            }case 'viewPromotions':{
                window.location = '/promotions'
                break;
            }case 'viewCustomers':{
                window.location = '/customers'
                break;
            }default:{}
        }
    }
        return role === 'customer'? (
            <div>
                <h2>Welcome Home {role}</h2>
                <button onClick={() => nav('addToCart')}>Create Cart & Add Items</button> <br/>
                <button onClick={() => nav('addToList')}>Create WishList & Add Items</button> <br/>
                <button onClick={() => nav('viewPromotions')}>View Promotions</button><br/>
                
            </div>
        ):role === 'trader' ?(
            <div>
                <h2>Welcome Home {role}</h2>
                <button onClick={() => nav('addItems')}>Add Items</button> <br/>
                <button onClick={() => nav('addPromotions')}>Add Promotions</button> <br/>
                <button onClick={() => nav('viewPromotions')}>View Promotions</button><br/>
                <button onClick={() => nav('viewCustomers')}>View Customers</button>
            </div>
            
        ):(
            <div>
                <h2>Loading.....</h2>
            </div>
        )
}