import React from "react";
import Count from 'react-countup'
import Animate from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function GoodHealth() {
  return (
    <div className="health">
      <div className="container">
         
        <h1>
      <span>    to enjoy the glow of good health, </span> <br /> your must exercise.
        </h1>
         <Animate animateIn="fadeInUp" delay={200} animateOnce={true}>

        <div className="health-calcs">

         <div>
            <h1><Count end={300} duration={5} className="counter" /></h1>
            <p>happy customers</p>
        </div>

        <div>
        <h1><Count end={24 } duration={3} className="counter" /></h1>
            <p>working hours</p>
        </div>

        <div>
        <h1><Count end={400} duration={3} className="counter" /></h1>
            <p>success stories</p>
        </div>

        <div>
        <h1><Count end={290} duration={3} className="counter" /></h1>
            <p>perfect bodies</p>
        </div>
      </div>
      </Animate>

      </div>
    </div>
  );
}

export default GoodHealth;
