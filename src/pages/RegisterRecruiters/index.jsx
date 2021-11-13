import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import AuthLeft from "../../components/atoms/AuthLeft";
import FormRegisterRecruiters from "../../components/molecules/Forms/RegisterRecruiters";

const RegisterRecruiters = () => {
  return (
    <>
      <Container fluid className="window__regis--recruiters">
        <Row>
          <Col md={6} className="column1">
            <AuthLeft />
          </Col>
          <Col md={6} className="column2">
            <FormRegisterRecruiters />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterRecruiters;
