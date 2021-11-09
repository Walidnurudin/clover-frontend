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
import { store, persistor } from "./stores/store";

import { PersistGate } from "redux-persist/integration/react";

// ROUTE
import PublicRoute from "./helpers/routes/PublicRoute";
import RecruitersRoute from "./helpers/routes/RecruitersRoute";
import WorkersRoute from "./helpers/routes/WorkersRoute";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            {/* PUBLIC */}
            <PublicRoute path="/" exact component={LandingPage} />

            {/* WITHOUT TOKEN */}
            <PublicRoute restricted={true} path="/login-workers" exact component={LoginWorkers} />
            <PublicRoute
              restricted={true}
              path="/login-recruiters"
              exact
              component={LoginRecruiters}
            />
            <PublicRoute
              restricted={true}
              path="/register-workers"
              exact
              component={RegisterWorkers}
            />
            <PublicRoute
              restricted={true}
              path="/register-recruiters"
              exact
              component={RegisterRecruiters}
            />
            <PublicRoute restricted={true} path="/reset-password" exact component={ResetPassword} />
            <PublicRoute
              restricted={true}
              path="/confirm-password"
              exact
              component={ConfirmPassword}
            />

            {/* PEREKRUT */}
            <RecruitersRoute exact path="/home" component={Home} />
            <RecruitersRoute exact path="/hire" component={Hire} />
            <RecruitersRoute path="/profile-recruiters" exact component={ProfilePerusahaan} />
            <RecruitersRoute
              path="/edit-profile-recruiters"
              exact
              component={EditProfilePerusahaan}
            />

            {/* PEKERJA */}
            <WorkersRoute path="/profile" exact component={ProfilePage} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
