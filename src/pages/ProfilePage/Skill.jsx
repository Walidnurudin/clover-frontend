import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Edit, Delete } from "../../assets/images/ProfilePageImage";
import axios from "../../utils/axios";

function Skill(props) {
  const submitDataDiri = (event) => {
    event.preventDefault();
    setUserSkills([...userSkills, `${inputSkill}`]);
    const newUserSkill = userSkills.join();
    console.log(newUserSkill);
    toast.success("Success add skill");

    setInputSkill("");
  };

  const [userSkills, setUserSkills] = useState(props.Skills);

  const [isUpdate, setIsUpdate] = useState(false);
  const [inputSkill, setInputSkill] = useState("");
  const [indexSkill, setIndexSkill] = useState(0);

  const updateSKill = (event, data, index) => {
    event.preventDefault();
    setIsUpdate(true);
    setInputSkill(data);
    setIndexSkill(index);
  };

  const applyUpdateSkill = (event) => {
    event.preventDefault();
    userSkills[indexSkill] = inputSkill;
    setInputSkill("");
    patchDataSkill();
    toast.success("Success update skill");
  };

  const patchDataSkill = () => {
    const newUserSkill = userSkills.join();
    console.log(newUserSkill);
    setIsUpdate(false);
  };

  useEffect(() => {
    console.log(userSkills);
    console.log(userSkills.join());
  }, [userSkills]);

  const deleteSkill = (index) => {
    // delete userSkills[index];
    userSkills.splice(index, 1);
    console.log(userSkills);
    toast.success("Success delete skill");
  };

  // GET DATA USER

  useEffect(() => {}, [userSkills]);

  return (
    <>
      <ToastContainer />
      <div className="user-profile__porto-exp mb-4 pb-4 ack-bg-white">
        <p className="p-4 updateForm__header margin-reset ack-fw-600 ack-fsize-22">Skill</p>
        <form
          className="px-4 row formDataDiri"
          onSubmit={
            isUpdate ? (event) => applyUpdateSkill(event) : (event) => submitDataDiri(event)
          }
        >
          <div className="col-8 col-lg-10">
            <input
              type="text"
              className="col-12 mt-4 p-3"
              value={inputSkill}
              onChange={(event) => setInputSkill(event.target.value)}
            />
          </div>

          <div className="col-4 col-lg-2 d-flex justify-content-end ">
            <button type="submit" className="p-3 mb-4 mt-4 btn-simpan">
              SIMPAN
            </button>
          </div>
        </form>
        <div className="user-profile__skils-container d-flex flex-wrap px-4">
          {userSkills.map((item, index) => (
            <span
              key={index}
              className="skills-list py-1 px-3 ack-fcolor-white ack-fsize-12 ack-fw-600 my-2 me-2"
            >
              {item}
              <img
                src={Edit}
                className="ms-3 hover-pointer"
                alt=""
                onClick={(event) => updateSKill(event, item, index)}
              />
              <img
                src={Delete}
                onClick={() => deleteSkill(index)}
                className="ms-2 hover-pointer"
                alt=""
              />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skill;
