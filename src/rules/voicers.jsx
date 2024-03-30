import React from 'react';
import ReactDOM from 'react-dom/client';
import "../styles/rules.css"
import fsr from "../img/voice rules.png"

const Voicers = ()=>{
    return(
        <div className="fsdiv">
            <img className ="fsr"src={fsr} alt="" />

            <a className = "register"href="#">Register</a>
        </div>
    );

}




export  default Voicers ;