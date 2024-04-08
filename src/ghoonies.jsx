import "./styles/goonies.css"
import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import Image1 from "./img/Best Manager.webp";
import Image2 from "./img/Fashion Show.webp";
import Image3 from "./img/idea hunt.webp";
import Image4 from "./img/paper presentation.webp";
import Image5 from "./img/theme dance.webp";
import Image6 from "./img/Make the wall.webp";
import Image7 from "./img/voice of eka.webp";

import image8 from "./img/technicalevents/Brain cycle.png";
import image9 from "./img/technicalevents/Lathe master.png";
import image10 from "./img/technicalevents/air pollution.png";
import image11 from "./img/technicalevents/cad competition.png";
import image12 from "./img/technicalevents/fire and safety expo.png";
import image13 from "./img/technicalevents/fpv drone.png";
import image14 from "./img/technicalevents/gaming room.png";
import image15 from "./img/technicalevents/isro expo.png";
import image16 from "./img/technicalevents/vr Experience.png";
import image17 from "./img/technicalevents/vr in construction.png"


const Ghoonies = ()=>{
    const images1 = [{
      image : Image1,
      url : "bestmanager"
    },
    {
      image : Image2,
      url : "fashionshow"
    },
    {
      image : Image3,
      url : "ideathon"
    },
    {
      image : Image4,
      url : "paperpresentation"
    },
    {
      image : Image5,
      url : "themedance"
    },

    {
      image : Image6,
      url : "makethewall"
    }
      ,
    {
      image : Image7,
      url : "voiceofeka"
    }
  ];


  const images2 = [{
    image : image8,
    url : "/"
  },
  {
    image : image9,
    url : "/"
  },
  {
    image : image10,
    url : "/"
  },
  {
    image : image11,
    url : "/"
  },
  {
    image : image12,
    url : "/"
  },

  {
    image : image13,
    url : "/"
  }
    ,
  {
    image : image14,
    url : "/"
  }
  ,
  {
    image : image15,
    url : "/"
  },
  {
    image : image16,
    url : "/"
  }
  ,  {
    image : image17,
    url : "/"
  }
];


    // const images2 = [ Image1,Image4,Image5,Image3];
    const images3 = [Image1, Image2,Image3,Image4];
    const one = [];
    const [img, setImg] = useState([]);
    const [showImages, setShowImages] = useState(false);
  
    useEffect(() => {
      setImg(images1);
      setShowImages(true);
    }, []);



    const [button1Styles, setButton1Styles] = useState({
      color: 'black ',
      background: 'white'
    });


    const [button3Styles, setButton3Styles] = useState({
      color: 'white',
      background: 'black'
    });





    const click1 = ()=>{
      
    setShowImages(false);
    setImg(one);
    setTimeout(() => {
      setImg(images1);
      setShowImages(true);
    }, 100);
      

      setButton1Styles({
        color: 'black',
        background: 'white'
      });

      setButton3Styles({
        color: 'white',
        background: 'black'
      });
      
    }

    const click3 = ()=>{


      setShowImages(false);
      setImg(one);
      setTimeout(() => {
        setImg(images2);
        setShowImages(true);
      }, 100);


      setButton1Styles({
        color: 'white',
        background: 'black'
      });

      setButton3Styles({
        color: 'black',
        background: 'white'
      });
    }



    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    if (windowWidth < 1192) {
      return (
        <div className="events" id="ghoonies">
        <div className="event-head">
          <h1 className="heading"><span className="headoutline1">united</span>  to innovate</h1>

          <div className="selector" id = "selector">
            <div  className="indicator" id="indicator"></div>
            <div  style={button1Styles} className="button" id = "#button1" onClick={click1}  >main-events</div>
            <div style={button3Styles} className="button"id = "#button3"  onClick={click3} >Technical-events</div>
            
          </div>
        </div>

        <div className="screen-main">
        <div className="screen" id="screenn">
        <div className="arrriii">
            {img.map((image, index) => (
            <div key = {index}className="posterholder animation"><Link to={image.url}><img loading="lazy" className ="image  " key={index} src={image.image} alt={`Image ${index}`} /></Link></div> ))}
        </div>
        
        </div>
        </div>



      </div>
      );
    }else{
      return(
        <div className="events" id="ghoonies">

        
        <div className="event-head">

          <h1 className="heading1"><span className="headoutline">united</span> to innovate</h1>
        </div>
        <div className="screen-main1">

          <div className="firstcontainer1">

          <div className="screen1" id="screenn">
            <div className="posterholder1"  style = {{'--i':-3}}><Link to={"/makethewall"}><img loading="lazy" className ="image1"   src ={Image6} alt="photo" /></Link></div>
            <div className="posterholder1" style = {{'--i': -2} }><Link to={"/bestmanager"}><img loading="lazy" className ="image1" src = {Image1} alt="photo" /></Link></div> 
            <div className="posterholder1" style = {{'--i': -1}}><Link to={"/themedance"}><img loading="lazy" className ="image1"  src ={Image5} alt="photo" /></Link></div>
            <div className="posterholder1" style = {{'--i': 0}} ><Link to={"/ideathon"}><img loading="lazy" className ="image1"  src ={Image3} alt="photo" /></Link></div>
            <div className="posterholder1" style = {{'--i': 1}}><Link to={"/paperpresentation"}><img loading="lazy"  className ="image1" src ={Image4}  alt="photo" /></Link></div>
            <div className="posterholder1"  style = {{'--i':2}}><Link to={"/voiceofeka"}><img loading="lazy" className ="image1  front"   src ={Image7} alt="photo" /></Link></div>
            <div className="posterholder1"  style = {{'--i':3}}><Link to={"/fashionshow"}><img loading="lazy" className ="image1"   src ={Image2} alt="photo" /></Link></div>
        </div>

      
        </div>

        <div className="maineventheaddiv">
                <h1 className="maineventhead">Main Events</h1>




          
        </div>




<div className="technicaleventcont">
        
        <div className="techeventsubcont">
        <div className="mon"><h1 className="techeventshead">Technical-Events</h1></div>
        <div className="arrriii">
            {images2.map((image, index) => (
            <div key = {index}className="posterholder animation"><Link to={image.url}><img loading="lazy" className ="image  " key={index} src={image.image} alt={`Image ${index}`} /></Link></div> ))}
        </div>
        </div>
</div>
{/* 
            <div className="firstcontainer2">

<div className="screen1" id="screenn">

  <div className="posterholder1" style = {{'--i': -2} }><Link to={"/bestmanager"}><img  className ="image1" src = {Image1} alt="photo" /></Link></div> 
  <div className="posterholder1" style = {{'--i': -1}}><Link to={"/themedance"}><img  className ="image1"  src ={Image5} alt="photo" /></Link></div>
  <div className="posterholder1" style = {{'--i': -0}} ><Link to={"/ideathon"}><img className ="image1"  src ={Image3} alt="photo" /></Link></div>
  <div className="posterholder1" style = {{'--i': 1}}><Link to={"/paperpresentation"}><img  className ="image1" src ={Image4}  alt="photo" /></Link></div>
  <div className="posterholder1"  style = {{'--i':2}}><Link to={"/fashionshow"}><img className ="image1"   src ={Image2} alt="photo" /></Link></div>

</div>


</div>

<div className="maineventheaddiv">
      <h1 className="maineventhead">workshops</h1>





  </div> */}



{/* 
  <div className="firstcontainer3">

<div className="screen1" id="screenn">

  <div className="posterholder1" style = {{'--i': -2} }><Link to={"/bestmanager"}><img  className ="image1" src = {Image1} alt="photo" /></Link></div> 
  <div className="posterholder1" style = {{'--i': -1}}><Link to={"/themedance"}><img  className ="image1"  src ={Image5} alt="photo" /></Link></div>
  <div className="posterholder1" style = {{'--i': -0}} ><Link to={"/ideathon"}><img className ="image1"  src ={Image3} alt="photo" /></Link></div>
  <div className="posterholder1" style = {{'--i': 1}}><Link to={"/paperpresentation"}><img  className ="image1" src ={Image4}  alt="photo" /></Link></div>
  <div className="posterholder1"  style = {{'--i':2}}><Link to={"/fashionshow"}><img className ="image1"   src ={Image2} alt="photo" /></Link></div>

</div>


</div>

<div className="maineventheaddiv3">
      <h1 className="maineventhead">department events</h1>





  </div> */}

            
      </div>


          

      </div>
  
      );
    }
 
}

export default Ghoonies;