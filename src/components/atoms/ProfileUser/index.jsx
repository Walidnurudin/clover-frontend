import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import {
  userImage,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Github,
  Gitlab
} from "../../../assets/images/ProfilePageImage";

import { ToastContainer, toast } from "react-toastify";
import axios from "../../../utils/axios";

function ProfileUser(props) {
  const role = localStorage.getItem("role");
  const userId = props.userId;
  const history = useHistory();
  const pathName = props.match.path;
  const {
    description,
    bidangPerusahaan,
    domisili,
    email,
    github,
    gitlab,
    image,
    instagram,
    jobDesk,
    jobStatus,
    linkedin,
    nama,
    noHandphone,
    perusahaan,
    skill,
    status
  } = props.dataUser;

  const [form, setForm] = useState({ image: "" });
  const [imageNew, setImageNew] = useState("");

  const formData = new FormData();
  for (const data in form) {
    formData.append(data, form[data]);
  }

  for (const pair of formData.entries()) {
    // console.log(pair[0] + ", " + pair[1]);
  }

  const updateImage = () => {
    axios
      .patch("user/update-image", formData)
      .then((res) => {
        toast.success(res.data.msg);
        props.getDataUser();
      })
      .catch((err) => {
        toast(err.msg);
      });
  };

  const LinkToHire = () => {
    history.push("/hire", { userId });
  };

  return (
    <>
      <ToastContainer />
      <div
        className={`${
          pathName === "/profile" ? "col-lg-4" : null
        } col-12 my-4 my-lg-0 position-relative`}
      >
        <div className="user-profile__details ack-bg-white p-4">
          <div className="user-profile__details-image">
            <img
              src={
                image
                  ? `${
                      process.env.REACT_APP_NAME === "dev"
                        ? process.env.REACT_APP_DEV
                        : process.env.REACT_APP_PROD
                    }/uploads/user/${image}`
                  : userImage
              }
              alt=""
            />
          </div>

          {props.isUpdate ? (
            <div className="my-2 text-center editUserImage">
              {/* FIXME EDIT IMG SIZE */}
              {/* <img src={Edit} alt="" /> */}
              <form>
                <input
                  type="file"
                  onChange={(event) => setForm({ image: event.target.files[0] })}
                  name="image"
                  id=""
                />
              </form>
              <span className="ack-fsize-22 ack-fcolor2 ack-fw-600" onClick={() => updateImage()}>
                Edit
              </span>
            </div>
          ) : (
            ""
          )}

          <div className="user-profile__details-info mt-4">
            <p className="ack-fsize-22 ack-fw-600 margin-reset mt-4">{nama ? nama : ""}</p>
            <p className="ack-fsize-14 ack-fw-400 margin-reset mt-2 mb-1">
              {jobDesk ? jobDesk : ""}
            </p>
            <p className="margin-reset ack-fw-400 ack-fsize-14 ack-fcolor2 mb-3">
              {jobStatus ? jobStatus : ""}
            </p>

            <div className="user-details__location d-flex align-items-center my-2">
              <img src={MapPin} alt="" className="user-details__location-icon  me-2" />
              <span className="user-details__location-address ack-fcolor2 ack-fw-400 ack-fsize-14">
                {domisili ? domisili : ""}
              </span>
            </div>

            <div className="user-details__phone d-flex align-items-center my-2">
              <img src={Phone} alt="" className="user-details__phone-icon me-2" />
              <span className="user-details__phone-number ack-fcolor2 ack-fw-400 ack-fsize-14">
                {noHandphone ? noHandphone : "-"}
              </span>
            </div>

            <div className="user-details__desc">
              <p className="user-details__dest-text ack-fcolor2 ack-fw-400 ack-fsize-14 ack-lh-24 my-3">
                {description ? description : ""}
              </p>
            </div>
          </div>

          {props.isUpdate ? (
            <>
              <button
                className="ack-btn-prim py-2 ack-fw-700 ack-fsize-16 my-2"
                onClick={() => props.setShow(true)}
              >
                Ubah Password
              </button>
              <button
                className="ack-btn-2 py-2 ack-fw-700 ack-fsize-16 my-2"
                onClick={() => props.setIsUpdate(false)}
              >
                Kembali
              </button>
            </>
          ) : (
            <>
              {pathName === "/profile" ? (
                role === "Pekerja" ? (
                  <button
                    className="ack-btn-prim py-2 ack-fw-700 ack-fsize-16 my-2"
                    onClick={() => props.setIsUpdate(true)}
                  >
                    Update Profile
                  </button>
                ) : (
                  <button
                    className="ack-btn-prim py-2 ack-fw-700 ack-fsize-16 my-2"
                    onClick={LinkToHire}
                  >
                    Hire
                  </button>
                )
              ) : null}
              <div className="user-profile__skils my-5">
                <h3>Skils</h3>
                <div className="user-profile__skils-container d-flex flex-wrap">
                  {skill
                    ? skill.split(",").map((item, index) => (
                        <span
                          key={index}
                          className="skills-list py-1 px-4 ack-fcolor-white ack-fsize-12 ack-fw-600 my-2 me-2"
                        >
                          {item}
                        </span>
                      ))
                    : ""}
                </div>
              </div>

              <div className="user-profile__social">
                <div className="user-profile__social-email my-4 ack-fsize-14 d-flex align-items-center">
                  <img src={Mail} alt="" className="me-3" />
                  <span className="ack-fcolor2 ">{email ? email : ""}</span>
                </div>

                <div className="user-profile__social-ig my-4 ack-fsize-14 d-flex align-items-center">
                  <img src={Instagram} alt="" className="me-3" />
                  <span className="ack-fcolor2">@{instagram ? instagram : " -"}</span>
                </div>

                <div className="user-profile__social-github my-4 ack-fsize-14 d-flex align-items-center">
                  <img src={Github} alt="" className="me-3" />
                  <span className="ack-fcolor2">@{github ? github : " -"}</span>
                </div>

                <div className="user-profile__social-gitlab my-4 ack-fsize-14 d-flex align-items-center">
                  <img src={Gitlab} alt="" className="me-3" />
                  <span className="ack-fcolor2">@{gitlab ? gitlab : " -"}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default withRouter(ProfileUser);
