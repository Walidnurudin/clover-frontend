import React from "react";
import "./index.css";
import { useHistory } from "react-router";
import { Opinion3, mail, ig, phone, linkedin, map } from "../../assets/images";

function ProfilePerusahaan() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/edit-profile-perusahaan");
  };

  return (
    <>
      <div className="profile__perusahaan">
        <div className="container">
          <div className="profile__perusahaan--wrap">
            <div className="profile__perusahaan--purple"></div>
            <div className="profile__perusahaan--white"></div>

            <div className="profile__perusahaan--main text-center">
              <img src={Opinion3} alt="profile" width="150px" />
              <h5 className="open-sans-600 mt-3">PT. Martabat Jaya Abadi</h5>
              <p className="mb-3">Financial</p>
              <div>
                <img src={map} alt="map" width="16px" />
                <span className="text-secondary ms-2">Purwokerto, Jawa Tengah</span>
              </div>
              <p className="text-secondary mb-4 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci,
                mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum
                risus at.
              </p>
              <button className="btn btn-primary open-sans-700" onClick={handleClick}>
                Edit profile
              </button>
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column">
                  <span className="d-flex gap-3 mb-3">
                    <img src={mail} alt="mail" width="24px" />
                    <span className="text-secondary">martabatjaya@gmail.com</span>
                  </span>
                  <span className="d-flex gap-3 mb-3">
                    <img src={ig} alt="instagram" width="24px" />
                    <span className="text-secondary">martabat_jaya</span>
                  </span>
                  <span className="d-flex gap-3 mb-3">
                    <img src={phone} alt="phone" width="24px" />
                    <span className="text-secondary">0821-8190-1821</span>
                  </span>
                  <span className="d-flex gap-3 mb-3">
                    <img src={linkedin} alt="linkedin" width="24px" />
                    <span className="text-secondary">Martabat Jaya Abadi</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePerusahaan;
