import React, { useEffect, useState } from "react";
import { Cloud, Expand, Photo } from "../../assets/images/ProfilePageImage";
import axios from "../../utils/axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Portofolio(props) {
  const submitDataDiri = (event) => {
    event.preventDefault();

    setDataNewPorto({ ...dataNewPorto, user_id: localStorage.getItem("id") });
    setDataNewPorto({ ...dataNewPorto, user_id: localStorage.getItem("id") });

    setTimeout(() => {
      postPorto();
    }, 100);
  };

  const [dataPortoUser, setDataPortoUser] = useState([]);

  const getPortoFolioUser = () => {
    axios.get(`portfolio/${localStorage.getItem("id")}`).then((res) => {
      // console.log(res);
      setDataPortoUser(res.data.data);
    });
  };

  useEffect(() => {
    getPortoFolioUser();
  }, []);

  const postPorto = () => {
    const formData = new FormData();

    for (const data in dataNewPorto) {
      formData.append(data, dataNewPorto[data]);
    }

    for (const pair of formData.entries()) {
      // console.log(pair[0] + ", " + pair[1]);
    }

    axios
      .post("portfolio", formData)
      .then((res) => {
        toast.success(res.data.msg);
        getPortoFolioUser();
      })
      .catch((err) => {
        toast.error(err.msg);
      });
  };

  const [dataNewPorto, setDataNewPorto] = useState({});
  const [image, setImage] = useState("");

  const handleInputPorto = (event) => {
    setDataNewPorto({
      ...dataNewPorto,
      [event.target.name]: event.target.value,
      user_id: localStorage.getItem("id")
    });
  };

  useEffect(() => {
    // console.log(dataNewPorto);
  }, [dataNewPorto]);

  useEffect(() => {
    // console.log(image);
    setDataNewPorto({ ...dataNewPorto, image: image });
  }, [image]);

  const deletePorto = (data) => {
    axios
      .delete(`portfolio/${data}`)
      .then((res) => {
        toast.success(res.data.msg);
        getPortoFolioUser();
      })
      .catch((err) => {
        toast.error(err.msg);
      });
  };

  const [isUpdate, setIsUpdate] = useState(false);

  const selectUpdateData = (item) => {
    setIsUpdate(true);
    setDataNewPorto(item);
  };

  useEffect(() => {}, [dataNewPorto]);

  const updatePorto = (event) => {
    event.preventDefault();

    const formData = new FormData();

    for (const data in dataNewPorto) {
      formData.append(data, dataNewPorto[data]);
    }

    for (const pair of formData.entries()) {
      // console.log(pair[0] + ", " + pair[1]);
    }

    axios.patch(`portfolio/${id}`, formData).then((res) => {
      toast.success("Success Update Portofolio");
      setIsUpdate(false);
      setDataNewPorto({});
      getPortoFolioUser();
    });
  };

  const { link_repository, nama_aplikasi, id } = dataNewPorto;
  return (
    <>
      <ToastContainer />
      <div className="user-profile__porto-exp mb-4 ack-bg-white">
        <p className="p-4 updateForm__header margin-reset ack-fw-600 ack-fsize-22">Portofolio</p>
        <form
          className="px-4 formDataDiri row"
          onSubmit={isUpdate ? (event) => updatePorto(event) : (event) => submitDataDiri(event)}
        >
          <div className="col-12">
            <label htmlFor="name" className="d-blok col-12 mt-4">
              Nama Aplikasi
            </label>
            <input
              type="text"
              placeholder="Masukkan Nama Aplikasi"
              name="nama_aplikasi"
              className="p-2 col-12"
              value={nama_aplikasi ? nama_aplikasi : ""}
              onChange={(event) => handleInputPorto(event)}
            />

            <label htmlFor="name" className="d-blok col-12 mt-4">
              Link Repository
            </label>
            <input
              type="text"
              placeholder="Masukkan Job Desk"
              name="link_repository"
              className="p-2 col-12"
              value={link_repository ? link_repository : ""}
              onChange={(event) => handleInputPorto(event)}
            />
          </div>

          <div className="col-12">
            <label htmlFor="" className="mt-4 col-12">
              Upload Gambar
            </label>
            <div className="col-12 portoInput p-5 d-flex justify-content-center">
              <input
                type="file"
                name="image"
                onChange={(event) => setImage(event.target.files[0])}
                style={{
                  // display: "",
                  potition: "absolute",
                  zIndex: "1",
                  height: "100%",
                  width: "100%"
                }}
              />
              <div className="col-10 text-center justify-content-center">
                <img src={Cloud} alt="" />
                <p className="my-4 ack-fsize-14 col-12">
                  Drag & Drop untuk Upload Gambar Aplikasi Mobile
                </p>
                <p className="my-4 ack-fsize-12 col-12">
                  Atau cari untuk mengupload file dari direktorimu.
                </p>
                <div className="row col-12 justify-content-center  margin-reset">
                  <div className="col-lg-6 mb-3 mb-lg-0 col-12 inputPortoImage__cond align-items-center row text-start">
                    <div className="col-lg-3 text-center col-12">
                      <img src={Expand} alt="" />
                    </div>
                    <span className="col-lg-9 text-center text-lg-start col-12 ack-fsize-12">
                      High-Res Image PNG, JPG or GIF{" "}
                    </span>
                  </div>
                  <div className="col-lg-6 mb-3 mb-lg-0 col-12 inputPortoImage__cond row align-items-center text-start">
                    <div className="col-lg-3 text-center col-12">
                      <img src={Photo} alt="" />
                    </div>
                    <span className="col-lg-9 text-center text-lg-start col-12 ack-fsize-12">
                      Size 1080x1920 or 600x800
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <hr className="my-5" />
          </div>

          <div className="col-12 d-flex justify-content-end ">
            <button
              type="submit"
              // onClick={() => uploadNewDataPorto()}
              className="p-3 mb-4 col-12 btn-add-exp"
            >
              {isUpdate ? "Update Portofolio" : "Tambah Portofolio"}
            </button>
          </div>
        </form>

        <div className="row container margin-reset">
          {dataPortoUser.map((item, index) => (
            <div key={index} className="col-lg-4 col-12 text-center my-3 " style={{}}>
              <div
                className="col-12 text-center p-2"
                style={{
                  border: "1px solid #5e50a1",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 5px #5e50a1"
                }}
              >
                <img
                  src={`${
                    process.env.REACT_APP_NAME === "dev"
                      ? process.env.REACT_APP_DEV
                      : process.env.REACT_APP_PROD
                  }images/${item.image}`}
                  alt=""
                  className="portoImage"
                />
                <p className="ack-fsize-18 ack-fw-700 mb-1">{item.nama_aplikasi}</p>

                <button
                  className="ack-btn-prim text-center p-2 my-1"
                  onClick={() => selectUpdateData(item)}
                >
                  UPDATE
                </button>
                <button
                  onClick={() => deletePorto(item.id)}
                  className="ack-btn-2 text-center p-2 my-1"
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portofolio;
