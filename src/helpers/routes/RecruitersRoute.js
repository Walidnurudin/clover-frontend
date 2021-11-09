import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const RecruitersRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");
  const userState = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && userState.users.role === "Perekrut" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/profile" />
        )
      }
    />
  );
};

export default RecruitersRoute;
