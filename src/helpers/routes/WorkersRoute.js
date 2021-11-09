import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const WorkersRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");
  // const userState = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login-workers" />
      }
    />
  );
};

export default WorkersRoute;
