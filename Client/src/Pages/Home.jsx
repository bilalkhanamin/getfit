import React from "react";
import Landing from "../Components/Landing";
import Performance from "../Components/Performance";
import About from "../Components/About";
import Offers from "../Components/Offers";
import GoodHealth from "../Components/GoodHealth";
import Testimonials from "../Components/Testimonials";
import Plans from "../Components/Plans";
import Trainer from "../Components/Trainer";
import BMI from "../Components/BMI";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
function Home() {
  return (
    <div>
      <Landing />
      <Performance />
      <About />
      <Offers />
      <GoodHealth />
      <Testimonials />
      <Plans />
      <Trainer />
      <BMI />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
