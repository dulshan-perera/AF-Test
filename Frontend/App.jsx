import React from "react";
import {BrowserRouter, Routes, Route, Link }from 'react-router-dom'
import Home from "./src/pages/Home";
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
                </Routes>
            </BrowserRouter>
        )
    }
}