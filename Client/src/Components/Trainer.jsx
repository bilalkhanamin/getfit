import React from "react";
import Animate from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import img1 from "../images/trainers/1.svg";
import img2 from "../images/trainers/2.svg";
import img3 from "../images/trainers/3.svg";
import img4 from "../images/trainers/4.svg";

function Trainer() {
  return (
    <div className="container">
        <div className="heading">
          <p> our team</p>
          <h1>meet the trainers</h1>
        </div>

      <div className="trainers">
        <Animate animateIn="fadeInUp" delay={100} animateOnce={true}>
          <div className="trainer ">
            <img src={img1} alt="" />
            <h3>Rebicca</h3>
            <span>Dietician/Trainer</span>
          </div>
        </Animate>

        <Animate animateIn="fadeInUp" delay={200} animateOnce={true}>
          <div className="trainer">
            <img src={img2} alt="" />
            <h3>Emily</h3>
            <span>Dietician</span>
          </div>
        </Animate>

        <Animate animateIn="fadeInUp" delay={300} animateOnce={true}>
          <div className="trainer">
            <img src={img3} alt="" />
            <h3>william</h3>
            <span>Trainer</span>
          </div>
        </Animate>

        <Animate animateIn="fadeInUp" delay={350} animateOnce={true}>
          <div className="trainer">
            <img src={img4} alt="" />
            <h3>jonas</h3>
            <span>Trainer</span>
          </div>
        </Animate>
      </div>
    </div>
  );
}

export default Trainer;
