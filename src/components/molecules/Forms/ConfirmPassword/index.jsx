import React from "react";
import { Form, Button, Image } from "react-bootstrap";
import { LogoPurple } from "../../../../assets/images";
import "./index.css";

const ConfirmPassword = () => {
  return (
    <>
      <div className="formConfirmPassword">
        <Image src={LogoPurple} className="logo__mobile" />
        <h1>Halo, Clovers</h1>
        <p>You need to change your password to activate your account</p>
        <Form className="formConfirmPassword__formInput">
          <Form.Group
            className="mb-3 formConfirmPassword__password"
            controlId="formBasicPassword"
            style={{ paddingBottom: "15px" }}
          >
            <Form.Label>Kata Sandi</Form.Label>
            <Form.Control type="password" placeholder="Masukkan kata sandi" />
          </Form.Group>
          <Form.Group
            className="mb-3 formConfirmPassword__password"
            controlId="formBasicPassword"
            style={{ paddingBottom: "15px" }}
          >
            <Form.Label>Konfirmasi kata Sandi</Form.Label>
            <Form.Control type="password" placeholder="Masukkan konfirmasi kata sandi" />
          </Form.Group>
        </Form>
        <Button className="formConfirmPassword__button">Reset password</Button>
      </div>
    </>
  );
};

export default ConfirmPassword;
