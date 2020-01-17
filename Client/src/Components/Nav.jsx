import React, { Component } from "react";
import logo from "../images/logo_.svg"; 
import {Link } from "react-router-dom"

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isSticky: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
   };

  sticky = () => {
    if (window.scrollY > 0) {
      this.setState({
        isSticky: true,
         
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        isOpen: false
      });
    });
    window.addEventListener("scroll", this.sticky);
  
  }

  render() {
    return (
      <div className={!this.state.isSticky ? "navbar" : "navbar sticky"}>
        <div className="container">
         <a href="/"><img src={logo} alt="" className="logo" /></a> 
          <ul className={!this.state.isOpen ? "nav" : "nav navbar-nav closeHam"}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="offers">offers</a>
            </li>
            <li>
              <a href="plans">plans</a>
            </li>
            <li>
              <a href="trainers">trainers</a>
            </li>
            <li>
              <a href="contact">contact</a>
            </li>
          </ul>
          <div className={!this.state.isOpen ? "hamberger" : " hamberger closeHam"} onClick={this.toggle}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
