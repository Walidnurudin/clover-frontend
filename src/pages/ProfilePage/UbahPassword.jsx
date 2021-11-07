import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Eye } from "../../assets/images/ProfilePageImage";

function UbahPassword(props) {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

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
                  type={showPass ? "text" : "password"}
                  placeholder="Inpu Confirm Password"
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
                  type={showConfirmPass ? "text" : "password"}
                  placeholder="Inpu Confirm Password"
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
          <Button variant="secondary" style={{ width: "40%" }} onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" style={{ width: "40%" }} onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UbahPassword;
