import React, { useState, useEffect } from "react";
import "./styles/timer.css"

 const Timer = () => {
  const changingDate = new Date("17 april 2024");
  const currentDate = new Date();
  const totalSeconds = (changingDate - currentDate) / 1000;
  const [time ,settime] = useState(totalSeconds);
  const [ seconds,setseconds] = useState(0);
  const [ minutes,setminutes] = useState(0);
  const [ hours,sethours] = useState(0);
  const [days , setdays] = useState(0);

  const totalminutes = parseInt(Math.floor(totalSeconds/60));
  const totalhours = parseInt(Math.floor(totalminutes/60));
  const totaldays = parseInt(Math.floor(totalhours/24));
  useEffect(() => {

    setTimeout(()=>{
      settime(time-1000);
    

      setseconds(parseInt(totalSeconds%60));
      setminutes(parseInt(totalminutes%60));
      sethours(parseInt(totalhours%24));
      setdays(parseInt(totaldays));
    },1000)
    }, [time]);

  return (

    <div className="mainconttimer">
        <div className="countdown-container">
            <div className="countdown-values">
                <div className="countdown-value">
                <p className="big-text">{days}</p>
                <span>days</span>
                </div>
                <div className="countdown-value">
                <p className="big-text">{hours}</p>
                <span>hours</span>
                </div>
                <div className="countdown-value">
                <p className="big-text">{minutes}</p>
                <span>mins</span>
                </div>
                <div className="countdown-value">
                <p className="big-text">{seconds}</p>
                <span>seconds</span>
                </div>
            </div>
        </div>
    </div>
    
  );
};


export default Timer;