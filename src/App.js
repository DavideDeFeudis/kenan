import React from "react";
import { Route, Switch } from "react-router-dom";
// import Home from "./components/Home/Home";
// import Admin from "./components/Admin";
import About from "./components/About/About";
// import VideoAstral from "./components/VideoAstral/VideoAstral";
// import VideoSunson from "./components/VideoSunson/VideoSunson";
// import Workshops from "./components/Workshops/Workshops";
// import Contact from "./components/Contact/Contact";
// import PrivateRoute from "./PrivateRoute";
// import Login from "./components/Login/Login";
// import OnlineCoaching from "./components/OnlineCoaching/OnlineCoaching";

function App() {
  return (
    <div data-test="app">
      <Switch>
        {/* <PrivateRoute exact path="/admin" component={Admin} /> */}
        {/* <Route exact path="/admin" component={Admin} /> */}
        {/* <Route path="/admin/login" component={AdminLogin} /> */}

        {/* <Route exact path="/login" component={Login} /> */}
        <Route path="/about" component={About} />
        {/* <Route path="/astral" component={VideoAstral} />
        <Route path="/sunson" component={VideoSunson} />
        <Route path="/workshops" component={Workshops} />
        <Route path="/contact" component={Contact} />
        <Route path="/online-coaching" component={OnlineCoaching} />
        <Route component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;
