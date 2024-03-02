import "./styles/goonies.css"
import React from "react";
import Image1 from "./img/voice of eka.png";
import Image2 from "./img/voice of eka.png";
import Image3 from "./img/voice of eka.png";
import Image4 from "./img/voice of eka.png";
import Image5 from "./img/voice of eka.png";
import Image6 from "./img/voice of eka.png";
import Image7 from "./img/voice of eka.png";


const Ghoonies = ()=>{
    const images = [Image1, Image2,Image3,Image4,Image5,Image6,Image7];

   
    return(
        <div className="events">
          
          <div className="topbar"></div>
            <div className="eventheading"><h1>Events</h1></div>
            <div className="posterdiv">
              <div className="posterdiv2">
              {images.map((image, index) => (
            <div className="posters"><img className = "imgs"key={index} src={image} alt={`Image ${index + 1}`}/></div>
          ))}
              </div>
              
            </div>


      </div>
  
    );
}

export default Ghoonies;