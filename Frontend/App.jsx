import React from "react";
import {BrowserRouter, Routes, Route, Link }from 'react-router-dom'
import AddItem from "./src/pages/AddItem";
import CreateCart from "./src/pages/CreateCart";
import Home from "./src/pages/Home";
import Inventory from "./src/pages/Inventory";
import Login from "./src/pages/Login";
import RegisterUser from "./src/pages/RegisterUser";


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
                    <Route path="/inventory/:id" element={<Inventory/>} />
                    <Route path="/create-cart" element={<CreateCart/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}