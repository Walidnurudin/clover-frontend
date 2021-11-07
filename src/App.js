import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import LandingPage from "./pages/LandingPage";
import ProfilePerusahaan from "./pages/ProfilePerusahaan";
import EditProfilePerusahaan from "./pages/EditProfilePerusahaan";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/profile-perusahaan" exact component={ProfilePerusahaan} />
        <Route path="/edit-profile-perusahaan" exact component={EditProfilePerusahaan} />
      </Switch>
    </Router>
  );
}

export default App;
