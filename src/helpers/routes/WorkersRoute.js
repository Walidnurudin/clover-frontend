import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const WorkersRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");
  const userState = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && userState.role === "Pekerja" ? (
          <Component {...props} />
        ) : isAuthenticated && userState.role === "Perekrut" ? (
          <Redirect to="/home" />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default WorkersRoute;
