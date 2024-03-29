import "./styles/navbar.css"
import burger from "../src/img/menu.png"
import React, { useState,useEffect,useCallback } from 'react';


const Navbar = () => {



    useEffect(()=>{

        const handleScroll = ()=>{
            const slideInAt = window.scrollY + window.innerHeight ;
            const banner = document.querySelector('#banner').offsetTop;
            const quotes = document.querySelector('#mainconatainer_quotes').offsetTop + document.querySelector('#mainconatainer_quotes').offsetHeight;
            const ghoonies = document.querySelector('#ghoonies').offsetTop+500 ;
            // const programs = document.querySelector('#programs').offsetTop ;


            if(slideInAt >= banner && slideInAt <= banner+2000 )
                setbanner(true);
            else
                setbanner(false);
            if(slideInAt >= quotes-100 && slideInAt <= quotes+600 ){
                setquote(true);
            }
            else
                setquote(false);

            if(slideInAt >= ghoonies && slideInAt <= ghoonies+1900 )
                setghoonies(true);
            else
                setghoonies(false);

            // if(slideInAt >= programs +500 && slideInAt <= programs+1000 )
            //     setprograms(true);
            // else
            //     setprograms(false);

            
        }
        window.addEventListener('scroll', handleScroll);
        
      },[]);


  const smoothScrollTo = useCallback((element, duration) => {
    const start = window.scrollY || window.pageYOffset;
    const end = element.getBoundingClientRect().top;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const easeInOutQuad = (time, startValue, changeInValue, duration) => {
      time /= duration / 2;
      if (time < 1) return changeInValue / 2 * time * time + startValue;
      time--;
      return -changeInValue / 2 * (time * (time - 2) - 1) + startValue;
    };

    const scroll = () => {
      const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
      const timeElapsed = Math.min(1, (currentTime - startTime) / duration);
      const easedTimeElapsed = easeInOutQuad(timeElapsed, 0, 1, 1);
      window.scroll(0, start + end * easedTimeElapsed);
      if (timeElapsed < 1) requestAnimationFrame(scroll);
    };

    scroll();
  },[]);

  const[isbanner,setbanner] = useState(false);
  const[isquote,setquote] = useState(false);
  const[isghoonies,setghoonies] = useState(false);
  // const[isprograms,setprograms] = useState(false);



  const homeclick1 = () => {
    const element = document.getElementById("banner");
    if (element) {
      smoothScrollTo(element, 1000); 
    }
  };

  const homeclick2 = () => {
    const element = document.getElementById("mainconatainer_quotes");
    if (element) {
      smoothScrollTo(element, 1000); 
    }
  };

  const homeclick3 = () => {
    const element = document.getElementById("ghoonies");
    if (element) {
      smoothScrollTo(element, 1000); 
    }
  };



  // const homeclick4 = () => {
  //   const element = document.getElementById("programs");
  //   if (element) {
  //     smoothScrollTo(element, 2000); 
  //   }
  // };



  return (
    <div className="navbar">

        <li className="navi">
          <h4 className={`link ${isbanner ? 'underlined' : ''}`} onClick={homeclick1}>home</h4>
          <h4 className={`link ${isquote ? 'underlined' : ''}`} onClick={homeclick2}>about</h4>
          <h4 className={`link ${isghoonies ? 'underlined' : ''}`} onClick={homeclick3}>events</h4>
          {/* <h4 className={`link ${isprograms ? 'underlined' : ''}`} onClick={homeclick4}>programs</h4> */}
        </li>

    </div>
  );
};

export default Navbar;