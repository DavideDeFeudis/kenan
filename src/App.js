import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import About from "./components/About";
import Choreography from "./components/Choreography";
import Workshops from "./components/Workshops";
import Contact from "./components/Contact";
import Default from "./components/Default";
// import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      {/* <Layout> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/about" component={About} />
          <Route path="/choreography" component={Choreography} />
          <Route path="/workshops" component={Workshops} />
          <Route path="/contact" component={Contact} />
          <Route component={Default} />
        </Switch>
      {/* </Layout> */}
    </div>
  );
}

export default App;
