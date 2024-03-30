

import React from 'react';
import ReactDOM from 'react-dom/client';
import "../styles/rules.css"
import fsr from "../img/fs rules.png"

const Fsrules = ()=>{
    return(
        <div className="fsdiv">
            <img className ="fsr"src={fsr} alt="" />

            <a className = "register"href="#">Register</a>
        </div>
    );

}




export  default Fsrules ;