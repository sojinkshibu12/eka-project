import Plx from "react-plx";
import React from 'react';




const Banner =  ()=>{
    return(
        <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 3,
                property: "scale"
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
        <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
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
     

      <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%"
          }}
        ></div>
      </div>


    </div>
    );
    
}

export default Banner;