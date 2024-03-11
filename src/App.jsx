
import Banner from "./banner"
import Quotes from "./quote";
import Ghoonies  from "./ghoonies";

import React from 'react';
import ReactDOM from 'react-dom/client';

const App = ()=> {
  return (
    <div>
      <Banner/>
      <Quotes/>
      <Ghoonies/>
      {/* <Slider/> */}
      
    </div>
  );
}

export default App;
