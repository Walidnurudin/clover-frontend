import React from "react";
import "./index.css";
import { Opinion3, edit, map } from "../../assets/images";

function EditProfilePerusahaan() {
  const handleSubmit = () => {
    console.log("SUBMIT");
  };

  return (
    <>
      <div className="edit__profile__perusahaan">
        <div className="edit__profile__perusahaan--purple"></div>
        <div className="edit__profile__perusahaan--white"></div>
        <div className="edit__profile__perusahaan--main">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="edit__profile__perusahaan--profile">
                  <div className="text-center">
                    <img src={Opinion3} alt="profile" width="150px" />

                    <div className="mt-3">
                      <img src={edit} alt="edit" width="16px" />
                      <span className="open-sans-600 text-secondary ms-2">Edit</span>
                    </div>
                  </div>

                  <h5 className="open-sans-600 mt-3">PT. Martabat Jaya Abadi</h5>
                  <p className="mb-3 open-sans-400">Financial</p>
                  <div>
                    <img src={map} alt="map" width="16px" />
                    <span className="text-secondary ms-2 open-sans-400">
                      Purwokerto, Jawa Tengah
                    </span>
                  </div>

                  <p className="text-secondary mb-4 mt-4 open-sans-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci,
                    mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla,
                    vestibulum risus at.
                  </p>
                </div>

                <div className="d-flex flex-column mb-5 mb-md-0">
                  <button
                    className="btn open-sans-700 mt-3 edit__profile__perusahaan--simpan"
                    onClick={handleSubmit}
                  >
                    Simpan
                  </button>
                  <button className="btn open-sans-700 mt-2 edit__profile__perusahaan--batal">
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
                        placeholder="Masukan nama perusahaan"
                        className="open-sans-400"
                      />
                    </div>

                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">Bidang</label>
                      <input
                        type="text"
                        placeholder="Masukan bidang perusahaan ex : Financial"
                        className="open-sans-400"
                      />
                    </div>

                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">Domisili</label>
                      <input type="text" placeholder="Masukan Domisili" className="open-sans-400" />
                    </div>

                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">
                        Deskripsi singkat
                      </label>
                      <textarea name="desc" placeholder="Tuliskan deskripsi singkat"></textarea>
                    </div>

                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">Email</label>
                      <input type="text" placeholder="Masukan email" className="open-sans-400" />
                    </div>

                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">Instagram</label>
                      <input
                        type="text"
                        placeholder="Masukan Username IG"
                        className="open-sans-400"
                      />
                    </div>

                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">Nomor Telepon</label>
                      <input
                        type="text"
                        placeholder="Masukan nomor telepon"
                        className="open-sans-400"
                      />
                    </div>

                    <div className="form__perusahaan--item">
                      <label className="d-block text-secondary open-sans-400">Linkedin</label>
                      <input
                        type="text"
                        placeholder="Masukan nama Linkedin"
                        className="open-sans-400"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfilePerusahaan;
