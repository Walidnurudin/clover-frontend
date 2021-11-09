import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { login } from "../../../../stores/actions/auth";
import { Form, Button } from "react-bootstrap";
import "./index.css";

class FormLogin extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: ""
      },
      isError: false
    };
  }

  handleChangeForm = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props
      .login(this.state.form)
      .then((res) => {
        localStorage.setItem("token", res.value.data.data.token);
        localStorage.setItem("id", res.value.data.data.id);
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({
          isError: true
        });
        setTimeout(() => {
          this.setState({
            isError: false
          });
        }, 3000);
      });
  };

  handleReset = (event) => {
    event.preventDefault();
  };
  render() {
    const { msg } = this.props.auth;
    return (
      <>
        <div className="formLogin">
          <h1>Halo, Clovers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam quas similique
            earum sequi autem, dolorem culpa atque nulla ipsa debitis,
          </p>
          {this.state.isError && <div className="alert alert-danger">{msg}</div>}
          <Form
            className="formLogin__formInput"
            onSubmit={this.handleSubmit}
            onReset={this.handleReset}
          >
            <Form.Group
              className="mb-3 formLogin__email"
              controlId="formBasicEmail"
              style={{ paddingBottom: "15px" }}
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Masukkan alamat email"
                name="email"
                onChange={this.handleChangeForm}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 formLogin__password"
              controlId="formBasicPassword"
              style={{ paddingBottom: "15px" }}
            >
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan kata sandi"
                name="password"
                onChange={this.handleChangeForm}
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <div></div>
              <a href="/reset-password" className="formLogin__forgotPass">
                Lupa kata sandi?
              </a>
            </div>
            <Button className="formLogin__button" type="submit">
              Masuk
            </Button>
          </Form>

          <p className="formLogin__signUp">
            Anda belum punya akun? <a href="/register-recruiters">Daftar disini</a>
          </p>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = { login };

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(FormLogin);
