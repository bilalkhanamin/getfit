import React from "react";
import Hero from "../images/illustrations/landing.svg";
import Animate from 'react-animate-on-scroll';
import "animate.css/animate.min.css";



function Landing() {
  return (
    <>
       <div className="container">
        <div className="ball"></div>
        <div className="landing">
          <Animate animateIn="slideInLeft" delay={200} animateOnce={true}   className="landing_text">
          <div className="landing_text">
            <h1>
              start investing in <br /> your self
            </h1>
            <span>the real fitness depends on your exercise</span>
           
            <a href="/" className="btn">
              join now
            </a>
          </div>
          </Animate>

   <img src={Hero} alt="" className="hero" />
         </div>
      </div>
      
    </>
  );
}

export default Landing;
