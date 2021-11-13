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
import { useHistory } from "react-router-dom";
import Navbar from "../../components/atoms/Navbar";
import Footer from "../../components/atoms/Footer";

function EditProfilePerusahaan() {
  const inputFile = useRef(null);
  const history = useHistory();
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const initialState = {
    nama: userState.users.nama,
    bidangPerusahaan: userState.users.bidangPerusahaan,
    domisili: userState.users.domisili,
    description: userState.users.description,
    email: userState.users.email,
    instagram: userState.users.instagram,
    noHandphone: userState.users.noHandphone,
    linkedin: userState.users.linkedin
  };

  const [form, setForm] = useState(initialState);
  const [image, setImage] = useState({ image: "" });

  // const [imageTemp, setImageTemp] = useState(null);

  const handleKembali = () => {
    history.push("/profile-recruiters");
  };

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

  useEffect(() => {
    updateImage();
    console.log("UPDATE IMAGE");
  }, [image]);

  const updateImage = () => {
    if (image === null || !image.image) {
      // notifError("Masukan gambar");
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

      dispatch(updateUserImage(formData))
        .then((res) => {
          getUserProfile();
          notifSuccess("Berhasil merubah gambar");
        })
        .catch((err) => {
          if (userState.isError) {
            notifError(userState.message);
          }
        });
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
        // clearState();
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

      <Navbar />

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
                      className="edit__profile__perusahaan--profile--img"
                    />

                    <div className="mt-3" style={{ cursor: "pointer" }} onClick={onButtonClick}>
                      <img src={edit} alt="edit" width="16px" />
                      <span className="open-sans-600 text-secondary ms-2">Edit</span>
                    </div>

                    <input
                      type="file"
                      id="file"
                      name="image"
                      onChange={(e) =>
                        setImage({
                          image: e.target.files[0]
                        })
                      }
                      ref={inputFile}
                      style={{ display: "none" }}
                    />

                    {/* <button
                      className="btn open-sans-700 mt-3 edit__profile__perusahaan--simpan"
                      onClick={updateImage}
                    >
                      Update Image
                    </button> */}
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
                    onClick={handleKembali}
                  >
                    Kembali
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
