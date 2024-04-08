import React from 'react';
import ReactDOM from 'react-dom/client';
import "../styles/rules.css"
import fsr from "../img/Make the wall.webp"

const Makethewallrs = ()=>{
    return(
        <div className="fsdiv">
            <img className ="fsr"src={fsr} alt="" />
            <div className='buttoncont'>
            <a className = "register"href="https://docs.google.com/forms/d/e/1FAIpQLScTdNMyDcg3NpAzTK8oVa4PUPmllKI2AKntdNHyHqKg9kR49A/viewform">Register</a>
            </div>
            
        </div>
    );

}




export  default  Makethewallrs  ;