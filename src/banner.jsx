import Plx from "react-plx";

import React, { useState, useEffect } from 'react';




const Banner =  ()=>{
    return(
      
        <div >
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 15,
                property: "scale",

              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="leaf1.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"



              }
            ]
          }
        ]}
        style={{  
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%"
        }}
      >
    <img style={{ width: "100%" }} src="city.jpeg" alt="background" />
      </Plx>
      <Plx
        
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity"
              }
            ]

          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "100px",
          marginLeft:"23%",
          
          width: "50%"
        }}
      >
        <img style={{ width: "100%" }} src="bgg.png" alt="background" />
      </Plx>


      <Plx
        
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 0,
                endValue: 0,
                property: "opacity"
              }
            ]

          },

          {
            start: 700,
            end: 800,
            properties: [
              {
                startValue: 0,
                endValue: 0.95,
                property: "opacity"
              }
            ]

          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height:"100vh",
          backgroundColor:"black",
          width: "100%"
        }}
      >
        <div>hallo</div>
      </Plx>
    </div>

 
    );
    
}

export default Banner;