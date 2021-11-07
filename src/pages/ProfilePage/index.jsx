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
import UbahPassword from "./UbahPassword";
import ProfileUser from "../../components/atoms/ProfileUser";

function ProfilePage() {
  const [skills, setSkills] = useState(
    "Pyhton,Laravel,Golang,JavaScript,PHP,HTML,C++,Kotlin,Swift"
  );
  const [showExp, setShowExp] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    document.title = "Clover Hire | Profile";
  }, []);

  return (
    <>
      <main className="container-fluid profile-main padding-reset ack-f-open-sans">
        <div className="dec-bg-blue d-none d-lg-block"></div>

        <div className="content">
          {show ? <UbahPassword show={show} handleClose={handleClose} /> : <></>}

          <div className="container p-lg-4 p-4">
            <section className="profile-content justify-content-between row">
              <ProfileUser
                isUpdate={isUpdate}
                skills={skills}
                setIsUpdate={setIsUpdate}
                setShow={setShow}
              />

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
