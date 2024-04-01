import "./App.css";
import React  from 'react';
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
  const opscale = useTransform(scrollYProgress, [0, 1], [3,0]);


    return(
      
      <div  ref  = {container } className="container" id = "banner" >
          <div className="sticky" >

            <motion.div  style = {{opacity : opscale}} className="imagecontainer" >
              <motion.img  style = {{opacity : scale2}} className = "logo"src="bgg.png" alt="logo" />
                <img loading="lazy" className = "img1"src="ancient.webp" alt="city" />
                <motion.img style = {{scale : scale}}className = "img2"src="leaf1.png" alt="leaf" />
            </motion.div>

            
          </div>
      </div> 
    );
    
}

export default Banner;