import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import AuthLeft from "../../components/atoms/AuthLeft";
import FormResetPassword from "../../components/molecules/Forms/ResetPassword";

const ResetPassword = () => {
  return (
    <>
      <Container fluid className="window">
        <Row>
          <Col md={6} className="column1">
            <AuthLeft />
          </Col>
          <Col md={6} className="column2">
            <FormResetPassword />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ResetPassword;
