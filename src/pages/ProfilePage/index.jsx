import React, { useState, useEffect } from "react";
import "./profilepage.css";
import PortoComp from "./PortoComp";
import ExpComp from "./ExpComp";
import Portofolio from "./Portofolio";
import Skill from "./Skill";

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
  Edit,
  Suitcase
} from "../../assets/images/ProfilePageImage";
import DataDiri from "./DataDiri";
import PengalamanKerja from "./PengalamanKerja";

function ProfilePage() {
  const [skills, setSkills] = useState(
    "Pyhton,Laravel,Golang,JavaScript,PHP,HTML,C++,Kotlin,Swift"
  );
  const [showExp, setShowExp] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    document.title = "Clover Hire | Profile";
  }, []);

  return (
    <>
      <main className="container-fluid profile-main padding-reset ack-f-open-sans">
        <div className="dec-bg-blue d-none d-lg-block"></div>

        <div className="content">
          <div className="container p-lg-4 p-4">
            <section className="profile-content justify-content-between row">
              <div className="col-lg-4 col-12 my-4 my-lg-0 position-relative">
                <div className="user-profile__details ack-bg-white p-4">
                  <div className="user-profile__details-image">
                    <img src={userImage} alt="" />
                  </div>

                  {isUpdate ? (
                    <div className="my-2 text-center editUserImage">
                      {/* FIXME EDIT IMG SIZE */}
                      {/* <img src={Edit} alt="" /> */}
                      <span className="ack-fsize-22 ack-fcolor2 ack-fw-600">Edit</span>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="user-profile__details-info mt-4">
                    <p className="ack-fsize-22 ack-fw-600 margin-reset mt-4">Louis Tomlinson</p>
                    <p className="ack-fsize-14 ack-fw-400 margin-reset mt-2 mb-1">Web Developer</p>
                    <p className="margin-reset ack-fw-400 ack-fsize-14 ack-fcolor2 mb-3">
                      Freelancer
                    </p>

                    <div className="user-details__location d-flex align-items-center my-2">
                      <img src={MapPin} alt="" className="user-details__location-icon  me-2" />
                      <span className="user-details__location-address ack-fcolor2 ack-fw-400 ack-fsize-14">
                        Purwokerto, Jawa Tengah
                      </span>
                    </div>

                    <div className="user-details__phone d-flex align-items-center my-2">
                      <img src={Phone} alt="" className="user-details__phone-icon me-2" />
                      <span className="user-details__phone-number ack-fcolor2 ack-fw-400 ack-fsize-14">
                        0812 - 3456 - 789
                      </span>
                    </div>

                    <div className="user-details__desc">
                      <p className="user-details__dest-text ack-fcolor2 ack-fw-400 ack-fsize-14 ack-lh-24 my-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat
                        orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus
                        fringilla, vestibulum risus at.
                      </p>
                    </div>
                  </div>

                  {isUpdate ? (
                    <>
                      <button
                        className="ack-btn-prim py-2 ack-fw-700 ack-fsize-16 my-2"
                        onClick={() => window.alert("Ganti Password")}
                      >
                        Ubah Password
                      </button>
                      <button
                        className="ack-btn-2 py-2 ack-fw-700 ack-fsize-16 my-2"
                        onClick={() => setIsUpdate(false)}
                      >
                        Kembali
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="ack-btn-prim py-2 ack-fw-700 ack-fsize-16 my-2"
                        onClick={() => setIsUpdate(true)}
                      >
                        Update Profile
                      </button>
                      <div className="user-profile__skils my-5">
                        <h3>Skils</h3>
                        <div className="user-profile__skils-container d-flex flex-wrap">
                          {skills.split(",").map((item, index) => (
                            <span
                              key={index}
                              className="skills-list py-1 px-4 ack-fcolor-white ack-fsize-12 ack-fw-600 my-2 me-2"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="user-profile__social">
                        <div className="user-profile__social-email my-4 ack-fsize-14 d-flex align-items-center">
                          <img src={Mail} alt="" className="me-3" />
                          <span className="ack-fcolor2 ">Louistommo@gmail.com</span>
                        </div>

                        <div className="user-profile__social-ig my-4 ack-fsize-14 d-flex align-items-center">
                          <img src={Instagram} alt="" className="me-3" />
                          <span className="ack-fcolor2">@Louist91</span>
                        </div>

                        <div className="user-profile__social-github my-4 ack-fsize-14 d-flex align-items-center">
                          <img src={Github} alt="" className="me-3" />
                          <span className="ack-fcolor2">@Louistommo</span>
                        </div>

                        <div className="user-profile__social-gitlab my-4 ack-fsize-14 d-flex align-items-center">
                          <img src={Gitlab} alt="" className="me-3" />
                          <span className="ack-fcolor2">@Louistommo91</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {isUpdate ? (
                <>
                  <div className="col-lg-8 col-12 data-diri position-relative">
                    <DataDiri />
                    <Skill Skills={skills} />
                    <PengalamanKerja />
                    <Portofolio />
                  </div>
                </>
              ) : (
                <div className="col-lg-8 col-12 porto-exp-container position-relative">
                  <div className="user-profile__porto-exp ack-bg-white p-4">
                    <div className="porto-exp__title d-flex mb-5">
                      <span
                        className={
                          showExp
                            ? "me-4 ack-fsize-22 ack-fw-600 ack-fcolor2"
                            : "me-4 ack-fsize-22 ack-fw-600 "
                        }
                        onClick={() => setShowExp(false)}
                      >
                        Portofolio
                      </span>
                      <span
                        className={
                          showExp
                            ? "me-4 ack-fsize-22 ack-fw-600"
                            : "me-4 ack-fsize-22 ack-fw-600 ack-fcolor2"
                        }
                        onClick={() => setShowExp(true)}
                      >
                        Pengalaman Kerja
                      </span>
                    </div>

                    {showExp ? <ExpComp /> : <PortoComp />}
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProfilePage;
