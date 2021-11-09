import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Hire from "./pages/Hire";
import LoginWorkers from "./pages/LoginWorkers";
import LoginRecruiters from "./pages/LoginRecruiters";
import RegisterWorkers from "./pages/RegisterWorkers";
import RegisterRecruiters from "./pages/RegisterRecruiters";
import ResetPassword from "./pages/ResetPassword";
import ConfirmPassword from "./pages/ConfirmPassword";
import ProfilePerusahaan from "./pages/ProfilePerusahaan";
import EditProfilePerusahaan from "./pages/EditProfilePerusahaan";
import ProfilePage from "./pages/ProfilePage";

// REDUX
import { Provider } from "react-redux";
import store from "./stores/store";

// ROUTE
import PublicRoute from "./helpers/routes/PublicRoute";
import RecruitersRoute from "./helpers/routes/RecruitersRoute";
import WorkersRoute from "./helpers/routes/WorkersRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* PUBLIC */}
          <Route path="/" exact component={LandingPage} />

          {/* WITHOUT TOKEN */}
          <Route path="/login-workers" exact component={LoginWorkers} />
          <Route path="/login-recruiters" exact component={LoginRecruiters} />
          <Route path="/register-workers" exact component={RegisterWorkers} />
          <Route path="/register-recruiters" exact component={RegisterRecruiters} />
          <Route path="/reset-password" exact component={ResetPassword} />
          <Route path="/confirm-password" exact component={ConfirmPassword} />

          {/* PEREKRUT */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/hire" component={Hire} />
          <Route path="/profile-recruiters" exact component={ProfilePerusahaan} />
          <Route path="/edit-profile-recruiters" exact component={EditProfilePerusahaan} />

          {/* PEKERJA */}
          <Route path="/profile" exact component={ProfilePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
