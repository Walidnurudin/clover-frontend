import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
