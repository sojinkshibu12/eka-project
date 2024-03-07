
import Banner from "./banner"
import Quotes from "./quote";
import Ghoonies  from "./ghoonies";
// import Slider from "./imageslider"
import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {
  return (
    <div>
      <Banner/>
      <Quotes/>
      <Ghoonies/>
      {/* <Slider/> */}
      
    </div>
  );
}
