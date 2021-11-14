import React, { useState, useEffect } from "react";
import { Suitcase } from "../../assets/images/ProfilePageImage";
import axios from "../../utils/axios";
import moment from "moment";

function ExpComp() {
  const [userJobExp, setUserJobExp] = useState([]);
  useEffect(() => {
    axios
      .get(`experience/${localStorage.getItem("id")}`)
      .then((res) => {
        // console.log(res.data.data);
        setUserJobExp(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(userJobExp);
  }, [userJobExp]);

  const { nama_perusahaan, posisi, tanggal_keluar, desription, tanggal_masuk } = userJobExp;

  return userJobExp.map((item, index) => (
    <div className="job-exp mb-4" key={index}>
      <div className="job-exp__list row">
        <div className="job-exp__list-img col-lg-2 col-3">
          <img src={Suitcase} alt="" />
        </div>
        <div className="job-exp__list-desc col-lg-10 col-9">
          <p className="ack-fw-600 ack-fsize-20 margin-reset">{item.posisi ? item.posisi : ""}</p>
          <p className="ack-fw-400 ack-fsize-18 margin-reset">
            {item.nama_perusahaan ? item.nama_perusahaan : ""}
          </p>
          <span className="ack-fcolor2 me-3 d-lg-inline d-block">
            {moment(item.tanggal_masuk).format("MMMM YYYY")} -{" "}
            {moment(item.tanggal_keluar).format("MMMM YYYY")}
          </span>
          <span className="ack-fcolor2 me-3 d-lg-inline d-block">
            {moment(item.tanggal_keluar).format("YYYY") - moment(item.tanggal_masuk).format("YYYY")}{" "}
            Years {moment(item.tanggal_keluar).format("M") - moment(item.tanggal_masuk).format("M")}{" "}
            Months
          </span>
          <p className="my-4 ack-fw-400 ack-fsize-400 ack-lh-24">
            {item.description ? item.description : ""}
          </p>
        </div>
      </div>
    </div>
  ));
}

export default ExpComp;
