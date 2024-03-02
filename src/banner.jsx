import "./App.css";
import React ,{useEffect ,useState} from 'react';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';



const Banner =  ()=>{

  const container = useRef(null);

  const { scrollYProgress } = useScroll({

      target: container,

      offset: ['start start', 'end end']

  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale2 = useTransform(scrollYProgress,[0,1],[0,3]);
  const opscale = useTransform(scrollYProgress, [0, 1], [1.5,0]);


    return(
      
      <div  ref  = {container } className="container" >
          <div className="sticky">

            <motion.div  style = {{opacity : opscale}} className="imagecontainer" >
              <motion.img style = {{opacity : scale2}} className = "logo"src="bgg.png" alt="logo" />
                <img className = "img1"src="city.jpeg" alt="city" />
                <motion.img style = {{scale : scale}}className = "img2"src="leaf1.png" alt="leaf" />
            </motion.div>

            
          </div>
      </div> 
    );
    
}

export default Banner;