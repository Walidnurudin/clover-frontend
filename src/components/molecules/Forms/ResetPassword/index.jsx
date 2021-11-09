import React from "react";
import { Form, Button } from "react-bootstrap";
import "./index.css";

const ResetPassword = () => {
  return (
    <>
      <div className="formResetPassword">
        <h1>Reset password</h1>
        <p>
          Enter your user accounts verified email address and we will send you a password reset
          link.
        </p>
        <Form className="formResetPassword__formInput">
          <Form.Group
            className="mb-3 formResetPassword__email"
            controlId="formBasicEmail"
            style={{ paddingBottom: "15px" }}
          >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Masukkan alamat email" />
          </Form.Group>
        </Form>
        <Button className="formResetPassword__button">Send password reset email</Button>
      </div>
    </>
  );
};

export default ResetPassword;
