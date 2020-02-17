import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import AdminLogin from './components/AdminLogin';
import About from "./components/About";
import VideoAstral from "./components/VideoAstral";
import VideoSunson from "./components/VideoSunson";
// import VideoSection from "./components/VideoSection";
import Workshops from "./components/Workshops";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/admin" component={Admin} />
        {/* <Route exact path="/admin" component={Admin} /> */}
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/about" component={About} />
        {/* <Route path="/videoSection" component={VideoSection} /> */}
        <Route path="/astral" component={VideoAstral} />
        <Route path="/sunson" component={VideoSunson} />
        <Route path="/workshops" component={Workshops} />
        <Route path="/contact" component={Contact} />
        <Route component={Home} />
      </Switch>
    </div>
  );
}

export default App;
