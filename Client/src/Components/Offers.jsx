import React from "react";
import Animate from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import icon1 from "../images/offers/scale.svg";
import icon2 from "../images/offers/diet.svg";
import icon3 from "../images/offers/exercise.svg";
import icon4 from "../images/offers/exercise2.svg";
import icon5 from "../images/offers/privateClass.svg";
import icon6 from "../images/offers/spinning.svg";

function Offers() {
  return (
    <div className="offers">
      <div className="container">
           <div className="heading">
            <p>our classes</p>
            <h1>what we offer</h1>
          </div>
 
        <div className="offer_container">
          <Animate animateIn="fadeInUp" delay={100} animateOnce={true}>
            <div className="offer__comp">
              <div className="offer-comp">
                <img src={icon1} alt="" className="offer_icon" />
                <span>Weight Loss Class</span>
              </div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </Animate>

          <Animate animateIn="fadeInUp" delay={200} animateOnce={true}>
            <div className="offer__comp">
              <div className="offer-comp">
                <img src={icon4} alt="" className="offer_icon" />
                <span>Yoga Class</span>
              </div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </Animate>
          <Animate animateIn="fadeInUp" delay={250} animateOnce={true}>
            <div className="offer__comp">
              <div className="offer-comp">
                <img src={icon6} alt="" className="offer_icon" />
                <span>spinning Class</span>
              </div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </Animate>

          <Animate animateIn="fadeInUp" delay={300} animateOnce={true}>
            <div className="offer__comp">
              <div className="offer-comp">
                <img src={icon5} alt="" className="offer_icon" />
                <span>private fit Class</span>
              </div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </Animate>
          <Animate animateIn="fadeInUp" delay={350} animateOnce={true}>
            <div className="offer__comp">
              <div className="offer-comp">
                <img src={icon2} alt="" className="offer_icon" />
                <span>nutrition Class</span>
              </div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </Animate>

          <Animate animateIn="fadeInUp" delay={400} animateOnce={true}>
            <div className="offer__comp">
              <div className="offer-comp">
                <img src={icon3} alt="" className="offer_icon" />
                <span>pilates Class</span>
              </div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
}

export default Offers;
