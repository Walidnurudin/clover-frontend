import React from "react";
import { Form, Button } from "react-bootstrap";
import "./index.css";

const FormLogin = () => {
  return (
    <>
      <div className="formLogin">
        <h1>Halo, Clovers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam quas similique
          earum sequi autem, dolorem culpa atque nulla ipsa debitis,
        </p>
        <Form className="formLogin__formInput">
          <Form.Group
            className="mb-3 formLogin__email"
            controlId="formBasicEmail"
            style={{ paddingBottom: "15px" }}
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Masukkan alamat email" />
          </Form.Group>
          <Form.Group
            className="mb-3 formLogin__password"
            controlId="formBasicPassword"
            style={{ paddingBottom: "15px" }}
          >
            <Form.Label>Kata Sandi</Form.Label>
            <Form.Control type="password" placeholder="Masukkan kata sandi" />
          </Form.Group>
          <a href="" className="formLogin__forgotPass">
            Lupa kata sandi?
          </a>
        </Form>
        <Button className="formLogin__button">Masuk</Button>
        <p className="formLogin__signUp">
          Anda belum punya akun? <a href="">Daftar disini</a>
        </p>
      </div>
    </>
  );
};

export default FormLogin;
