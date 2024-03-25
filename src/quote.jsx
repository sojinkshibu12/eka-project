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
        <div className="main-container" id="quotes">

            <div className="machinehanddiv"><div className={`whatiseka ${isVisible ? 'slide' : ''}`}><h1 >What is eka</h1></div>
            <div className="dateholder"><h3 className={`date ${isVisible ? 'op' : ''}`}>April <br /> 17,18</h3></div>
            </div>
            
            <div className="humanhanddiv"> < p className={`ekadis ${isVisible ? 'op' : ''}`}>
EKA'24: A Techno-Cultural-Entrepreneurial event by PEC,<br /> themed on YOUTH, SCIENCE, and LEADERSHIP, featuring workshops, competitions, stalls, and cultural programs by Gouri Lekshmi and Baby Jean.<br /> Scheduled for April 17th-18th, 2024,<br /> it aims to empower students and attract around 5000 attendees with knowledge, fun, and entertainment.</p></div>
        </div>
    );
}

export default Quotes;