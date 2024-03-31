import Lenis from '@studio-freight/lenis'
import Banner from "./banner"
import Quotes from "./quote";
import Ghoonies  from "./ghoonies";
import Programs from "./programs";

import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "./navbar";
import Timer from "./timer";
import Autoshow from "./autoshow";
import { useEffect } from "react";

// import FlipClock from "./flipclock";



const App = ()=> {

  // useEffect(()=>{
  //   const lenis = new Lenis()
  //   function raf(time) {
  //   lenis.raf(time)
  //   requestAnimationFrame(raf)
  //   }
  //   requestAnimationFrame(raf)
  // },[])
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Quotes/>
      <Ghoonies/>
      <Timer/>
      <Autoshow/>
      {/* <Programs/> */}


      
    </div>
  );
}

export default App;
