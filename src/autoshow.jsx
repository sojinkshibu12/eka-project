import "./styles/autoshow.css"
import { useEffect,useState } from "react";
import { useTransition,animated, useSpring } from "@react-spring/web";
import Lenis from '@studio-freight/lenis'
import car1 from "./img/carimg/car1.webp"
import car2 from "./img/carimg/car2.webp"
import car3 from "./img/carimg/car3.webp"
import car4 from "./img/carimg/car4.webp"
import car5 from "./img/carimg/car5.webp"
import car6 from "./img/carimg/car6.webp"
import title from "./img/carimg/autoexpo.webp"
import { Next } from "react-bootstrap/esm/PageItem";


const Autoshow = ()=>{


    const[items,setitems] = useState([]);
    const [iscarvisible,setcarvisible] = useState(false);

    const [animation, setAnimation] = useSpring(()=>({
      from:{opacity:0}

  }))
    const array = [{"image":car1,"delay" : 200 },{"image":car2,"delay" : 400},{"image":car3,"delay" : 600},{"image":car4,"delay" : 800},{"image":car5,"delay" : 1000},{"image":car6,"delay" : 1200}];
    useEffect(() => {
        const handleScroll2 = () => {
          const slideInAt1 = window.scrollY + window.innerHeight ;
          const textBottom1 = document.querySelector('.autoshow_main').offsetTop  ;
    
          if (slideInAt1 > textBottom1) {
            setitems(array);
            setAnimation({
              to:{opacity:1},
              delay:1400
          });
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
      
        from:{x:0 ,y:-100,opacity:0}, 
        
        enter:item =>(next)=>(next({x:0,y:0,opacity:1,delay:item.delay})),
        leave:{}
    });



    return(
    <div className="autoshow_main">
        <div className="auto_subcontainer">
            {transition((style , item)=>
                item ?<animated.div className="item" style={{ ...style, backgroundImage: `url(${item.image})` }}></animated.div>: ""
            )}

            <div className="spiderman">< animated.div style={animation} className="title_cont"><img src={title}alt="" className="titleimg"/></animated.div></div>
        </div>
    </div>);
}

export default Autoshow;