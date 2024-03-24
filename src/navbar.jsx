import "./styles/navbar.css"
import burger from "../src/img/menu.png"
import React, { useState,useEffect } from 'react';
const Navbar = ()=>{

    const[slided , setslide] = useState(false);

    const click = ()=>{
        setslide(!slided);
    } 
    return(
        <div className="navbar">
            <li className="navi">
                <a href="">home</a>
                <a href="">about</a>
                <a href="">events</a>
                <a href="">programs</a>
            </li>
        </div>
    );
}

export default Navbar;