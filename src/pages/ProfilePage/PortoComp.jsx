import React from "react";
import { Link } from "react-router-dom";

function PortoComp(props) {
  // console.log(props.dataPortoUser);
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
            }images/${item.image}`}
            alt=""
          />
          <Link to={item.link_repository} style={{ textDecoration: "none", color: "black" }}>
            <p className="ack-fsize-14 ack-fw-400 my-2">{item.nama_aplikasi}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PortoComp;
