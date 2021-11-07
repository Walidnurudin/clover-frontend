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

function ExpComp() {
  return (
    <div className="job-exp ">
      <div className="job-exp__list row">
        <div className="job-exp__list-img col-lg-2 col-3">
          <img src={Suitcase} alt="" />
        </div>
        <div className="job-exp__list-desc col-lg-10 col-9">
          <p className="ack-fw-600 ack-fsize-20 margin-reset">Engineer</p>
          <p className="ack-fw-400 ack-fsize-18 margin-reset">Tokopedia</p>
          <span className="ack-fcolor2 me-3 d-lg-inline d-block">July 2019 - January 2020</span>
          <span className="ack-fcolor2 me-3 d-lg-inline d-block">6 Months</span>
          <p className="my-4 ack-fw-400 ack-fsize-400 ack-lh-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis
            nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExpComp;
