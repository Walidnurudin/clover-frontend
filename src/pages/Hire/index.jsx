import React, { useState } from "react";
import "./index.css";
import ProfileUser from "../../components/atoms/ProfileUser";
function Hire() {
  const [skills] = useState("Pyhton,Laravel,Golang,JavaScript,PHP,HTML,C++,Kotlin,Swift");
  return (
    <>
      <main className="hire__main">
        <section className="container">
          <div className="row">
            <div className="col-md-4 mt-5">
              <ProfileUser skills={skills} />
            </div>
            <section className="col-md-8 mt-5">
              {/* Form Hire */}
              <div className="hire__description">
                <h3 className="hire__title-worker">Hubungi Lous Tomlinson</h3>
                <p className="hire__title-worker-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui
                  rhoncus auctor.
                </p>
              </div>
              <div className="hire__form-recruiter">
                <form>
                  <div className="mb-3">
                    <label htmlFor="tujuan_pesan">Tujuan tentang pesan ini</label>
                    <select className="hire__form-tujuan-pesan">
                      <option value="">Project</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pesan">Pesan</label>
                    <textarea
                      className="hire__form-pesan"
                      cols="30"
                      rows="8"
                      placeholder="Deskripsikan/jelaskan lebih detail"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="hire__form-button">
                      Kirim
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}

export default Hire;
