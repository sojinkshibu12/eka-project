
import Banner from "./banner"
import Quotes from "./quote";
import Ghoonies  from "./ghoonies";
import Programs from "./programs";

import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "./navbar";
import Timer from "./timer";
// import FlipClock from "./flipclock";



const App = ()=> {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Quotes/>
      <Ghoonies/>
      <Timer/>

      {/* <Programs/> */}


      
    </div>
  );
}

export default App;
