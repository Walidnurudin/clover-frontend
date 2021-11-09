import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";

function DataDiri(props) {
  const submitDataDiri = (event) => {
    event.preventDefault();
    axios
      .patch("user", dataDiriBaru)
      .then((res) => window.alert("Updated"))
      .catch(
        (err) => console.log(err)
        // window.alert(err)
      );
  };

  const [dataDiriBaru, setDataDiriBaru] = useState({});

  useEffect(() => {
    setDataDiriBaru(props.dataUser);
  }, []);

  const {
    description,
    bidangPerusahaan,
    domisili,
    email,
    github,
    gitlab,
    image,
    instagram,
    jobDesk,
    jobStatus,
    linkedin,
    nama,
    noHandphone,
    perusahaan,
    skill,
    status
  } = dataDiriBaru;

  const handleChangeData = (event) => {
    setDataDiriBaru({
      ...dataDiriBaru,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    console.log(dataDiriBaru);
  }, [dataDiriBaru]);

  return (
    <div className="user-profile__porto-exp mb-4 ack-bg-white">
      <p className="p-4 updateForm__header margin-reset ack-fw-600 ack-fsize-22">Data Diri</p>
      <form className="px-4 formDataDiri" onSubmit={(event) => submitDataDiri(event)}>
        <label htmlFor="name" className="d-blok col-12 mt-4">
          Nama Lengkap
        </label>
        <input
          type="text"
          placeholder="Masukkan Nama Lengkap"
          name="nama"
          onChange={(event) => handleChangeData(event)}
          className="p-2 col-12"
          value={nama ? nama : ""}
        />

        <label htmlFor="nama" className="d-blok col-12 mt-4">
          Job Desk
        </label>
        <input
          type="text"
          placeholder="Masukkan Job Desk"
          name="jobDesk"
          onChange={(event) => handleChangeData(event)}
          className="p-2 col-12"
          value={jobDesk ? jobDesk : ""}
        />

        <label htmlFor="name" className="d-blok col-12 mt-4">
          Domisili
        </label>
        <input
          type="text"
          placeholder="Masukkan Domisili"
          name="domisili"
          onChange={(event) => handleChangeData(event)}
          className="p-2 col-12"
          value={domisili ? domisili : ""}
        />

        <div className="social-input mt-lg-4 row">
          <div className="col-lg-4 col-12 mt-lg-0 mt-4">
            <label htmlFor="">IG</label>
            <input
              type="text"
              placeholder="Masukkan Username IG"
              name="instagram"
              onChange={(event) => handleChangeData(event)}
              className="p-2 col-12"
              value={instagram ? instagram : ""}
            />
          </div>

          <div className="col-lg-4 col-12 mt-lg-0 mt-4">
            <label htmlFor="">Github</label>
            <input
              type="text"
              placeholder="Masukkan Username Github"
              name="github"
              onChange={(event) => handleChangeData(event)}
              className="p-2 col-12"
              value={github ? github : ""}
            />
          </div>

          <div className="col-lg-4 col-12 mt-lg-0 mt-4">
            <label htmlFor="">Gitlab</label>
            <input
              type="text"
              placeholder="Masukkan Username Gitlab"
              name="gitlab"
              onChange={(event) => handleChangeData(event)}
              className="p-2 col-12"
              value={gitlab ? gitlab : ""}
            />
          </div>
        </div>

        <label htmlFor="" className="mt-4 col-12">
          Deskripsi Singkat
        </label>
        <textarea
          name="description"
          className="col-12 p-2"
          id=""
          onChange={(event) => handleChangeData(event)}
          placeholder="Tulis Deskripsi Singkat"
          rows="7"
          value={description ? description : ""}
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
