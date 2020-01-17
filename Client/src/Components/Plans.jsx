import Animate from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import React from "react";

function Plans() {
  return (
    <div class="plans">
      <div className="container">
           <div className="heading">
            <p>Plans</p>
            <h1>membership plans</h1>
          </div>
  
        <div className="plan_container">
          <Animate animateIn="fadeInUp" delay={200} animateOnce={true}>
            <div className="plan">
              <div className="head">
                <h1>Basic</h1>
              </div>

              <div className="price">
                <h1>$50</h1>
              </div>
              <div className="features">
                <span>Features</span>
              </div>

              <div className="options">
                <ul>
                  <li>Gym</li>
                  <li>fitness 24/7</li>
                  <li>--</li>
                  <li>--</li>
                  <li>--</li>
                </ul>
                <a href="/" class="btn">
                  Choose{" "}
                </a>
              </div>
            </div>
          </Animate>

          <Animate animateIn="fadeInUp" delay={300} animateOnce={true}>
            <div className="plan">
              <div className="head">
                <h1>Standard</h1>
              </div>

              <div className="price">
                <h1>$75</h1>
              </div>
              <div className="features">
                <span>Features</span>
              </div>

              <div className="options">
                <ul>
                  <li>Gym</li>
                  <li>fitness 24/7</li>
                  <li>sauna</li>
                  <li>personal trainer</li>
                  <li>--</li>
                </ul>
                <a href="/" class="btn">
                  Choose{" "}
                </a>
              </div>
            </div>
          </Animate>

          <Animate animateIn="fadeInUp" delay={400} animateOnce={true}>
            <div className="plan">
              <div className="head">
                <h1>Premium</h1>
              </div>

              <div className="price">
                <h1>$100</h1>
              </div>
              <div className="features">
                <span>Features</span>
              </div>

              <div className="options">
                <ul>
                  <li>Gym</li>
                  <li>fitness 24/7</li>
                  <li>personal trainer</li>
                  <li>massage</li>
                  <li>dietician</li>
                </ul>
                <a href="/" class="btn">
                  Choose{" "}
                </a>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
}

export default Plans;
