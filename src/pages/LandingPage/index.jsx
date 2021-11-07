import React from "react";
import "./index.css";
import {
  LandingPage1,
  LandingPage2,
  LandingPage3,
  TickPurple,
  TickYellow
} from "../../assets/images";
import Footer from "../../components/atoms/Footer";

function LandingPage() {
  return (
    <>
      <div className="container">
        <section>
          <div className="row landing__page--1">
            <div className="col-12 col-md-6 align-self-center landing__page--1--desc">
              <h1 className="open-sans-600">Talenta terbaik negeri untuk perubahan revolusi 4.0</h1>
              <p className="open-sans-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui
                rhoncus auctor.
              </p>
              <button className="btn btn-primary open-sans-700">Mulai Dari Sekarang</button>
            </div>
            <div className="col-12 col-md-6 landing__page--1--img">
              <img src={LandingPage1} alt="image" width="617px" />
            </div>
          </div>
        </section>

        <section>
          <div className="row landing__page--2">
            <div className="col-12 col-md-6 landing__page--2--img">
              <img src={LandingPage2} alt="image" width="617px" />
            </div>
            <div className="col-12 col-md-6 align-self-center landing__page--2--desc">
              <h1 className="open-sans-600">Kenapa harus mencari tallent di peworld</h1>
              <div className="open-sans-400 d-flex flex-column">
                <span className="mb-4">
                  <img src={TickPurple} alt="checklist" width="24px" className="me-4" />
                  <span>Lorem ipsum dolor sit amet.</span>
                </span>
                <span className="mb-4">
                  <img src={TickPurple} alt="checklist" width="24px" className="me-4" />
                  <span>Lorem ipsum dolor sit amet.</span>
                </span>
                <span className="mb-4">
                  <img src={TickPurple} alt="checklist" width="24px" className="me-4" />
                  <span>Lorem ipsum dolor sit amet.</span>
                </span>
                <span>
                  <img src={TickPurple} alt="checklist" width="24px" className="me-4" />
                  <span>Lorem ipsum dolor sit amet.</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row landing__page--3">
            <div className="col-12 col-md-6 align-self-center landing__page--3--desc">
              <h1 className="open-sans-600">Skill Tallent</h1>
              <p className="open-sans-400 mt-4 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui
                rhoncus auctor.
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
              <img src={LandingPage3} alt="image" width="617px" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
