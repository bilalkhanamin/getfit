import React, { Component } from "react";
import contactus from "../images/illustrations/contact.svg";
import Modal from "react-awesome-modal";
import Animate from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class Contact extends Component {
  constructor(props) {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
      visible: false
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  eventHander = e => {
    e.preventDefault();
    this.openModal();
  };

  render() {
    return (
      <div className="contact">
        <div className="container">
             <div className="heading">
              <p>contact</p>
              <h1>get in touch</h1>
            </div>
          

          <div className="contact_cont">
            <img src={contactus} alt="contactimage" />
            <Animate animateIn="slideInRight" delay={200} animateOnce={true}>
              <form action="/">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  onChange={e => this.setState({ name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  required
                  onChange={e => this.setState({ message: e.target.value })}
                />{" "}
                <br />
                <input
                  type="submit"
                  value="submit"
                  class="btn"
                  onClick={this.eventHander}
                />
              </form>
            </Animate>
          </div>

          <Modal
            visible={this.state.visible}
            width="400"
            height="300"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
          >
            <div className="model">
              <b>thank you {this.state.name} ! </b>
              <button onClick={() => this.closeModal()} className="btn">
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Contact;
