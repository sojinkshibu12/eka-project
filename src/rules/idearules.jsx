
import React from 'react';
import ReactDOM from 'react-dom/client';
import "../styles/rules.css"
import fsr from "../img/idea rules.png"

const Idears = ()=>{
    return(
        <div className="fsdiv">
            <img className ="fsr"src={fsr} alt="" />
            <div className='buttoncont'>
            <a className = "register"href="https://docs.google.com/forms/d/e/1FAIpQLSfl8K00IoouL-gKSDXc8HYTbPDFS7H2XfkJKiHiKvzfaUpwig/viewform">Register</a>
            </div>
            
        </div>
    );

}




export  default Idears ;