import "./styles/goonies.css"
import React, { useState } from 'react';
import Image1 from "./img/best manager.png";
import Image2 from "./img/Fashion  Show.png";
import Image3 from "./img/idea hunt.png";
import Image4 from "./img/main event p.png";
import Image5 from "./img/paper presentation.png";
import Image6 from "./img/theme dance.png";
// import Image7 from "./img/voice of eka.png";


const Ghoonies = ()=>{
    const images1 = [Image1, Image2,Image3,Image4,Image5,Image6];
    const images2 = [Image2, Image1,Image4,Image5,Image3];
    const images3 = [Image1, Image2,Image3,Image4];

    let [img , setimg] = useState(images1)

    const [button1Styles, setButton1Styles] = useState({
      color: 'white',
      background: 'black'
    });

    const [button2Styles, setButton2Styles] = useState({
      color: 'white',
      background: 'black'
    });
    const [button3Styles, setButton3Styles] = useState({
      color: 'white',
      background: 'black'
    });






    const click1 = ()=>{
      setimg(images1);
      setButton1Styles({
        color: 'black',
        background: 'white'
      });
      setButton2Styles({
        color: 'white',
        background: 'black'
      });
      setButton3Styles({
        color: 'white',
        background: 'black'
      });
      
    }
    const click2 = ()=>{
      setimg(images2);
      setButton1Styles({
        color: 'white',
        background: 'black'
      });
      setButton2Styles({
        color: 'black',
        background: 'white'
      });
      setButton3Styles({
        color: 'white',
        background: 'black'
      });

    }
    const click3 = ()=>{
      setimg(images3);
      setButton1Styles({
        color: 'white',
        background: 'black'
      });
      setButton2Styles({
        color: 'white',
        background: 'black'
      });
      setButton3Styles({
        color: 'black',
        background: 'white'
      });
    }


    
    return(
      <div className="events">
        <div className="event-head">
          <h1 className="heading">united to innovate</h1>

          <div className="selector" id = "selector">
            <div  className="indicator" id="indicator"></div>
            <div  style={button1Styles} className="button" id = "#button1" onClick={click1}  >main events</div>
            <div style={button2Styles} className="button" id = "#button2" onClick={click2}>workshops</div>
            <div style={button3Styles} className="button"id = "#button3"  onClick={click3} >dept events</div>
            
          </div>
        </div>

        <div className="screen-main">
        <div className="screen" id="screenn">
        <div className="arrriii">
            {img.map((image, index) => (
            <div className="posterholder "><img  className ="image "key={index} src={image} alt={`Image ${index}`} /></div> ))}
        </div>
        
        </div>
        </div>



      </div>
  
    );
}

export default Ghoonies;