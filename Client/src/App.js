import React from 'react';
import {Switch,Route } from "react-router-dom"
import './sass/style.css'
import Nav from './Components/Nav'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Offers from "./Pages/Offers";
import Plans from "./Pages/Plans";
import Trainers from "./Pages/Trainers";
import Contact from "./Pages/Contact";
 
 
function App() {
  return (
    <div >
      <Nav />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/offers" component={Offers} />
      <Route exact path="/plans" component={Plans} />
      <Route exact path="/trainers" component={Trainers} />
      <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
