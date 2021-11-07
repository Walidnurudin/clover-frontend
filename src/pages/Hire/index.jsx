import React from "react";
import "./index.css";
function Hire() {
  return (
    <>
      <main className="hire__main">
        <section className="container">
          <div className="row">
            <div className="col-md-4  mt-5">
              {/* Profile User */}
              <div className="card">
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate
                    blanditiis quo, alias doloribus nemo obcaecati repellendus reiciendis. Fuga
                    molestias velit ex perspiciatis reiciendis. Inventore eum deleniti nam
                    cupiditate ipsum.
                  </p>
                </div>
              </div>
            </div>
            <section className="col-md-8  mt-5">
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
                      <option value="">Projek</option>
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
