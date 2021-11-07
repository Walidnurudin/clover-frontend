import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import { LogoWhite } from "../../../assets/images";

const Footer = () => {
  return (
    <>
      <Container fluid className="footer__row">
        <Row>
          <Col sm={12} md={4}>
            <img src={LogoWhite} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quis earum magnam e
            </p>
          </Col>
        </Row>
        <hr />
        <Row className="footer__end">
          <p className="footer__end">© 2020 Pewworld. All Rights Reserved.</p>
          <div>
            <ul>
              <li>Telepon</li>
              <li>Email</li>
            </ul>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
