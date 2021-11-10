import React, { useState } from "react";
import { Form, Button, Toast } from "react-bootstrap";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { callbackForgotPassword } from "../../../../stores/actions/auth";
import "./index.css";

const ResetPassword = (props) => {
  const [formCb, setFormCb] = useState({
    email: ""
  });

  const [isError, setError] = useState(props.auth.msg);
  const [isDisabled, setDisabled] = useState(false);

  const handleChangeInput = (event) => {
    setFormCb({ ...formCb, [event.target.name]: event.target.value });
  };
  const handleCallbackForgotPassword = async (event) => {
    try {
      event.preventDefault();
      const { email } = formCb;
      // console.log(email);
      const response = await props.callbackForgotPassword(email);
      setError(response.value.data.msg);
      setDisabled(true);
      toast.success(`${response.value.data.msg}`);
    } catch (error) {
      toast.error("Email not found!");
    }
  };
  return (
    <>
      <div className="formResetPassword">
        <h1>Reset password</h1>
        <p>
          Enter your user accounts verified email address and we will send you a password reset
          link.
        </p>
        <ToastContainer />
        <Form className="formResetPassword__formInput" onSubmit={handleCallbackForgotPassword}>
          <Form.Group className="mb-3 formResetPassword__email" style={{ paddingBottom: "15px" }}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Masukkan alamat email"
              name="email"
              onChange={handleChangeInput}
            />
          </Form.Group>
          <Button className="formResetPassword__button" type="submit" disabled={isDisabled}>
            Send password reset email
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
  callbackForgotPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
