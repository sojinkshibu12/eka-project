import "./styles/autoshow.css"
import { useEffect,useState } from "react";
import { useTransition,animated } from "@react-spring/web";
import Lenis from '@studio-freight/lenis'
import car1 from "./img/carimg/car1.jpg"
import car2 from "./img/carimg/car2.jpg"
import car3 from "./img/carimg/car3.jpg"
import car4 from "./img/carimg/car4.jpg"
import car5 from "./img/carimg/car5.jpg"
import car6 from "./img/carimg/car6.jpg"
import title from "./img/carimg/autoshow.png"

const Autoshow = ()=>{


    const[items,setitems] = useState([]);
    const [iscarvisible,setcarvisible] = useState(false);
    const array = [{"image":car1,"delay" : 200},{"image":car2,"delay" : 400},{"image":car3,"delay" : 600},{"image":car4,"delay" : 800},{"image":car5,"delay" : 1000},{"image":car6,"delay" : 1200}];
    useEffect(() => {
        const handleScroll2 = () => {
          const slideInAt1 = window.scrollY + window.innerHeight ;
          const textBottom1 = document.querySelector('.autoshow_main').offsetTop  ;
    
          if (slideInAt1 > textBottom1) {
            setitems(array);
          }

        };

        
    
        window.addEventListener('scroll', handleScroll2);
    
        return () => {
            
          window.removeEventListener('scroll', handleScroll2);
        };
      }
      ,
       []);


    const transition = useTransition(items,{
        from: {x:0 ,y:-100,opacity:0}, 
        enter:item =>(next)=>(next({x:0,y:0,opacity:1,delay:item.delay})),
        leave:{}
    });
    return(
    <div className="autoshow_main">
        <div className="auto_subcontainer">
            {transition((style , item)=>
                item ?<animated.div className="item" style={style}><img src={item.image} alt="" className="carimg"/></animated.div>: ""
            )}

            <div className="title_cont"><img src={title}alt="" className="titleimg"/></div>
        </div>
    </div>);
}

export default Autoshow;