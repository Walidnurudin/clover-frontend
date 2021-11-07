import React, { useEffect, useState } from "react";

function DataDiri() {
  const submitDataDiri = (event) => {
    event.preventDefault();
    window.alert("Memperbarui Data");
  };

  return (
    <div className="user-profile__porto-exp mb-4 ack-bg-white">
      <p className="p-4 updateForm__header margin-reset ack-fw-600 ack-fsize-22">Data Diri</p>
      <form className="px-4 formDataDiri" onSubmit={(event) => submitDataDiri(event)}>
        <label htmlFor="name" className="d-blok col-12 mt-4">
          Nama Lengkap
        </label>
        <input type="text" placeholder="Masukkan Nama Lengkap" name="name" className="p-2 col-12" />

        <label htmlFor="name" className="d-blok col-12 mt-4">
          Job Desk
        </label>
        <input type="text" placeholder="Masukkan Job Desk" name="jobDesk" className="p-2 col-12" />

        <label htmlFor="name" className="d-blok col-12 mt-4">
          Domisili
        </label>
        <input type="text" placeholder="Masukkan Domisili" name="domisili" className="p-2 col-12" />

        <div className="social-input mt-4 row">
          <div className="col-4">
            <label htmlFor="">IG</label>
            <input
              type="text"
              placeholder="Masukkan Username IG"
              name="IG"
              className="p-2 col-12"
            />
          </div>

          <div className="col-4">
            <label htmlFor="">Github</label>
            <input
              type="text"
              placeholder="Masukkan Username Github"
              name="Github"
              className="p-2 col-12"
            />
          </div>

          <div className="col-4">
            <label htmlFor="">Gitlab</label>
            <input
              type="text"
              placeholder="Masukkan Username Gitlab"
              name="Gitlabs"
              className="p-2 col-12"
            />
          </div>
        </div>

        <label htmlFor="" className="mt-4 col-12">
          Deskripsi Singkat
        </label>
        <textarea
          name=""
          className="col-12 p-2"
          id=""
          placeholder="Tulis Deskripsi Singkat"
          rows="7"
        ></textarea>

        <div className="col-12 d-flex justify-content-end ">
          <button type="submit" className="p-3 mb-4 mt-4 btn-simpan">
            SIMPAN
          </button>
        </div>
      </form>
    </div>
  );
}

export default DataDiri;
