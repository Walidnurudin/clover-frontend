import React, { useEffect, useState } from "react";
import { Cloud, Expand, Photo } from "../../assets/images/ProfilePageImage";

function Portofolio() {
  const submitDataDiri = (event) => {
    event.preventDefault();
    window.alert("Memperbarui Data");
  };

  return (
    <div className="user-profile__porto-exp mb-4 ack-bg-white">
      <p className="p-4 updateForm__header margin-reset ack-fw-600 ack-fsize-22">Portofolio</p>
      <form className="px-4 formDataDiri row" onSubmit={(event) => submitDataDiri(event)}>
        <div className="col-12">
          <label htmlFor="name" className="d-blok col-12 mt-4">
            Nama Aplikasi
          </label>
          <input
            type="text"
            placeholder="Masukkan Nama Aplikasi"
            name="namaAplikasi"
            className="p-2 col-12"
          />

          <label htmlFor="name" className="d-blok col-12 mt-4">
            Link Repository
          </label>
          <input
            type="text"
            placeholder="Masukkan Job Desk"
            name="linkRepo"
            className="p-2 col-12"
          />
        </div>

        <div className="col-12">
          <label htmlFor="" className="mt-4 col-12">
            Upload Gambar
          </label>
          <div className="col-12 portoInput p-5 d-flex justify-content-center">
            <div className="col-10 text-center justify-content-center">
              <img src={Cloud} alt="" />
              <p className="my-4 ack-fsize-14 col-12">
                Drag & Drop untuk Upload Gambar Aplikasi Mobile
              </p>
              <p className="my-4 ack-fsize-12 col-12">
                Atau cari untuk mengupload file dari direktorimu.
              </p>
              <div className="row col-12 justify-content-center  margin-reset">
                <div className="col-6 inputPortoImage__cond align-items-center row text-start">
                  <div className="col-3">
                    <img src={Expand} alt="" />
                  </div>
                  <span className="col-9 ack-fsize-12">High-Res Image PNG, JPG or GIF </span>
                </div>
                <div className="col-6 inputPortoImage__cond row align-items-center text-start">
                  <div className="col-3">
                    <img src={Photo} alt="" />
                  </div>
                  <span className="col-9 ack-fsize-12">Size 1080x1920 or 600x800</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <hr className="my-5" />
        </div>

        <div className="col-12 d-flex justify-content-end ">
          <button type="submit" className="p-3 mb-4 col-12 btn-add-exp">
            Tambah Portofolio
          </button>
        </div>
      </form>
    </div>
  );
}

export default Portofolio;
