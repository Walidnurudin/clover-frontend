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

function PortoComp(props) {
  console.log(props);
  const { dataPortoUser } = props;
  return (
    <div className="porto-container row">
      {dataPortoUser.map((item, index) => (
        <div
          key={index}
          className="porto-list d-flex flex-column mb-5 text-center px-2 col-12 col-lg-4"
        >
          <img
            src={`${
              process.env.REACT_APP_NAME === "dev"
                ? process.env.REACT_APP_DEV
                : process.env.REACT_APP_PROD
            }/images/${item.image}`}
            alt=""
          />
          <p className="ack-fsize-14 ack-fw-400 my-2">{item.nama_aplikasi}</p>
        </div>
      ))}
    </div>
  );
}

export default PortoComp;
