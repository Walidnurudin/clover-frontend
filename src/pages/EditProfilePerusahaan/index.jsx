import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { Opinion3, edit, map } from "../../assets/images";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserById,
  updateUser,
  updateUserImage,
  getUserProfile
} from "../../stores/actions/user";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../../components/atoms/Navbar";
import Footer from "../../components/atoms/Footer";

const initialState = {
  nama: "",
  bidangPerusahaan: "",
  domisili: "",
  description: "",
  email: "",
  instagram: "",
  noHandphone: "",
  linkedin: ""
};

function EditProfilePerusahaan(props) {
  const [form, setForm] = useState(initialState);
  const [image, setImage] = useState(null);

  const inputFile = useRef(null);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const clearState = () => {
    setForm({ ...initialState });
  };

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const notifSuccess = (msg) =>
    toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  const notifError = (msg) =>
    toast.error(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  const getUserProfile = () => {
    dispatch(getUserById(userState.userProfile.id)).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleFile = (e) => {
    setImage({
      image: e.target.files[0]
    });
  };

  const updateImage = () => {
    if (image === null || !image.image) {
      notifError("Masukan gambar");
    } else {
      const formData = new FormData();
      for (const data in image) {
        formData.append(data, image[data]);
      }

      // UNTUK MENGECEK DATA DI DALAM FORMDATA
      for (const data of formData.entries()) {
        // [
        //   [property, value],
        //   [],
        // ]
        console.log(data[0] + ", " + data[1]);
      }

      dispatch(updateUserImage(formData)).then((res) => {
        console.log("UPLOAD IMAGE", res);
        getUserProfile();
      });
      notifSuccess("Berhasil merubah gambar");
    }
  };

  const changeText = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    dispatch(updateUser(form)).then((res) => {
      console.log(res);
      dispatch(getUserById(userState.userProfile.id)).then((res) => {
        console.log(res);

        notifSuccess("Berhasil Merubah Data");
        clearState();
      });
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Navbar {...props} />

      <div className="edit__profile__perusahaan">
        <div className="edit__profile__perusahaan--purple"></div>
        <div className="edit__profile__perusahaan--white"></div>
        <div className="edit__profile__perusahaan--main">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="edit__profile__perusahaan--profile">
                  <div className="text-center">
                    <img
                      src={
                        userState.users.image !== null
                          ? `${
                              process.env.REACT_APP_NAME === "dev"
                                ? process.env.REACT_APP_DEV
                                : process.env.REACT_APP_PROD
                            }uploads/user/${userState.users.image}`
                          : Opinion3
                      }
                      alt="profile"
                      width="150px"
                    />

                    <div className="mt-3" style={{ cursor: "pointer" }} onClick={onButtonClick}>
                      <img src={edit} alt="edit" width="16px" />
                      <span className="open-sans-600 text-secondary ms-2">Edit</span>
                    </div>

                    <input
                      type="file"
                      id="file"
                      name="image"
                      onChange={handleFile}
                      ref={inputFile}
                      // style={{ display: "none" }}
                    />

                    <button
                      className="btn open-sans-700 mt-3 edit__profile__perusahaan--simpan"
                      onClick={updateImage}
                    >
                      Update Image
                    </button>
                  </div>

                  <h5 className="open-sans-600 mt-3">{userState.users.nama}</h5>
                  <p className="mb-3 open-sans-400">{userState.users.bidangPerusahaan || "-"}</p>
                  <div>
                    <img src={map} alt="map" width="16px" />
                    <span className="text-secondary ms-2 open-sans-400">
                      {userState.users.domisili || "-"}
                    </span>
                  </div>

                  <p className="text-secondary mb-4 mt-4 open-sans-400">
                    {userState.users.description || "-"}
                  </p>
                </div>

                <div className="d-flex flex-column mb-5 mb-md-0">
                  <button
                    className="btn open-sans-700 mt-3 edit__profile__perusahaan--simpan"
                    onClick={handleSubmit}
                  >
                    Simpan
                  </button>
                  <button
                    className="btn open-sans-700 mt-2 edit__profile__perusahaan--batal"
                    onClick={clearState}
                  >
                    Batal
                  </button>
                </div>
              </div>

              <div className="col-12 col-md-8">
                <div className="edit__profile__perusahaan--form">
                  <h1 className="open-sans-600">Data diri</h1>
                  <hr />

                  <form>
                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">
                        Nama Perusahaan
                      </label>
                      <input
                        type="text"
                        name="nama"
                        value={form.nama}
                        placeholder="Masukan nama perusahaan"
                        className="open-sans-400"
                        onChange={changeText}
                      />
                    </div>

                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">Bidang</label>
                      <input
                        type="text"
                        name="bidangPerusahaan"
                        value={form.bidangPerusahaan}
                        placeholder="Masukan bidang perusahaan ex : Financial"
                        className="open-sans-400"
                        onChange={changeText}
                      />
                    </div>

                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">Domisili</label>
                      <input
                        type="text"
                        placeholder="Masukan Domisili"
                        className="open-sans-400"
                        name="domisili"
                        value={form.domisili}
                        onChange={changeText}
                      />
                    </div>

                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">
                        Deskripsi singkat
                      </label>
                      <textarea
                        onChange={changeText}
                        placeholder="Tuliskan deskripsi singkat"
                        name="description"
                        value={form.description}
                      ></textarea>
                    </div>

                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">Email</label>
                      <input
                        type="text"
                        placeholder="Masukan email"
                        className="open-sans-400"
                        name="email"
                        value={form.email}
                        onChange={changeText}
                      />
                    </div>

                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">Instagram</label>
                      <input
                        type="text"
                        name="instagram"
                        placeholder="Masukan Username IG"
                        className="open-sans-400"
                        value={form.instagram}
                        onChange={changeText}
                      />
                    </div>

                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">Nomor Telepon</label>
                      <input
                        type="text"
                        name="noHandphone"
                        placeholder="Masukan nomor telepon"
                        className="open-sans-400"
                        value={form.noHandphone}
                        onChange={changeText}
                      />
                    </div>

                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">Linkedin</label>
                      <input
                        type="text"
                        name="linkedin"
                        placeholder="Masukan nama Linkedin"
                        className="open-sans-400"
                        value={form.linkedin}
                        onChange={changeText}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EditProfilePerusahaan;
