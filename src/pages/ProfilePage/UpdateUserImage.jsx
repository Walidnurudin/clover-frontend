import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Eye } from "../../assets/images/ProfilePageImage";

function UpdateUserImage(props) {
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
            <div className="col-12 portoInput p-5 d-flex justify-content-center">
              <div className="col-10 text-center justify-content-center">
                <img src={Cloud} alt="" />
                <p className="my-4 ack-fsize-14 col-12">
                  Drag & Drop untuk Upload Gambar Aplikasi Mobile
                </p>
                <p className="my-4 ack-fsize-12 col-12">
                  Atau cari untuk mengupload file dari direktorimu.
                </p>
                <div className="row col-12 justify-content-center  margin-reset">
                  <div className="col-lg-6 mb-3 mb-lg-0 col-12 inputPortoImage__cond align-items-center row text-start">
                    <div className="col-lg-3 text-center col-12">
                      <img src={Expand} alt="" />
                    </div>
                    <span className="col-lg-9 text-center text-lg-start col-12 ack-fsize-12">
                      High-Res Image PNG, JPG or GIF{" "}
                    </span>
                  </div>
                  <div className="col-lg-6 mb-3 mb-lg-0 col-12 inputPortoImage__cond row align-items-center text-start">
                    <div className="col-lg-3 text-center col-12">
                      <img src={Photo} alt="" />
                    </div>
                    <span className="col-lg-9 text-center text-lg-start col-12 ack-fsize-12">
                      Size 1080x1920 or 600x800
                    </span>
                  </div>
                </div>
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

export default UpdateUserImage;
