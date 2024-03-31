import "./styles/quotes.css"
import React ,{useEffect ,useState} from 'react';

import Lenis from '@studio-freight/lenis'
import image1 from "./img/imagesquotes/1.jpg"
import image2 from "./img/imagesquotes/2.jpg"
import image3 from "./img/imagesquotes/3.jpeg"
import image4 from "./img/imagesquotes/4.jpeg"
import image5 from "./img/imagesquotes/5.jpg"
import image6 from "./img/imagesquotes/6.jpg"
import image7 from "./img/imagesquotes/7.jpg"
import image8 from "./img/imagesquotes/8.jpeg"
import image9 from "./img/imagesquotes/9.jpeg"
import image10 from "./img/imagesquotes/10.jpg"
import image11 from "./img/imagesquotes/11.jpg"
import image12 from "./img/imagesquotes/12.jpg"

const Quotes = ()=>{

    const [isVisible, setIsVisible] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
          const slideInAt = window.scrollY + window.innerHeight ;
          const textBottom = document.querySelector('.mainconatainer_quotes').offsetTop +  document.querySelector('.mainconatainer_quotes').offsetHeight -100 ;
    
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
    <div className="mainconatainer_quotes" id="mainconatainer_quotes">


      <div className="ekadismain">
          <div className={`ekadis ${isVisible ? 'op' : ''}`}>

            <div className="whatiseka"><h1>What is eka</h1></div>
            <div className="discpr"><p> EKA'24: A Techno-Cultural-Entrepreneurial event by PEC,<br /> themed on YOUTH, SCIENCE, and LEADERSHIP, featuring workshops, competitions, stalls, and cultural programs.<br /> Scheduled for April 17th-18th, 2024,<br /> it aims to empower students and attract around 5000 attendees with knowledge, fun, and entertainment.</p></div>
          </div>
      </div>
        <div className="quotes-backgroundmain">
            <div className="mainrow1">
              <div className="row1">
                    <div className="row11"><img src={image1} alt="" /></div>
                    <div className="row11"><img src={image2} alt="" /></div>
                    <div className="row11"><img src={image3} alt="" /></div>
                    <div className="row11"><img src={image4} alt="" /></div>
                </div>
                <div className="row1">
                    <div className="row11"><img src={image5} alt="" /></div>
                    <div className="row11"><img src={image6} alt="" /></div>
                    <div className="row11"><img src={image7} alt="" /></div>
                    <div className="row11"><img src={image8} alt="" /></div>
                </div>
            </div>


            <div className="mainrow2">
              <div className="row2">
                    <div className="row11"><img src={image9} alt="" /></div>
                    <div className="row11"><img src={image10} alt="" /></div>
                    <div className="row11"><img src={image11} alt="" /></div>
                    <div className="row11"><img src={image12} alt="" /></div>
                </div>
                <div className="row2">
                    <div className="row11"><img src={image1} alt="" /></div>
                    <div className="row11"><img src={image2} alt="" /></div>
                    <div className="row11"><img src={image3} alt="" /></div>
                    <div className="row11"><img src={image4} alt="" /></div>
                </div>
            </div>


            <div className="mainrow1">
              <div className="row1">
                    <div className="row11"><img src={image1} alt="" /></div>
                    <div className="row11"><img src={image2} alt="" /></div>
                    <div className="row11"><img src={image3} alt="" /></div>
                    <div className="row11"><img src={image4} alt="" /></div>
                </div>
                <div className="row1">
                    <div className="row11"><img src={image5} alt="" /></div>
                    <div className="row11"><img src={image6} alt="" /></div>
                    <div className="row11"><img src={image7} alt="" /></div>
                    <div className="row11"><img src={image8} alt="" /></div>
                </div>
            </div>



            <div className="mainrow2">
              <div className="row2">
                    <div className="row11"><img src={image9} alt="" /></div>
                    <div className="row11"><img src={image10} alt="" /></div>
                    <div className="row11"><img src={image11} alt="" /></div>
                    <div className="row11"><img src={image12} alt="" /></div>
                </div>
                <div className="row2">
                    <div className="row11"><img src={image1} alt="" /></div>
                    <div className="row11"><img src={image2} alt="" /></div>
                    <div className="row11"><img src={image3} alt="" /></div>
                    <div className="row11"><img src={image4} alt="" /></div>
                </div>
            </div>

        </div>


      



      



      








    </div>
    );
}

export default Quotes;