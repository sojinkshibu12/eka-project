import React from 'react';
import ReactDOM from 'react-dom/client';
import "../styles/rules.css"
import fsr from "../img/voice rules.png"

const Voicers = ()=>{
    return(
        <div className="fsdiv">
            <img className ="fsr"src={fsr} alt="" />
            <div className='buttoncont'>
            <a className = "register"href="https://docs.google.com/forms/d/e/1FAIpQLSf-aHvVksYsLVqGtmlyKwe26Z7zFdgMn5IaL--qfKDb70WsFQ/viewform?vc=0&c=0&w=1&flr=0">Register</a>
            </div>
            
        </div>
    );

}




export  default Voicers ;