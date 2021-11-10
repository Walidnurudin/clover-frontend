import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PengalamanKerja() {
  const submitDataDiri = (event) => {
    event.preventDefault();
    axios
      .post("user/experience", dataPengalamanBaru)
      .then((res) => {
        setDataPengalamanBaru();
        toast.success(res.data.msg);
        getPengalaman();
      })
      .catch((err) => {
        // console.log(err);
        // toast.error(err.msg);
      });
  };

  const [semuaDataPengalaman, setSemuaDataPengalaman] = useState([]);

  const getPengalaman = () => {
    axios
      .get(`user/experience/${localStorage.getItem("id")}`)
      .then((res) => {
        setSemuaDataPengalaman(res.data.data);
      })
      .catch((err) => {
        toast.error(err.msg);
      });
  };

  useEffect(() => {
    axios
      .get(`user/experience/${localStorage.getItem("id")}`)
      .then((res) => {
        setSemuaDataPengalaman(res.data.data);
        // console.log(res);
      })
      .catch((err) => {
        setSemuaDataPengalaman([]);
      });
  }, []);

  const [dataPengalamanBaru, setDataPengalamanBaru] = useState({});

  const handleInputPengalaman = (event) => {
    setDataPengalamanBaru({
      ...dataPengalamanBaru,
      user_id: localStorage.getItem("id"),
      [event.target.name]: event.target.value
    });
  };

  const [isUpdate, setIsUpdate] = useState(false);

  const selectUpdateData = (data) => {
    setIsUpdate(true);
    setDataPengalamanBaru(
      // delete data.user_id,
      {
        ...data,
        tanggal_masuk: data.tanggal_masuk.slice(0, 10),
        tanggal_keluar: data.tanggal_keluar.slice(0, 10)
      }
    );
  };

  const [updateData, setUpdateData] = useState({ ...dataPengalamanBaru });

  const updatePengalaman = (event) => {
    event.preventDefault();
    // console.log(dataPengalamanBaru);
    // delete updateData.user_id;
    delete dataPengalamanBaru.createdAt;
    delete dataPengalamanBaru.updatedAt;
    delete dataPengalamanBaru.user_id;
    axios
      .patch(`user/experience/${dataPengalamanBaru.id}`, dataPengalamanBaru)
      .then((res) => {
        toast.success(res.data.msg);
        // console.log(dataPengalamanBaru);
        axios
          .get(`user/experience/${localStorage.getItem("id")}`)
          .then((res) => {
            setSemuaDataPengalaman(res.data.data);
            setIsUpdate(false);
            // console.log(res);
          })
          .catch((err) => {
            // console.log(err);
          });
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const confirmDelete = (data) => {
    // confirm("hello");
    const confirmDes = confirm(`Hapus Pengalaman ${data.posisi} di ${data.nama_perusahaan}`);
    confirmDes ? deleteExp(data.id) : toast.info("Perintah Dibatalkan!");
  };

  const deleteExp = (data) => {
    axios.delete(`user/experience/${data}`).then((res) => {
      // console.log(res);
      setMsg(res.data.msg);
      toast.success(res.data.msg);
      axios
        .get(`user/experience/${localStorage.getItem("id")}`)
        .then((res) => {
          setSemuaDataPengalaman(res.data.data);
        })
        .catch((err) => {
          setSemuaDataPengalaman([]);
        });
    });
  };

  const [msg, setMsg] = useState("");

  useEffect(() => {}, [dataPengalamanBaru]);

  return (
    <div className="user-profile__porto-exp mb-4 ack-bg-white">
      <p className="p-4 updateForm__header margin-reset ack-fw-600 ack-fsize-22">
        Pengalaman Kerja
      </p>
      <form
        className="px-4 formDataDiri row"
        onSubmit={isUpdate ? (event) => updatePengalaman(event) : (event) => submitDataDiri(event)}
      >
        <div className="col-lg-6 col-12">
          <label htmlFor="name" className="d-blok col-12 mt-4">
            Nama Perusahaan
          </label>
          <input
            required
            type="text"
            placeholder="Masukkan Nama Perusahaan"
            name="nama_perusahaan"
            className="p-2 col-12"
            onChange={(event) => handleInputPengalaman(event)}
            value={dataPengalamanBaru ? dataPengalamanBaru.nama_perusahaan : ""}
          />
        </div>

        <div className="col-lg-6 col-12">
          <label htmlFor="name" className="d-blok col-12 mt-4">
            Posisi
          </label>
          <input
            required
            type="text"
            placeholder="Masukkan Posisi"
            onChange={(event) => handleInputPengalaman(event)}
            name="posisi"
            className="p-2 col-12"
            value={dataPengalamanBaru ? dataPengalamanBaru.posisi : ""}
          />
        </div>

        <div className="col-6">
          <label htmlFor="name" className="d-blok col-12 mt-4">
            Taggal Masuk
          </label>
          <input
            required
            type="date"
            placeholder="Masukkan Tanggal Masuk"
            name="tanggal_masuk"
            className="p-2 col-12"
            onChange={(event) => handleInputPengalaman(event)}
            value={dataPengalamanBaru ? dataPengalamanBaru.tanggal_masuk : ""}
          />
        </div>

        <div className="col-6">
          <label htmlFor="name" className="d-blok col-12 mt-4">
            Taggal Keluar
          </label>
          <input
            required
            type="date"
            placeholder="Masukkan Tanggal Keluar"
            name="tanggal_keluar"
            className="p-2 col-12"
            onChange={(event) => handleInputPengalaman(event)}
            value={dataPengalamanBaru ? dataPengalamanBaru.tanggal_keluar : ""}
          />
        </div>

        <div className="col-12">
          <label htmlFor="" className="mt-4 col-12">
            Deskripsi Singkat
          </label>
          <textarea
            required
            name="description"
            className="col-12 p-2"
            id=""
            placeholder="Tulis Deskripsi Singkat Tentang Pekerjaan Anda"
            rows="7"
            onChange={(event) => handleInputPengalaman(event)}
            value={dataPengalamanBaru ? dataPengalamanBaru.description : ""}
          ></textarea>
        </div>

        <div className="col-12">
          <hr className="my-5" />
        </div>

        <div className="col-12 d-flex justify-content-end ">
          <button type="submit" className="p-3 col-12 btn-add-exp">
            {isUpdate ? "Perbarui Pengalaman Kerja" : "Tambah Pengalaman Kerja"}
          </button>
        </div>

        <div className="col-12">
          <hr className="my-5" />
        </div>
      </form>

      <div className="row container margin-reset">
        {semuaDataPengalaman.map((item, index) => (
          <div key={index} className="col-lg-4 col-12 text-center my-3 " style={{}}>
            <div
              className="col-12 text-center p-2"
              style={{
                border: "1px solid #5e50a1",
                borderRadius: "8px",
                boxShadow: "2px 2px 5px #5e50a1"
              }}
            >
              <p className="ack-fsize-18 ack-fw-700 mb-1">{item.posisi}</p>
              <p className="ack-fsize-14 mb-1 ack-fw-400">{item.nama_perusahaan}</p>
              <button
                className="ack-btn-prim text-center p-2 my-1"
                onClick={() => selectUpdateData(item)}
              >
                UPDATE
              </button>
              <button
                // onClick={() => deleteExp(item.id)}
                onClick={() => confirmDelete(item)}
                className="ack-btn-2 text-center p-2 my-1"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PengalamanKerja;
