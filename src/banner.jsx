<<<<<<< HEAD
import "./App.css";
import React ,{useEffect ,useState} from 'react';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';
=======
import Plx from "react-plx";
import React from 'react';

>>>>>>> d8e0aeb247ffdd447b47faa7e201ccfcba4fe82d



const Banner =  ()=>{
<<<<<<< HEAD

  const container = useRef(null);

  const { scrollYProgress } = useScroll({

      target: container,

      offset: ['start start', 'end end']

  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale2 = useTransform(scrollYProgress,[0,1],[0,3]);
  const opscale = useTransform(scrollYProgress, [0, 1], [1.5,0]);
  const scale23 = useTransform(scrollYProgress,[0,1],[-5,1]);
  const scaleback = useTransform(scrollYProgress,[0,1],[50,0]);


    return(
      
      <div  ref  = {container } className="container" >
          <div className="sticky">

            <motion.div  style = {{opacity : opscale}} className="imagecontainer" >
              <motion.img style = {{opacity : scale2}} className = "logo"src="bgg.png" alt="logo" />
                <img className = "img1"src="city.jpeg" alt="city" />
                <motion.img style = {{scale : scale}}className = "img2"src="leaf1.png" alt="leaf" />
            </motion.div>
<motion.div style = {{opacity : scale23}}>
  <div  className="ekate"><h1>EKA 2024</h1></div>
  <div className="para"><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
</motion.div >
            
          </div>
      </div> 
=======
    return(
        <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 2000,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 15,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%"
        }}
      >
    <img style={{ width: "100%" }} src="city.jpeg" alt="background" />
      </Plx>
      <Plx
        
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "100px",
          marginLeft:"23%",
          
          width: "50%"
        }}
      >
        <img style={{ width: "100%" }} src="bgg.png" alt="background" />
      </Plx>
     

      {/* <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%"
          }}
        ></div>
      </div> */}

     

    </div>

 
>>>>>>> d8e0aeb247ffdd447b47faa7e201ccfcba4fe82d
    );
    
}

export default Banner;