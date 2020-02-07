import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import AdminSignup from "./components/AdminSignup";
import About from "./components/About";
import Choreography from "./components/Choreography";
import Workshops from "./components/Workshops";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/admin" component={Admin} />
        <Route path="/admin/signup" component={AdminSignup} />
        <Route path="/about" component={About} />
        <Route path="/choreography" component={Choreography} />
        <Route path="/workshops" component={Workshops} />
        <Route path="/contact" component={Contact} />
        <Route component={Home} />
      </Switch>
    </div>
  );
}

export default App;
