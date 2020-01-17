import React from "react";
import persons from "../images/about.svg";
import Animate from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function About() {
  return (
    <div className="about-bg">
      <div className="container">
        <div className="about">
          <Animate animateIn="slideInLeft" delay={200} animateOnce={true}>
            <div className="about-text">
              <span>About us</span>
              <h1>Welcome to Getfit</h1>
              <h3>we help peoples to shape their bodies</h3>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her.
              </p>
            </div>
          </Animate>
             <img src={persons} alt="" className="person" />
         </div>
      </div>
    </div>
  );
}

export default About;
