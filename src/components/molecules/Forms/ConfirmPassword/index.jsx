import React, { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { LogoPurple } from "../../../../assets/images";
import { resetPassword } from "../../../../stores/actions/auth";
import { useHistory } from "react-router-dom";
import "./index.css";

const FormConfirmPassword = (props) => {
  const history = useHistory();
  const [formResetPassword, setResetPassword] = useState({
    newPassword: "",
    confirmPassword: ""
  });
  const user_id = props.user_id;
  const token = props.user_token;
  const handleChangeFormResetPass = (event) => {
    setResetPassword({ ...formResetPassword, [event.target.name]: event.target.value });
  };
  const handleResetPassword = async (event) => {
    try {
      event.preventDefault();
      const { newPassword, confirmPassword } = formResetPassword;
      const setFormResetPassword = { newPassword, confirmPassword };

      for (const valueReset in setFormResetPassword) {
        if (setFormResetPassword[valueReset] === "") {
          toast.error("Write your new password...");
          return false;
        }
      }
      const response = await props.resetPassword(user_id, token, setFormResetPassword);
      toast.success(`${response.value.data.msg}`);
      setTimeout(() => {
        history.push("/login-workers");
      }, 2000);
      event.target.reset();
      setFormResetPassword({
        newPassword: "",
        confirmPassword: ""
      });
    } catch (error) {
      if (error.message === "Cannot read properties of undefined (reading 'msg')") {
        toast.error("Password dont match!");
      }
    }
  };
  return (
    <>
      <div className="formConfirmPassword">
        <Image src={LogoPurple} className="logo__mobile" />
        <h1>Halo, Clovers</h1>
        <p>Ubah password anda untuk mengaktifkan akun anda</p>
        <ToastContainer />
        <Form className="formConfirmPassword__formInput" onSubmit={handleResetPassword}>
          <Form.Group
            className="mb-3 formConfirmPassword__password"
            controlId="formBasicPassword"
            style={{ paddingBottom: "15px" }}
          >
            <Form.Label>Kata Sandi</Form.Label>
            <Form.Control
              type="password"
              placeholder="Masukkan kata sandi"
              name="newPassword"
              onChange={handleChangeFormResetPass}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 formConfirmPassword__password"
            controlId="formBasicPassword"
            style={{ paddingBottom: "15px" }}
          >
            <Form.Label>Konfirmasi kata Sandi</Form.Label>
            <Form.Control
              type="password"
              placeholder="Masukkan konfirmasi kata sandi"
              name="confirmPassword"
              onChange={handleChangeFormResetPass}
            />
          </Form.Group>
          <Button className="formConfirmPassword__button" type="submit">
            Reset password
          </Button>
        </Form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  resetPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(FormConfirmPassword);
