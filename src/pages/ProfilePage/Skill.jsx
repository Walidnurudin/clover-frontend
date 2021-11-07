import React, { useEffect, useState } from "react";

import { Edit, Delete } from "../../assets/images/ProfilePageImage";

function Skill(props) {
  console.log(props);
  const submitDataDiri = (event) => {
    event.preventDefault();
    window.alert("Memperbarui Data");
  };

  return (
    <div className="user-profile__porto-exp mb-4 pb-4 ack-bg-white">
      <p className="p-4 updateForm__header margin-reset ack-fw-600 ack-fsize-22">Skill</p>
      <form className="px-4 row formDataDiri" onSubmit={(event) => submitDataDiri(event)}>
        <div className="col-10">
          <input type="text" className="col-12 mt-4 p-3" />
        </div>

        <div className="col-2 d-flex justify-content-end ">
          <button type="submit" className="p-3 mb-4 mt-4 btn-simpan">
            SIMPAN
          </button>
        </div>
      </form>
      <div className="user-profile__skils-container d-flex flex-wrap px-4">
        {props.Skills.split(",").map((item, index) => (
          <span
            key={index}
            className="skills-list py-1 px-3 ack-fcolor-white ack-fsize-12 ack-fw-600 my-2 me-2"
          >
            {item}
            <img src={Edit} className="ms-3" alt="" />
            <img src={Delete} className="ms-2" alt="" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skill;
