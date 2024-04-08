import React from 'react';
import ReactDOM from 'react-dom/client';
import "../styles/rules.css"
import fsr from "../img/manager rules.png"

const Mngrrs = ()=>{
    return(
        <div className="fsdiv">
            <img className ="fsr"src={fsr} alt="" />
            <div className='buttoncont'>
            <a className = "register"href="https://docs.google.com/forms/d/e/1FAIpQLSdwTWIcJk7fOHF_eyL4hVdkBFRR4NpppCSDzyDL9A1IYEelaA/viewform">Register</a>
            </div>
            
        </div>
    );

}




export  default Mngrrs ;