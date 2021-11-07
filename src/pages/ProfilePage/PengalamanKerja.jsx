import React, { useEffect, useState } from "react";

function PengalamanKerja() {
  const submitDataDiri = (event) => {
    event.preventDefault();
    window.alert("Memperbarui Data");
  };

  return (
    <div className="user-profile__porto-exp mb-4 ack-bg-white">
      <p className="p-4 updateForm__header margin-reset ack-fw-600 ack-fsize-22">
        Pengalaman Kerja
      </p>
      <form className="px-4 formDataDiri row" onSubmit={(event) => submitDataDiri(event)}>
        <div className="col-6">
          <label htmlFor="name" className="d-blok col-12 mt-4">
            Nama Perusahaan
          </label>
          <input
            type="text"
            placeholder="Masukkan Nama Lengkap"
            name="namaPerusahaan"
            className="p-2 col-12"
          />
        </div>

        <div className="col-6">
          <label htmlFor="name" className="d-blok col-12 mt-4">
            Posisi
          </label>
          <input type="text" placeholder="Masukkan Job Desk" name="posisi" className="p-2 col-12" />
        </div>

        <div className="col-6">
          <label htmlFor="name" className="d-blok col-12 mt-4">
            Taggal Masuk
          </label>
          <input
            type="date"
            placeholder="Masukkan Domisili"
            name="tanggalMasuk"
            className="p-2 col-12"
          />
        </div>

        <div className="col-6">
          <label htmlFor="name" className="d-blok col-12 mt-4">
            Taggal Keluar
          </label>
          <input
            type="date"
            placeholder="Masukkan Domisili"
            name="tanggalKeluar"
            className="p-2 col-12"
          />
        </div>

        <div className="col-12">
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
        </div>

        <div className="col-12">
          <hr className="my-5" />
        </div>

        <div className="col-12 d-flex justify-content-end ">
          <button type="submit" className="p-3 mb-4 col-12 btn-add-exp">
            Tambah Pengalaman Kerja
          </button>
        </div>
      </form>
    </div>
  );
}

export default PengalamanKerja;
