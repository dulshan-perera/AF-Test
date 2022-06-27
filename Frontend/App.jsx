import React from "react";
import {BrowserRouter, Routes, Route, Link }from 'react-router-dom'
import AddItem from "./src/pages/AddItem";
import AddPromotion from "./src/pages/AddPromotion";
import CreateCart from "./src/pages/CreateCart";
import CreateList from "./src/pages/CreateList";
import EditItem from "./src/pages/EditItem";
import Home from "./src/pages/Home";
import Inventory from "./src/pages/Inventory";
import Login from "./src/pages/Login";
import RegisterUser from "./src/pages/RegisterUser";
import ViewCart from "./src/pages/ViewCart";
import ViewList from "./src/pages/ViewList";
import ViewPromotions from "./src/pages/ViewPromotions";


export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/login" element={<Login/>} /> 
                    <Route path="/register" element={<RegisterUser/>} />
                    <Route path="/add-item" element={<AddItem/>} />
                    <Route path="/item/:id" element={<EditItem/>} />
                    <Route path="/inventory/:cartid/:listid" element={<Inventory/>} />
                    <Route path="/create-cart" element={<CreateCart/>} />
                    <Route path="/cart/:id" element={<ViewCart/>} />
                    <Route path="/list/:id" element={<ViewList/>} />
                    <Route path="/create-list" element={<CreateList/>} />
                    <Route path="/promotion" element={<AddPromotion/>} />
                    <Route path="/promotions" element={<ViewPromotions/>} />
                    
                </Routes>
            </BrowserRouter>
        )
    }
}