import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { registerRecruiters } from "../../../../stores/actions/auth";
import { Form, Button, Image } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { LogoPurple } from "../../../../assets/images";
import "./index.css";

class FormRegisterRecruiters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nama: "",
        email: "",
        perusahaan: "",
        bidangPerusahaan: "",
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
      .registerRecruiters(this.state.form)
      .then((res) => {
        this.handleToast();
        setTimeout(() => {
          this.props.history.push("/login-recruiters");
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
          <p>Jadilah yang pertama menemukan developer terbaik dengan berbagai keahlian</p>
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
            <Form.Group className="mb-3 formSignUp__company" style={{ paddingBottom: "15px" }}>
              <Form.Label>Perusahaan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama perusahaan"
                name="perusahaan"
                onChange={this.handleChangeForm}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 formSignUp__companySector"
              style={{ paddingBottom: "15px" }}
            >
              <Form.Label>Bidang Perusahaan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bidang perusahaan anda"
                name="bidangPerusahaan"
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
          <Link to="/register-workers" className="formSignUp__registerWorkers">
            <h5>Daftar sebagai pekerja</h5>
          </Link>{" "}
          <p className="formSignUp__login">
            Anda sudah punya akun? <Link to="/login-recruiters">Masuk disini</Link>
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

const mapDispatchToProps = { registerRecruiters };

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(FormRegisterRecruiters);
