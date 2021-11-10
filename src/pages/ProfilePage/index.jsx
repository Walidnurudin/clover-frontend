import React, { useState, useEffect } from "react";
import "./profilepage.css";
import PortoComp from "./PortoComp";
import ExpComp from "./ExpComp";
import Portofolio from "./Portofolio";
import Skill from "./Skill";
import axios from "../../utils/axios";

import { Edit } from "../../assets/images/ProfilePageImage";
import DataDiri from "./DataDiri";
import PengalamanKerja from "./PengalamanKerja";
import UbahPassword from "./UbahPassword";
import ProfileUser from "../../components/atoms/ProfileUser";
import Navbar from "../../components/atoms/Navbar";
import Footer from "../../components/atoms/Footer";

function ProfilePage() {
  const [skills, setSkills] = useState(
    "Pyhton,Laravel,Golang,JavaScript,PHP,HTML,C++,Kotlin,Swift"
  );
  const [showExp, setShowExp] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dataUser, setDataUser] = useState({});

  const getDataUser = () =>
    axios.get(`user/${localStorage.getItem("id")}`).then((res) => {
      setDataUser(res.data.data[0]);
    });

  const [dataPortoUser, setDataPortoUser] = useState([]);

  const getPortoFolioUser = () => {
    axios.get(`portfolio/${localStorage.getItem("id")}`).then((res) => {
      console.log(res);
      setDataPortoUser(res.data.data);
    });
  };

  useEffect(() => {
    console.log(dataPortoUser);
  }, [dataPortoUser]);

  useEffect(() => {
    getPortoFolioUser();
  }, []);

  useEffect(() => {
    document.title = "Clover Hire | Profile";
    getDataUser();
  }, []);

  useEffect(() => {
    console.log(dataUser);
  }, [dataUser]);

  return (
    <>
      <Navbar />
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
                dataUser={dataUser}
                getDataUser={getDataUser}
              />

              {isUpdate ? (
                <>
                  <div className="col-lg-8 col-12 data-diri position-relative">
                    <DataDiri dataUser={dataUser} getDataUser={() => getDataUser()} />
                    <Skill Skills={dataUser.skill.split(",")} />
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
                            ? "me-4 ack-fsize-22 ack-fw-600 ack-fcolor2 hover-pointer"
                            : "me-4 ack-fsize-22 ack-fw-600 hover-pointer"
                        }
                        onClick={() => setShowExp(false)}
                        style={{}}
                      >
                        Portofolio
                      </span>
                      <span
                        className={
                          showExp
                            ? "me-4 ack-fsize-22 ack-fw-600 hover-pointer"
                            : "me-4 ack-fsize-22 ack-fw-600 ack-fcolor2 hover-pointer"
                        }
                        onClick={() => setShowExp(true)}
                      >
                        Pengalaman Kerja
                      </span>
                    </div>

                    {showExp ? <ExpComp /> : <PortoComp dataPortoUser={dataPortoUser} />}
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProfilePage;
