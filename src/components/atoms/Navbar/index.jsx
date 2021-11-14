import React, { useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Bell, Envelope } from "react-bootstrap-icons";
import { Profile } from "../../../assets/images";
import "./index.css";
import { LogoPurple } from "../../../assets/images";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = (props) => {
  // const profileUserHome = props.user ? props.user.userProfile.image : null;
  // const profileUserRecruiter = props.users ? props.users.image : null;
  // const profile = profileUserHome
  //   ? profileUserHome
  //   : profileUserRecruiter
  //   ? profileUserRecruiter
  //   : null;

  const path = props.location.pathname.replace("/", "");
  const history = useHistory();
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  console.log(show);

  const handleProfileMenu = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleLogout = () => {
    setShow(false);
    localStorage.clear();
    history.push("/");
  };

  const linkToLogged = () => {
    history.push("/login-workers");
  };
  const linkToRegist = () => {
    history.push("/register-workers");
  };

  const handleToProfile = () => {
    if (role === "Pekerja") {
      history.push("/profile");
    } else {
      history.push("/profile-recruiters");
    }
  };
  return (
    <>
      <Navbar expand="lg" className="navigation__mobile position-relative">
        <Container fluid className="navigation">
          <div className="menu">
            <Link to="/">
              <img src={LogoPurple} alt="Clover Hire" className="logo__purple" />
            </Link>
            {token ? (
              role === "Perekrut" ? (
                <Link to="/home" className="menu__home text-decoration-none text-dark fw-bold">
                  Home
                </Link>
              ) : null
            ) : null}
          </div>

          {(token && path === "home") ||
          path === "profile" ||
          path === "profile-recruiters" ||
          path === "hire" ||
          path === "edit-profile-recruiters" ? (
            <div className="navbar__item--right">
              <Bell size={25} style={{ marginRight: "40px", color: "#9B9B9B" }} />
              <Envelope size={25} style={{ marginRight: "40px", color: "#9B9B9B" }} />
              <img
                src={
                  props.image
                    ? `${
                        process.env.REACT_APP_NAME === "dev"
                          ? process.env.REACT_APP_DEV
                          : process.env.REACT_APP_PROD
                      }uploads/user/${props.image}`
                    : Profile
                }
                alt="Profile"
                className="user__pic"
                onClick={handleProfileMenu}
              />
            </div>
          ) : token && path !== "home" ? (
            <button
              onClick={handleToProfile}
              style={{
                right: "50px",
                borderRadius: "4px",
                backgroundColor: "#5e50a1",
                border: "none",
                color: "#fff",
                fontWeight: "700",
                fontSize: "14px",
                padding: "12px 24px"
              }}
            >
              Profil
            </button>
          ) : (
            <div className="navbar__item--right">
              <Button className="button__signIn" onClick={linkToLogged}>
                Masuk
              </Button>
              <Button className="button__signUp" onClick={linkToRegist}>
                Daftar
              </Button>
            </div>
          )}
        </Container>
      </Navbar>

      {!show ? null : (
        <div className="bg-light position-absolute w-25 p-2" style={{ zIndex: 1, right: "0px" }}>
          <div>
            {localStorage.getItem("role") === "Pekerja" ? (
              <Link
                to="/profile"
                className="text-decoration-none d-block fs-6 text-center text-dark  mb-3 fw-bold"
              >
                Profile
              </Link>
            ) : (
              <Link
                to="/profile-recruiters"
                className="text-decoration-none d-block fs-6 text-center text-dark  mb-3 fw-bold"
              >
                Profile
              </Link>
            )}

            <Link
              onClick={handleLogout}
              className="text-decoration-none d-block fs-6 text-center text-dark"
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
