import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import RegisterWorkers from "./pages/RegisterWorkers";
import RegisterRecruiters from "./pages/RegisterRecruiters";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register-workers" exact component={RegisterWorkers} />
        <Route path="/register-recruiters" exact component={RegisterRecruiters} />
      </Switch>
    </Router>
  );
}

export default App;
