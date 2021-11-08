import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Eye } from "../../assets/images/ProfilePageImage";
import axios from "../../utils/axios";

function UbahPassword(props) {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [changePassData, setChangePassData] = useState({
    newPassword: "",
    confirmPassword: ""
  });

  const handleChangePass = (event) => {
    setChangePassData({
      ...changePassData,
      [event.target.name]: event.target.value
    });
  };
  useEffect(() => {
    console.log(changePassData);
  }, [changePassData]);

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header className="justify-content-center">
          <Modal.Title>Ubah Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="roow">
            <div className="col6">
              <label htmlFor="" className="col-12">
                New Password
              </label>
              <div className="changePassInput d-flex justify-content-between align-items-center  col-12 mb-4 p-2">
                <input
                  onChange={(event) => handleChangePass(event)}
                  name="newPassword"
                  type={showPass ? "text" : "password"}
                  placeholder="Input Confirm Password"
                  style={{ width: "90%" }}
                />
                <span className="d-flex align-items-center hover-pointer">
                  <img
                    src={Eye}
                    alt=""
                    onClick={showPass ? () => setShowPass(false) : () => setShowPass(true)}
                  />
                </span>
              </div>
            </div>
            <div className="col6">
              <label htmlFor="" className="col-12">
                Confirm Password
              </label>
              <div className="changePassInput d-flex justify-content-between align-items-center col-12 mb-4 p-2">
                <input
                  onChange={(event) => handleChangePass(event)}
                  type={showConfirmPass ? "text" : "password"}
                  placeholder="Input Confirm Password"
                  name="confirmPassword"
                  style={{ width: "90%" }}
                />
                <span className="d-flex align-items-center hover-pointer ">
                  <img
                    src={Eye}
                    alt=""
                    onClick={
                      showConfirmPass
                        ? () => setShowConfirmPass(false)
                        : () => setShowConfirmPass(true)
                    }
                  />
                </span>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="justify-content-evenly">
          <div style={{ width: "40%" }}>
            <Button className="ack-btn-2" onClick={props.handleClose}>
              Close
            </Button>
          </div>
          <div style={{ width: "40%" }}>
            <Button
              className="ack-btn-prim"
              style={{ width: "40%" }}
              onClick={handleChangePassword}
            >
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UbahPassword;
