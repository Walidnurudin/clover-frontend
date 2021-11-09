import React, { useEffect } from "react";
import "./index.css";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Opinion3, mail, ig, phone, linkedin, map } from "../../assets/images";
import { getUserById } from "../../stores/actions/user";
import Navbar from "../../components/atoms/Navbar";
import Footer from "../../components/atoms/Footer";

function ProfilePerusahaan() {
  const history = useHistory();

  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getUserById("34e36a65-5488-406d-a02e-591532b29f82")).then((res) => {
    //   console.log(res);
    // });
  }, []);

  const handleClick = () => {
    history.push("/edit-profile-recruiters");
  };

  return (
    <>
      <Navbar />
      <div className="profile__perusahaan">
        <div className="container">
          <div className="profile__perusahaan--wrap">
            <div className="profile__perusahaan--purple"></div>
            <div className="profile__perusahaan--white"></div>

            <div className="profile__perusahaan--main text-center">
              <img
                src={
                  userState.userProfile.image !== null
                    ? `http://localhost:3001/uploads/user/${userState.userProfile.image}`
                    : Opinion3
                }
                alt="profile"
                width="150px"
              />
              <h5 className="open-sans-600 mt-3">{userState.userProfile.nama}</h5>
              <p className="mb-3">{userState.userProfile.bidangPerusahaan || "-"}</p>
              <div>
                <img src={map} alt="map" width="16px" />
                <span className="text-secondary ms-2">{userState.userProfile.domisili || "-"}</span>
              </div>
              <p className="text-secondary mb-4 mt-4">{userState.userProfile.description || "-"}</p>
              <button className="btn btn-primary open-sans-700" onClick={handleClick}>
                Edit profile
              </button>
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column">
                  <span className="d-flex gap-3 mb-3">
                    <img src={mail} alt="mail" width="24px" />
                    <span className="text-secondary">{userState.userProfile.email || "-"}</span>
                  </span>

                  <span className="d-flex gap-3 mb-3">
                    <img src={ig} alt="instagram" width="24px" />
                    <span className="text-secondary">{userState.userProfile.instagram || "-"}</span>
                  </span>

                  <span className="d-flex gap-3 mb-3">
                    <img src={phone} alt="phone" width="24px" />
                    <span className="text-secondary">
                      {userState.userProfile.noHandphone || "-"}
                    </span>
                  </span>

                  <span className="d-flex gap-3 mb-3">
                    <img src={linkedin} alt="linkedin" width="24px" />
                    <span className="text-secondary">{userState.userProfile.linkedin || "-"}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProfilePerusahaan;
