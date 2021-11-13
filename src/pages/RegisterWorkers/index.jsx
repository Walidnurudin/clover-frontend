import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import AuthLeft from "../../components/atoms/AuthLeft";
import FormRegisterWorkers from "../../components/molecules/Forms/RegisterWorkers";

const RegisterWorkers = () => {
  return (
    <>
      <Container fluid className="window__regis--workers">
        <Row>
          <Col md={6} className="column1">
            <AuthLeft />
          </Col>
          <Col md={6} className="column2">
            <FormRegisterWorkers />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterWorkers;
