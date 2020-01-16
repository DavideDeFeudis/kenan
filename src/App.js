import React from 'react';
import 'bootstrap'
import $ from 'jquery'
import Popper from 'popper.js'
import { Route, Switch } from "react-router-dom";
import './sass/style.scss';
import './App.css';

import Home from "./components/Home";
import About from "./components/About";
import Choreography from "./components/Choreography";
import Workshops from "./components/Workshops";
import Contact from "./components/Contact";
import Default from "./components/Default";
import Navbar from "./components/Navbar";
import Layout from './components/Layout';
// import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <NavigationBar /> */}
      {/* <Layout> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/choreography" component={Choreography} />
          <Route path="/workshops" component={Workshops} />
          <Route path="/contact" component={Contact} />
          <Route component={Default} />
        </Switch>
      {/* </Layout> */}
    </React.Fragment>
  );
}

export default App;
