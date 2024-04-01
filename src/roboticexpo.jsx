import "./styles/robot.css"
import {  useEffect,useState } from "react";
import { useTransition,animated, useSpring } from "@react-spring/web";
import robot1 from  "./img/robot/747c28f9244304994e8de5fe1249fe7e-removebg-preview.png"
import robot2 from  "./img/robot/maximalfocus-eZWGK5sIiBM-unsplas.png"
import title from"./img/robot/robotic expo (1).png"

const Roboticexpo = ()=>{

    const [animation, setAnimation] = useSpring(()=>({
        from:{opacity:0}

    }))

    const [animation1, setAnimation1] = useSpring(()=>({
        from:{opacity:0}

    }))
  
    useEffect(() => {
      const handleScroll = () => {
        const slideInAt = window.scrollY + window.innerHeight;
        const textBottom = document.querySelector('.expomaincont').offsetTop + 200;
  
        if (slideInAt > textBottom) {
            setAnimation({
                to:{opacity:1},
                delay:500
            });

            setAnimation1({
                to:{opacity:1},
                delay:800
            })
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [setAnimation]);
  


    return(<div className="expomaincont">
        <animated.div style = {animation} className="robot1"><img  className = "robotimg1"src={robot1} alt="" /></animated.div>
        <animated.div style = {animation} className="robot2"><img  className = "robotimg2"  src={robot2} alt="" /></animated.div>
        <div className="spiderman">< animated.div style = {animation1} className="title_cont1"><img src={title}alt="" className="titleimg"/></animated.div></div>

    </div>);
}

export default Roboticexpo;