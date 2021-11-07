import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Bell, Envelope } from "react-bootstrap-icons";
import { Profile } from "../../../assets/images";
import "./index.css";
import { LogoPurple } from "../../../assets/images";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="navigation__mobile">
        <Container fluid className="navigation">
          <Navbar.Brand href="#">
            <img src={LogoPurple} alt="" className="logo__purple" />
          </Navbar.Brand>
          <div className="navbar__item--right">
            <Button className="button__signIn">Masuk</Button>
            <Button className="button__signUp">Daftar</Button>
          </div>

          {/* <div className="navbar__item--right">
            <Bell size={25} style={{ marginRight: "40px", color: "#9B9B9B" }} />
            <Envelope size={25} style={{ marginRight: "40px", color: "#9B9B9B" }} />
            <img src={Profile} alt="" className="user__pic" />
          </div> */}
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
