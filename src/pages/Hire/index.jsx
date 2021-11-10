import React, { useEffect, useState } from "react";
import "./index.css";
import ProfileUser from "../../components/atoms/ProfileUser";
import Navbar from "../../components/atoms/Navbar";
import Footer from "../../components/atoms/Footer";
import { connect } from "react-redux";
import axios from "../../utils/axios";
import { postHire } from "../../stores/actions/user";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function Hire(props) {
  const userId = props.location.state.userId;
  const history = useHistory();
  const [skills] = useState("Pyhton,Laravel,Golang,JavaScript,PHP,HTML,C++,Kotlin,Swift");
  const [dataUser, setDataUser] = useState({});
  const [hire, setHire] = useState({
    user_id: userId,
    tujuan_pesan: "",
    pesan: ""
  });
  const [isLoading, setLoading] = useState(false);

  const handlePostHire = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      const { user_id, tujuan_pesan, pesan } = hire;
      const setDataHire = { user_id, tujuan_pesan, pesan };
      for (const value in setDataHire) {
        if (setDataHire[value] === "") {
          setLoading(false);
          toast.warning("Form Hire Tidak Boleh Kosong...");
          return false;
        }
      }
      await props.postHire(setDataHire);
      setLoading(false);
      toast.success("Pesan berhasil dikirim ke pekerja, silahkan tunggu informasi selanjutnya!");
      event.target.reset();
      setDataHire({
        user_id: "",
        tujuan_pesan: "",
        pesan: ""
      });
      history.push("/");
      // console.log("POST HIRING RUNNING...", response);
    } catch (error) {
      new Error(error.mesage);
    }
  };
  const handleChangeText = (event) => {
    setHire({ ...hire, [event.target.name]: event.target.value });
  };

  const getDataUser = () =>
    axios.get(`user/${userId}`).then((res) => {
      setDataUser(res.data.data[0]);
    });
  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <>
      <Navbar />
      <main className="hire__main">
        <section className="container">
          <ToastContainer />
          <div className="row">
            <div className="col-md-4 mt-5 mb-5">
              <ProfileUser skills={skills} dataUser={dataUser} getDataUser={getDataUser} />
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
                <form onSubmit={handlePostHire}>
                  <div className="mb-3">
                    <label htmlFor="tujuan_pesan">Tujuan tentang pesan ini</label>
                    <select
                      className="hire__form-tujuan-pesan"
                      name="tujuan_pesan"
                      onChange={handleChangeText}
                      disabled={isLoading}
                    >
                      <option hidden>Tujuan Pesan</option>
                      <option value="Project">Project</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Fulltime">Fulltime</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pesan">Pesan</label>
                    <textarea
                      className="hire__form-pesan"
                      cols="30"
                      rows="8"
                      placeholder="Deskripsikan/jelaskan lebih detail"
                      onChange={handleChangeText}
                      name="pesan"
                      disabled={isLoading}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="hire__form-button">
                      {isLoading ? "Loading..." : "Kirim"}
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const mapDispatchToProps = {
  postHire
};

export default connect(null, mapDispatchToProps)(Hire);
