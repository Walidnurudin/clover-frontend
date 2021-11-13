import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

function PengalamanKerja() {
  const submitDataDiri = (event) => {
    event.preventDefault();
    axios
      .post("experience", dataPengalamanBaru)
      .then((res) => {
        if (
          !dataPengalamanBaru.nama_perusahaan ||
          !dataPengalamanBaru.posisi ||
          !dataPengalamanBaru.tanggal_masuk ||
          !dataPengalamanBaru.tanggal_keluar ||
          !dataPengalamanBaru.description
        ) {
          toast.error("Tolong Isi Semua Kolom Yang Ada");
        } else {
          setDataPengalamanBaru();
          toast.success(res.data.msg);
          getPengalaman();
        }
      })
      .catch((err) => {
        console.log(err);
        // console.log(err);
        // toast.error(err.msg);
      });
  };

  const [semuaDataPengalaman, setSemuaDataPengalaman] = useState([]);

  const getPengalaman = () => {
    axios
      .get(`experience/${localStorage.getItem("id")}`)
      .then((res) => {
        setSemuaDataPengalaman(res.data.data);
      })
      .catch((err) => {
        setSemuaDataPengalaman([]);
      });
  };

  useEffect(() => {
    axios
      .get(`experience/${localStorage.getItem("id")}`)
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
      .patch(`experience/${dataPengalamanBaru.id}`, dataPengalamanBaru)
      .then((res) => {
        setIsUpdate(false);
        setDataPengalamanBaru();
        axios
          .get(`experience/${localStorage.getItem("id")}`)
          .then((res) => {
            setSemuaDataPengalaman(res.data.data);
            toast.success(res.data.msg);
            // console.log(res);
          })
          .catch((err) => {
            // console.log(err);
          });
      })
      .catch((err) => {
        setIsUpdate(false);
        setDataPengalamanBaru();

        // console.log(err);
      });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const confirmDelete = (data) => {
    // confirm("hello");
    const confirmDes = confirm(`Hapus Pengalaman ${data.posisi} di ${data.nama_perusahaan}`);
    confirmDes ? deleteExp(data.id) : toast.info("Perintah Dibatalkan!");
  };

  const [deleteId, setDeleteId] = useState("");
  const [deletePosisi, setDeletePosisi] = useState("");
  const [deleteLokasi, setDeleteLokasi] = useState("");
  const [deleteTahunMasuk, setDeleteTahunMasuk] = useState("");
  const [deleteTahunKeluar, setDeleteTahunKeluar] = useState("");

  const deleteExp = (data) => {
    console.log(data);
    setDeleteId(data.id);
    setDeletePosisi(data.posisi);
    setDeleteLokasi(data.nama_perusahaan);
    setDeleteTahunMasuk(moment(data.tanggal_masuk).format("DD MMMM YYYY"));
    setDeleteTahunKeluar(moment(data.tanggal_keluar).format("DD MMMM YYYY"));
    setShow(true);
  };

  const deletePengalaman = () => {
    axios.delete(`experience/${deleteId}`).then((res) => {
      getPengalaman();
      setShow(false);
    });
  };

  const [msg, setMsg] = useState("");

  useEffect(() => {}, [dataPengalamanBaru]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="justify-content-center">
          <Modal.Title>Konfirmasi Delete Pengalaman</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            Delete Pengalaman Sebagai {deletePosisi} di {deleteLokasi} periode {deleteTahunMasuk}{" "}
            sampai {deleteTahunKeluar}
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-evenly">
          <div style={{ width: "40%" }}>
            <Button className="ack-btn-2" onClick={handleClose}>
              Close
            </Button>
          </div>
          <div style={{ width: "40%" }}>
            <Button
              className="ack-btn-prim"
              style={{ width: "40%" }}
              onClick={() => deletePengalaman()}
            >
              Delete
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <div className="user-profile__porto-exp mb-4 ack-bg-white">
        <p className="p-4 updateForm__header margin-reset ack-fw-600 ack-fsize-22">
          Pengalaman Kerja
        </p>
        <form
          className="px-4 formDataDiri row"
          onSubmit={
            isUpdate ? (event) => updatePengalaman(event) : (event) => submitDataDiri(event)
          }
        >
          <div className="col-lg-6 col-12">
            <label htmlFor="name" className="d-blok col-12 mt-4">
              Nama Perusahaan
            </label>
            <input
              // required
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
              // required
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
              // required
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
              // required
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
              // required
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
            <div key={index} className="col-lg-4 col-12 text-center my-3 ">
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
                  onClick={() => deleteExp(item)}
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

export default PengalamanKerja;
