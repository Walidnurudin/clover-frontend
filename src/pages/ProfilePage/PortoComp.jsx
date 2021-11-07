import React from "react";
import {
  userImage,
  Porto1,
  Porto2,
  Porto3,
  Porto4,
  Porto5,
  Porto6,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Github,
  Gitlab,
  Suitcase
} from "../../assets/images/ProfilePageImage";

function PortoComp() {
  return (
    <div className="porto-container row">
      <div className="porto-list d-flex flex-column text-center px-2 mb-4 col-12 col-lg-4">
        <img src={Porto1} alt="" />
        <p className="ack-fsize-14 ack-fw-400 my-1">Remainder App</p>
      </div>
      <div className="porto-list d-flex flex-column text-center px-2 mb-4 col-12 col-lg-4">
        <img src={Porto2} alt="" />
        <p className="ack-fsize-14 ack-fw-400 my-1">Remainder App</p>
      </div>
      <div className="porto-list d-flex flex-column text-center px-2 mb-4 col-12 col-lg-4">
        <img src={Porto3} alt="" />
        <p className="ack-fsize-14 ack-fw-400 my-1">Remainder App</p>
      </div>
      <div className="porto-list d-flex flex-column text-center px-2 mb-4 col-12 col-lg-4">
        <img src={Porto4} alt="" />
        <p className="ack-fsize-14 ack-fw-400 my-1">Remainder App</p>
      </div>
      <div className="porto-list d-flex flex-column text-center px-2 mb-4 col-12 col-lg-4">
        <img src={Porto5} alt="" />
        <p className="ack-fsize-14 ack-fw-400 my-1">Remainder App</p>
      </div>
      <div className="porto-list d-flex flex-column text-center px-2 mb-4 col-12 col-lg-4">
        <img src={Porto6} alt="" />
        <p className="ack-fsize-14 ack-fw-400 my-1">Remainder App</p>
      </div>
    </div>
  );
}

export default PortoComp;
