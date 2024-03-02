import "./styles/quotes.css"
import React ,{useEffect ,useState} from 'react';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';


const Quotes = ()=>{
    return(
        <div className="main-container">

            <div className="machinehanddiv"> <img className = "machinehand"src="machine-hand.png" alt="" /></div>
            <motion.div   className="ekate"><h2><div className="first">In the midst of anticipation and skepticism</div><div>Eka heralds the dawn of a new era...</div></h2></motion.div>
            <div className="humanhanddiv"> <img className = "humanhand"src="human-hand.png" alt="" /></div>
        </div>
    );
}

export default Quotes;