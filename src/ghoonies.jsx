import "./styles/goonies.css"
import React, { useState } from 'react';
import Image1 from "./img/voice of eka.png";
import Image2 from "./img/voice of eka.png";
import Image3 from "./img/voice of eka.png";
import Image4 from "./img/voice of eka.png";
import Image5 from "./img/voice of eka.png";
import Image6 from "./img/voice of eka.png";
import Image7 from "./img/voice of eka.png";


const Ghoonies = ()=>{
    const images1 = [Image1, Image2,Image3,Image4,Image5,Image6];
    const images2 = [Image1, Image2,Image3,Image4,Image5];
    const images3 = [Image1, Image2,Image3,Image4];
    
    // const [choice, setchoice] = useState(0);
    let [img , setimg] = useState(images1)

    const click1 = ()=>{
      setimg(images1);
    }
    const click2 = ()=>{
      setimg(images2);
    }
    const click3 = ()=>{
      setimg(images3);
    }
    // useEffect(() => {
    //   // Update the document title when the component mounts
    //   // if(choice === 0 ){
        
    //   //   img = images1;
    //   // }
    //   // if(choice === 1 ){
        
    //   //   img = images2
    //   // }
    //   // if(choice === 2 ){
        
    //   //   img = images3
    //   // }
      
    // }, [choice]);
    return(
      <div className="events">
        <div className="event-head">
          <h1 className="heading">united to innovate</h1>

          <div className="selector">
            <div className="button1" onClick={click1} >main events</div>
            <div className="button"  onClick={click2}>workshops</div>
            <div className="button" onClick={click3} >department events</div>
            
          </div>
        </div>

        <div className="screen-main">
        <div className="screen" id="screenn">
        <div className="arrriii">
            {img.map((image, index) => (
            <div className="posterholder"><img  className =  "image"key={index} src={image} alt={`Image ${index}`} /></div> ))}
        </div>
        
        </div>
        </div>



      </div>
  
    );
}

export default Ghoonies;