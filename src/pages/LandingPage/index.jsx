import React from "react";
import "./index.css";
import {
  LandingPage1,
  LandingPage2,
  LandingPage3,
  TickPurple,
  TickYellow
} from "../../assets/images";
import Navbar from "../../components/atoms/Navbar";
import Footer from "../../components/atoms/Footer";
import Opinion from "../../components/molecules/Opinion";
import { useHistory } from "react-router";

function LandingPage(props) {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const role = "Perekrut"; //|| Perekrut <== ambil dari localstorage

  const startNow = () => {
    if (role === "Perekrut") {
      history.push("/home");
    } else {
      history.push("/pekerja");
    }
  };
  const handleNow = () => {
    if (!token) {
      history.push("/login-workers");
    }
  };
  return (
    <>
      <Navbar {...props} />
      <div className="container">
        <section>
          <div className="row landing__page--1">
            <div className="col-12 col-md-6 align-self-center landing__page--1--desc mb-5">
              <h1 className="open-sans-600">Talenta terbaik negeri untuk perubahan revolusi 4.0</h1>
              <p className="open-sans-400">
                Mari bergabung dengan kami untuk merekrut calon karyawan di perusahaan anda dengan
                standar perusahaan dan bagi calon perkerja lebih mudah dalam mencari pekerjaan
              </p>
              <button className="btn btn-primary open-sans-700" onClick={startNow}>
                Mulai Dari Sekarang
              </button>
            </div>
            <div className="col-12 col-md-6 landing__page--1--img">
              <img src={LandingPage1} alt="image" />
            </div>
          </div>
        </section>

        <section>
          <div className="row landing__page--2">
            <div className="col-12 col-md-6 order-2 order-md-1 landing__page--2--img">
              <img src={LandingPage2} alt="image" />
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2 align-self-center landing__page--2--desc mb-5">
              <h1 className="open-sans-600">Kenapa harus mencari talent di Clover-hire</h1>
              <div className="open-sans-400 d-flex flex-column">
                <span className="mb-4">
                  <img src={TickPurple} alt="checklist" width="24px" className="me-4" />
                  <span>Sedia setiap saat.</span>
                </span>
                <span className="mb-4">
                  <img src={TickPurple} alt="checklist" width="24px" className="me-4" />
                  <span>Jangkau audiens yang lebih luas.</span>
                </span>
                <span className="mb-4">
                  <img src={TickPurple} alt="checklist" width="24px" className="me-4" />
                  <span>Kemampuan yang mumpuni di berbagai bidang keahlian.</span>
                </span>
                <span>
                  <img src={TickPurple} alt="checklist" width="24px" className="me-4" />
                  <span>Metode rekrutmen yang hemat biaya.</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row landing__page--3">
            <div className="col-12 col-md-6 align-self-center landing__page--3--desc mb-5">
              <h1 className="open-sans-600">Skill Tallent</h1>
              <p className="open-sans-400 mt-4 mb-5">
                Berbagai skill dan kemampuan yang anda bisa temukan disini
              </p>
              <div className="row">
                <div className="col-6 d-flex flex-column">
                  <span className="mb-4">
                    <img src={TickYellow} alt="checklist" width="24px" className="me-4" />
                    <span>Java</span>
                  </span>
                  <span className="mb-4">
                    <img src={TickYellow} alt="checklist" width="24px" className="me-4" />
                    <span>Kotlin</span>
                  </span>
                  <span className="mb-4">
                    <img src={TickYellow} alt="checklist" width="24px" className="me-4" />
                    <span>PHP</span>
                  </span>
                  <span className="mb-4">
                    <img src={TickYellow} alt="checklist" width="24px" className="me-4" />
                    <span>Javascript</span>
                  </span>
                </div>
                <div className="col-6 d-flex flex-column">
                  <span className="mb-4">
                    <img src={TickYellow} alt="checklist" width="24px" className="me-4" />
                    <span>Golang</span>
                  </span>
                  <span className="mb-4">
                    <img src={TickYellow} alt="checklist" width="24px" className="me-4" />
                    <span>C++</span>
                  </span>
                  <span className="mb-4">
                    <img src={TickYellow} alt="checklist" width="24px" className="me-4" />
                    <span>Ruby</span>
                  </span>
                  <span className="mb-4">
                    <img src={TickYellow} alt="checklist" width="24px" className="me-4" />
                    <span>10+ Bahasa lainnya</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 landing__page--3--img">
              <img src={LandingPage3} alt="image" />
            </div>
          </div>
        </section>
      </div>
      <Opinion />

      <div className="container d-none d-md-block">
        <div className="join__now">
          <div className="join__now--bg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="join__now--svg"
            >
              <path
                fill="#6659a6"
                fillOpacity="1"
                d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>

            <div className="d-flex justify-content-between join__now--content">
              <div>
                <p className="open-sans-600">Mulai perjalanan anda sekarang di</p>
                <p className="open-sans-600">Clover Hire</p>
              </div>
              <button
                className="btn btn-primary open-sans-700 align-self-center"
                onClick={handleNow}
              >
                Mulai Dari Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
