import "./styles/goonies.css"
import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import Image1 from "./img/best manager.png";
import Image2 from "./img/Fashion  Show.png";
import Image3 from "./img/idea hunt.png";
import Image4 from "./img/paper presentation.png";
import Image5 from "./img/theme dance.png";
// import vedio from "./img/hexa.mp4"
// import Image7 from "./img/voice of eka.png";


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
    }
  ];



    const images2 = [ Image1,Image4,Image5,Image3];
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

    const [button2Styles, setButton2Styles] = useState({
      color: 'white',
      background: 'black'
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
      setShowImages(false);
      setImg(one);
      setTimeout(() => {
        
        setImg(images1)
        setShowImages(true);
      }, 100);
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


      setShowImages(false);
      setImg(one);
      setTimeout(() => {
        setImg(images1);
        setShowImages(true);
      }, 100);


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
            <div className="posterholder animation"><Link to={image.url}><img  className ="image  " key={index} src={image.image} alt={`Image ${index}`} /></Link></div> ))}
        </div>
        
        </div>
        </div>



      </div>
      );
    }else{
      return(
        <div className="events">
        <div className="event-head">

          {/* <video autoPlay loop muted id="#vedio">
            <source src={vedio} type="vedio/mp4"/>
          </video> */}
          <h1 className="heading1"><span className="headoutline">united</span> to innovate</h1>
        </div>

        {/* card divs */}
        <div className="screen-main1">

          <div className="firstcontainer1">

          <div className="screen1" id="screenn">
        
            <div className="posterholder1" style = {{'--i': -2} }><Link to={"/bestmanager"}><img  className ="image1" src = {Image1} alt="photo" /></Link></div> 
            <div className="posterholder1" style = {{'--i': -1}}><Link to={"/themedance"}><img  className ="image1"  src ={Image5} alt="photo" /></Link></div>
            <div className="posterholder1" style = {{'--i': -0}} ><Link to={"/ideathon"}><img className ="image1"  src ={Image3} alt="photo" /></Link></div>
            <div className="posterholder1" style = {{'--i': 1}}><Link to={"/paperpresentation"}><img  className ="image1" src ={Image4}  alt="photo" /></Link></div>
            <div className="posterholder1"  style = {{'--i':2}}><Link to={"/fashionshow"}><img className ="image1"   src ={Image2} alt="photo" /></Link></div>

        </div>

      
        </div>

        <div className="maineventheaddiv">
                <h1 className="maineventhead">Main Events</h1>




          
            </div>




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





  </div>




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





  </div>

            
      </div>


          

      </div>
  
      );
    }
 
}

export default Ghoonies;