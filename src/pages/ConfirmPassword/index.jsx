import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import AuthLeft from "../../components/atoms/AuthLeft";
import FormConfirmPassword from "../../components/molecules/Forms/ConfirmPassword";

const ConfirmPassword = (props) => {
  const { id, token } = props.match.params;
  return (
    <>
      <Container fluid className="window">
        <Row>
          <Col md={6} className="column1">
            <AuthLeft />
          </Col>
          <Col md={6} className="column2">
            <FormConfirmPassword user_id={id} user_token={token} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ConfirmPassword;
