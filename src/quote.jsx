import "./styles/quotes.css"
import React ,{useEffect ,useState} from 'react';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';


const Quotes = ()=>{

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
          const slideInAt = window.scrollY + window.innerHeight ;
          const textBottom = document.querySelector('.whatiseka').offsetTop +  document.querySelector('.whatiseka').offsetHeight +300 ;
    
          if (slideInAt > textBottom) {
            setIsVisible(true);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      },
       
       []);



    return(
        <div className="main-container">

            <div className="machinehanddiv"><h1 className={`whatiseka ${isVisible ? 'slide' : ''}`}>What is eka</h1></div>
            
            <div className="humanhanddiv"> < p className={`ekadis ${isVisible ? 'op' : ''}`}>It is a long established fact <br/>that a reader will be distracted by the readable content of a page when <br/>looking at its layout. The point of using<br/> Lorem Ipsum is that it has a more-or-less normal distribution</p></div>
        </div>
    );
}

export default Quotes;