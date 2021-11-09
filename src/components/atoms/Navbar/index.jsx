import React, { useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Bell, Envelope } from "react-bootstrap-icons";
import { Profile } from "../../../assets/images";
import "./index.css";
import { LogoPurple } from "../../../assets/images";
import { Link, useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");

  const handleProfileMenu = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  const handleMenuLogged = () => {};
  return (
    <>
      <Navbar expand="lg" className="navigation__mobile position-relative">
        <Container fluid className="navigation">
          <Link to="/">
            <img src={LogoPurple} alt="Clover Hire" className="logo__purple" />
          </Link>
          {token ? (
            <div className="navbar__item--right">
              <Bell size={25} style={{ marginRight: "40px", color: "#9B9B9B" }} />
              <Envelope size={25} style={{ marginRight: "40px", color: "#9B9B9B" }} />
              <img src={Profile} alt="" className="user__pic" onClick={handleProfileMenu} />
            </div>
          ) : (
            <div className="navbar__item--right">
              <Button className="button__signIn" onClick={handleMenuLogged}>
                Masuk
              </Button>
              <Button className="button__signUp">Daftar</Button>
            </div>
          )}
        </Container>
      </Navbar>
      {!show ? null : (
        <div className="bg-light position-absolute w-25 p-2" style={{ right: "0px" }}>
          <div>
            <Link
              to="/profile"
              className="text-decoration-none d-block fs-6 text-center text-dark  mb-3 fw-bold"
            >
              Profile
            </Link>
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
