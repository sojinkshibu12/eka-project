
import Banner from "./banner"
import Quotes from "./quote";
import Ghoonies  from "./ghoonies";
import Programs from "./programs";

import React from 'react';
import ReactDOM from 'react-dom/client';

const App = ()=> {
  return (
    <div>
      <Banner/>
      <Quotes/>
      <Ghoonies/>
      <Programs/>
      {/* <Slider/> */}
      
    </div>
  );
}

export default App;
