import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Hire from "./pages/Hire";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/hire" component={Hire} />
      </Switch>
    </Router>
  );
}

export default App;
