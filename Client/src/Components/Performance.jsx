import React from "react";
import icon1 from "../images/performance/1.svg";
import icon2 from "../images/performance/2.svg";
import icon3 from "../images/performance/3.svg";
import icon4 from "../images/performance/4.svg";
import Animate from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function Performance() {
  return (
    <div className="performance">
      <div className="container">
        <div className="heading">
          <p>performance</p>
          <h1>what we do</h1>
        </div>
 
        <div className="card_container">
          <Animate
            animateIn="fadeInUp"
            delay={200}
            animateOnce={true}
           >
            <div className="card">
              <img src={icon1} alt="" className="icons" />
              <b>Analyze your goals</b>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary .
              </p>
            </div>
          </Animate>

          <Animate
            animateIn="fadeInUp"
            delay={300}
            animateOnce={true}
           >
            <div className="card">
              <img src={icon2} alt="" className="icons" />
              <b>work hard on it</b>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary .
              </p>
            </div>
          </Animate>

          <Animate
            animateIn="fadeInUp"
            delay={400}
            animateOnce={true}
            
          >
            <div className="card">
              <img src={icon3} alt="" className="icons" />
              <b>achieve perfect body</b>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary .
              </p>
            </div>
          </Animate>

          <Animate
            animateIn="fadeInUp"
            delay={500}
            animateOnce={true}
           >
            <div className="card">
              <img src={icon4} alt="" className="icons" />
              <b>Maintaining your fitness</b>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary .
              </p>
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
}

export default Performance;
