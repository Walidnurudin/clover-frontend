import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { login } from "../../../../stores/actions/auth";
import { Form, Button, Image } from "react-bootstrap";
import { LogoPurple } from "../../../../assets/images";
import { getUserProfile } from "../../../../stores/actions/user";
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
        this.props.getUserProfile(res.value.data.data.id).then((res) => {
          console.log("user logged =>", res);
          localStorage.setItem("role", res.value.data.data[0].role);
          if (res.value.data.data[0].role === "Perekrut") {
            this.props.history.push("/home");
          } else {
            this.props.history.push("/profile");
          }
        });
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
          <Image src={LogoPurple} className="logo__mobile" />
          <h1>Halo, Clovers</h1>
          <p>Masukan alamat email dan kata sandi anda untuk dapat mengakses clover hire</p>
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
              <Link to="/login-workers" className="formLogin__forgotPass">
                Login Sebagai Pekerja
              </Link>
              <Link to="/reset-password" className="formLogin__forgotPass">
                Lupa kata sandi?
              </Link>
            </div>
            <Button className="formLogin__button" type="submit">
              Masuk
            </Button>
          </Form>

          <p className="formLogin__signUp">
            Anda belum punya akun? <Link to="/register-recruiters">Daftar disini</Link>
          </p>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = { login, getUserProfile };

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(FormLogin);
