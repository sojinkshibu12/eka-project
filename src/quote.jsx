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

            <div className="machinehanddiv"><div className={`whatiseka ${isVisible ? 'slide' : ''}`}><h1 >What is eka</h1></div>
            <div className="dateholder"><h3 className={`date ${isVisible ? 'op' : ''}`}>April <br /> 17,18</h3></div>
            </div>
            
            <div className="humanhanddiv"> < p className={`ekadis ${isVisible ? 'op' : ''}`}>It is a long established fact <br/>that a reader will be distracted by the readable content of a page when <br/>looking at its layout. The point of using<br/> Lorem Ipsum is that it has a more-or-less normal distribution</p></div>
        </div>
    );
}

export default Quotes;