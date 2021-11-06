import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
