import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import { LogoWhite } from "../../../assets/images";

const Footer = () => {
  return (
    <>
      <Container fluid className="footer__row">
        <Row>
          <Col md={4}>
            <img src={LogoWhite} alt="" className="logo__white" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolorum impedit porro
              animi corporis, beatae corrupti minima itaque ipsum temporibus magnam!
            </p>
          </Col>
        </Row>
        <hr />
        <Row className="footer__end">
          <div className="footer__end--item">
            <div className="footer__end--left">
              <p>© 2021 Clover-Hire. All Rights Reserved</p>
            </div>
            <div className="footer__end--right">
              <p className="footer__end--right--phone">Telepon</p>
              <p>Email</p>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
