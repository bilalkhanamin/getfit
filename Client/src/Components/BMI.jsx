import React, { Component } from "react";
import Bodymass from "../images/BMI.svg";
import Modal from "react-awesome-modal";
import Animate from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class BMI extends Component {
  constructor(props) {
    super();

    this.state = {
      height: 0,
      weight: 0,
      status: "Please enter values",
      BMI: 0,
      value1: false,
      value2: false,
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

  BMIclac = e => {
    e.preventDefault();
    if (this.state.value1 && this.state.value2) {
      this.openModal();
    }

    const bmi = this.state.weight / (this.state.height * this.state.height);

    if (bmi < 18.5) {
      return this.setState({
        status: "Underweight",
        BMI: bmi
      });
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return this.setState({
        status: "Normal weight",
        BMI: bmi
      });
    }
    if (bmi >= 25 && bmi < 29.9) {
      return this.setState({
        status: "overweight",
        BMI: bmi
      });
    }
    if (bmi >= 30) {
      return this.setState({
        status: "obesity",
        BMI: bmi
      });
    }

    return;
  };
  render() {
    return (
      <div className="BMI">
        <div className="container">
             <div className="heading">
              <p>Body mass index</p>
              <h1>calculate your BMI</h1>
            </div>
           <div className="BMI_cont">
            <Animate animateIn="slideInLeft" delay={200} animateOnce={true}>
              <form action="/">
                <input
                  type="number"
                  placeholder="Height"
                  min="4"
                  max="8"
                  required
                  onChange={e =>
                    this.setState({ height: e.target.value, value1: true })
                  }
                />
                <input
                  type="number"
                  placeholder="Weight"
                  min="50"
                  max="300"
                  required
                  onChange={e =>
                    this.setState({ weight: e.target.value, value2: true })
                  }
                />

                <input
                  type="submit"
                  value="calculate"
                  className="btn"
                  onClick={this.BMIclac}
                />
                <Modal
                  visible={this.state.visible}
                  width="400"
                  height="300"
                  effect="fadeInUp"
                  onClickAway={() => this.closeModal()}
                >
                  <div className="model">
                    <p>Your BMI : {this.state.BMI}</p>
                    <b>{this.state.status}</b>
                    <button onClick={() => this.closeModal()} className="btn">
                      Close
                    </button>
                  </div>
                </Modal>
              </form>
            </Animate>
            <img src={Bodymass} alt="Bodymassindex" className="Bodymass" />
          </div>
        </div>
      </div>
    );
  }
}

export default BMI;
