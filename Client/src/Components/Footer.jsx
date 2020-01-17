import React from "react";
import mobIcon from "../images/icons/mob.svg";
import EmailIcon from "../images/icons/email.svg";
import facebook from "../images/icons/facebook.svg"
import instagram from "../images/icons/instagram.svg"
import twitter from "../images/icons/twitter.svg"
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="about">
          <h3>About us</h3>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country
          </p>
        </div>

        <div className="services">
          <h3>services</h3>
          <ul>
            <li>
              {" "}
              <a href="/">Weight loss classes</a>
            </li>
            <li>
              {" "}
              <a href="/">yoga classes</a>
            </li>
            <li>
              {" "}
              <a href="/">private fitness classes</a>
            </li>
            <li>
              {" "}
              <a href="/">spinning classes</a>
            </li>
            <li>
              {" "}
              <a href="/">pilates classes</a>
            </li>
            <li>
              {" "}
              <a href="/">nutirtion classes</a>
            </li>
          </ul>
        </div>

        <div className="link">
          <h3>useful links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Offers and plans</a>
            </li>
            <li>
              <a href="/">trainers</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className="contact__">
          <h3>Contact</h3>
          <div>
            <img src={mobIcon} alt="Mobile icon" class="mobIcon" />
            <p>+92 3400000000</p>
          </div>

          <div>
            <img src={EmailIcon} alt="Email icon" class="EmailIcon" />
            <p>something@exmaple.com</p>
          </div>

          <div>
            <img src={facebook} alt="facebook"/>
            <img src={instagram} alt="instagram"/>
            <img src={twitter} alt="twitter"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
