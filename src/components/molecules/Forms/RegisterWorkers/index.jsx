import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { registerWorkers } from "../../../../stores/actions/auth";
import { Form, Button, Image } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { LogoPurple } from "../../../../assets/images";
import "./index.css";

class FormRegisterWorkers extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        nama: "",
        email: "",
        noHandphone: "",
        password: "",
        confirmPassword: ""
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
      .registerWorkers(this.state.form)
      .then((res) => {
        this.handleToast();
        setTimeout(() => {
          this.props.history.push("/login-workers");
        }, 5200);
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

  handleToast = () => {
    return toast.success(this.props.auth.msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  render() {
    const { msg } = this.props.auth;
    return (
      <>
        <div className="formSignUp">
          <Image src={LogoPurple} className="logo__mobile" />
          <h1>Halo, Clovers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam quas similique
            earum sequi autem, dolorem culpa atque nulla ipsa debitis,
          </p>
          {this.state.isError && <div className="alert alert-danger">{msg}</div>}
          <Form
            className="formSignUp__formInput"
            onSubmit={this.handleSubmit}
            onReset={this.handleReset}
          >
            <Form.Group className="mb-3 formSignUp__name" style={{ paddingBottom: "15px" }}>
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama panjang"
                name="nama"
                onChange={this.handleChangeForm}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 formSignUp__email"
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
            <Form.Group className="mb-3 formSignUp__phone" style={{ paddingBottom: "15px" }}>
              <Form.Label>No handphone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan no handphone"
                name="noHandphone"
                onChange={this.handleChangeForm}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 formSignUp__password"
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
            <Form.Group
              className="mb-3 formSignUp__confirmPassword"
              controlId="formBasicPassword"
              style={{ paddingBottom: "15px" }}
            >
              <Form.Label>Konfirmasi kata Sandi</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan konfirmasi kata sandi"
                name="confirmPassword"
                onChange={this.handleChangeForm}
              />
            </Form.Group>
            <Button className="formSignUp__button" type="submit">
              Daftar
            </Button>
          </Form>
          <p className="formSignUp__login">
            Anda sudah punya akun? <a href="/login-workers">Masuk disini</a>
          </p>
          <ToastContainer
            position="bottom-right"
            autoClose={7000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = { registerWorkers };

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(FormRegisterWorkers);
