import React, { useEffect, useState } from "react";
import {
  Profile,
  Union,
  Bell,
  IcHomeMobile,
  IcSearchMobile,
  IcMessageMobile,
  IcSortList
} from "../../assets/images";
import Pagination from "react-paginate";
import { Search } from "react-bootstrap-icons";
import Navbar from "../../components/atoms/Navbar";
import Footer from "../../components/atoms/Footer";
import "./index.css";
import {
  searchUsers,
  getAllUsers,
  sortSkillUsers,
  sortNameUsers,
  sortLocationUsers,
  sortFullTimeJobUsers
} from "../../stores/actions/user";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory();
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const [filterShow, setFilterShow] = useState(false);
  const [search, setSearch] = useState("");
  let [sort] = useState("DESC");
  const [jobFreelance] = useState("Freelance");
  const [jobFulltime] = useState("Fulltime");
  const [page, setPage] = useState(1);
  let [limit] = useState(3);
  const [totalPage, setTotalPage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [role] = useState("Pekerja");

  const listGetAllUsers = () => {
    props.getAllUsers(role, page, limit).then((response) => {
      setLoading(false);
      setUser(response.value.data.data);
      setTotalPage(response.value.data.pagination.totalPage);
    });
  };

  const handleShowSearch = (event) => {
    if (event.target.alt === "Search") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleFilterMobile = () => {
    if (filterShow === false) {
      setFilterShow(true);
    } else {
      setFilterShow(false);
    }
  };

  const findUser = async (event) => {
    try {
      setLoading(true);
      const response = await props.searchUsers(role, search, page, limit);
      setLoading(false);
      setUser(response.value.data.data);
      history.push(`/home?search=${search}`);
      toast.success("Pencarian Ditemukan");
    } catch (error) {
      toast.error("Keywoard yang anda cari tidak ditemukan...");
      new Error(error);
    }
  };

  const findSortByName = async () => {
    try {
      setLoading(true);
      const response = await props.sortNameUsers(role, sort, page, limit);
      setLoading(false);
      setUser(response.value.data.data);
      setTotalPage(response.value.data.pagination.totalPage);
      history.push(`/home?sort=${sort}`);
      setFilterShow(false);
    } catch (error) {
      new Error(error);
    }
  };
  const findSortBySkill = async () => {
    try {
      setLoading(true);

      const response = await props.sortSkillUsers(role, sort, page, limit);
      console.log(response);
      setLoading(false);
      setUser(response.value.data.data);
      setTotalPage(response.value.data.pagination.totalPage);
      history.push(`/home?sort=${sort}`);
      setFilterShow(false);
    } catch (error) {
      new Error(error);
    }
  };
  const findSortByLocation = async () => {
    try {
      setLoading(true);
      const response = await props.sortLocationUsers(role, sort, page, limit);
      setLoading(false);
      setUser(response.value.data.data);
      setTotalPage(response.value.data.pagination.totalPage);
      history.push(`/home?sort=${sort}`);
      setFilterShow(false);
    } catch (error) {
      new Error(error);
    }
  };

  const changePagination = (event) => {
    const selectedPage = event.selected + 1;
    history.push(`/home?page=${selectedPage}&limit=${limit}`);
    setPage(selectedPage, () => getAllUsers(role, selectedPage, limit));
  };

  const findFreelance = async () => {
    try {
      setLoading(true);
      const response = await props.sortFullTimeJobUsers(role, jobFreelance, page, limit);
      setLoading(false);
      setUser(response.value.data.data);
      setTotalPage(response.value.data.pagination.totalPage);
      setFilterShow(false);
    } catch (error) {
      new Error(error);
    }
  };
  const findFulltime = async () => {
    try {
      setLoading(true);
      const response = await props.sortFullTimeJobUsers(role, jobFulltime, page, limit);
      setLoading(false);
      setUser(response.value.data.data);
      setTotalPage(response.value.data.pagination.totalPage);
      setFilterShow(false);
    } catch (error) {
      new Error(error);
    }
  };

  const linkToProfile = (user_id) => {
    history.push("/profile", { user_id });
  };

  useEffect(() => {
    listGetAllUsers();
  }, [role, page, limit, sort, search]);

  return (
    <>
      {!show ? (
        <>
          <div className="d-none d-md-block">
            <Navbar {...props} />
          </div>
          <section className="homepage__container homepage__spacing homepage__banner">
            <section className="d-block d-md-none homepage__topmenu">
              <img src={Union} className="img-fluid" alt="Union" />
              <div className="homepage__topmenu-column">
                <div>
                  <p className="homepage__topmenu-date">Sen, 21 April 2021</p>
                  <h4 className="homepage__topmenu-name">Hai, Mohammad!</h4>
                </div>
                <div>
                  <img src={Bell} className="homepage__topmenu-bell img-fluid" alt="Bell" />
                </div>
              </div>
            </section>
            <section className="homepage__topjobs">
              <h4>Top Jobs</h4>
            </section>
          </section>
          <section className="homepage__main">
            <ToastContainer />
            <section className="homepage__spacing homepage__main-search">
              <section className="homepage__search">
                <div className="homepage__search-container-input">
                  <input
                    type="text"
                    className="homepage__search-input"
                    placeholder="Search for any skill"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Search />
                </div>
                <hr className="homepage__search-line" />
                <div className="homepage__search-container-filter">
                  <span className="homepage-search-filter" onClick={handleFilterMobile}>
                    Kategori
                  </span>
                </div>
                <div className="homepage__search-container-button">
                  <button type="submit" className="homepage__search-button" onClick={findUser}>
                    Search
                  </button>
                </div>
              </section>
              {!filterShow ? null : (
                <div className="homepage__search-search-filter-menu">
                  <div className="homepage__search-search-filter-menu-child">
                    <button
                      onClick={findSortByName}
                      style={{ border: "none", backgroundColor: "transparent" }}
                    >
                      Sortir Berdasarkan Nama
                    </button>
                    <hr />
                  </div>
                  <div className="homepage__search-search-filter-menu-child">
                    <button
                      onClick={findSortBySkill}
                      style={{ border: "none", backgroundColor: "transparent" }}
                    >
                      Sortir Berdasarkan Skill
                    </button>
                    <hr />
                  </div>
                  <div className="homepage__search-search-filter-menu-child">
                    <button
                      onClick={findSortByLocation}
                      style={{ border: "none", backgroundColor: "transparent" }}
                    >
                      Sortir Berdasarkan Lokasi
                    </button>
                    <hr />
                  </div>
                  <div className="homepage__search-search-filter-menu-child">
                    <button
                      style={{ border: "none", backgroundColor: "transparent" }}
                      onClick={findFreelance}
                    >
                      Sortir Berdasarkan Freelance
                    </button>
                    <hr />
                  </div>
                  <div className="homepage__search-search-filter-menu-child">
                    <button
                      style={{ border: "none", backgroundColor: "transparent" }}
                      onClick={findFulltime}
                    >
                      Sortir Berdasarkan Fulltime
                    </button>
                    <hr />
                  </div>
                </div>
              )}
            </section>
            <section className="homepage__spacing homepage__main-list-users">
              <h2 className="d-block d-md-none homepage__topmenu-title">Web Developer</h2>
              {user.length > 0 && props.user.users !== null ? (
                user.map((users, idx) => {
                  // const skillAsli = users.skill.map((value) => value);
                  // let temp;
                  // if (users.skill.length > 3) {
                  //   const parseMoreSkills = users.skill.pop();
                  //   temp = parseMoreSkills;
                  // }
                  // const moreSkills = temp === undefined ? null : temp.split();
                  return (
                    <div className="homepage__list-users-card" key={idx}>
                      <img
                        src={`${
                          user.image
                            ? `${
                                process.env.REACT_APP_NAME === "dev"
                                  ? process.env.REACT_APP_DEV
                                  : process.env.REACT_APP_PROD
                              }uploads/user/${user.image}`
                            : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                        }`}
                        alt=""
                        className="homepage__list-users-card-image img-fluid"
                      />
                      <div className="homepage__list-users-card-body">
                        <div className="homepage__list-users-card-body-left">
                          <h5>{users.nama}</h5>
                          <span>
                            {users.jobDesk ? users.jobDesk : "-"}
                            {users.jobStatus ? users.jobStatus : null}
                          </span>
                          <span>{users.domisili ? users.domisili : "-"}</span>
                          <div className="homepage__list-users-card-body-skills">
                            {users.skill?.map((skills, idx) => {
                              return (
                                <div key={idx}>
                                  <div className="homepage__list-users-card-body-skills-category">
                                    {skills}
                                  </div>
                                </div>
                              );
                            })}
                            <span className="homepage__list-users-card-body-skills-more d-flex d-md-none">
                              8+
                            </span>
                          </div>
                        </div>
                        <div className="homepage__list-users-card-body-right">
                          <button
                            className="homepage__list-users-card-body-button"
                            onClick={() => linkToProfile(users.id)}
                          >
                            Lihat Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center fw-bold">Belum ada pekerja</p>
              )}
            </section>
            <section className="homepage__spacing homepage__pagination">
              <Pagination
                containerClassName="homepage__pagination"
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={totalPage}
                onPageChange={changePagination}
                previousClassName="homepage__pagination-previous"
                nextClassName="homepage__pagination-next"
                pageClassName="homepage__pagination-page"
              />
            </section>
          </section>
        </>
      ) : (
        <section
          className={`homepage__mobile-navigation-main ${
            !filterShow ? null : "homepage__mobile-navigation-fade"
          }`}
        >
          <section className="homepage__mobile-navigation-search-main d-flex d-md-none">
            <div className="homepage__mobile-navigation-search">
              <input type="text" placeholder="Golang Java React" />
            </div>
            <div className="homepage__mobile-navigation-filter">
              <button onClick={handleFilterMobile}>
                <img src={IcSortList} width="20" height="20" alt="List Sort" />
              </button>
            </div>
          </section>
          {/* CARD USERS MOBILE */}
          {/* <div className="homepage__mobile-navigation-list-users">
            <h5>Android Developer</h5>
            <div className="homepage__mobile-navigation-list-users-container">
              <div className="homepage__mobile-navigation-list-users-card">
                <div className="homepage__mobile-navigation-list-users-card-parent-image">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis qui, libero
                    similique saepe animi consequuntur exercitationem mollitia eaque totam facilis
                    veniam vero optio cumque voluptate aut possimus amet repellat dolores.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="homepage__mobile-navigation"></div>
          {!filterShow ? null : (
            <div className="homepage__mobile-rectangle">
              <div>
                <button className="homepage__mobile-rectangle-link">Sortir Berdasarkan nama</button>
                <hr />
                <button className="homepage__mobile-rectangle-link">
                  Sortir Berdasarkan Skill
                </button>
                <hr />
                <button className="homepage__mobile-rectangle-link">
                  Sortir Berdasarkan Lokasi
                </button>
                <hr />
                <button className="homepage__mobile-rectangle-link">
                  Sortir Berdasarkan Freelance
                </button>
                <hr />
                <button className="homepage__mobile-rectangle-link">
                  Sortir Berdasarkan Fulltime
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      <section className="homepage__navigation-mobile d-flex d-md-none">
        <div className="homepage__navigation-mobile-home" onClick={handleShowSearch}>
          <img src={IcHomeMobile} className="img-fluid" width="23" height="23" alt="Home" />
        </div>
        <div className="homepage__navigation-mobile-search" onClick={handleShowSearch}>
          <img src={IcSearchMobile} className="img-fluid" width="23" height="23" alt="Search" />
        </div>
        <div className="homepage__navigation-mobile-chat">
          <img src={IcMessageMobile} className="img-fluid" width="23" height="23" alt="Chat" />
        </div>
        <div className="homepage__navigation-mobile-profile">
          <img src={Profile} className="img-fluid" width="25" height="23" alt="Profile" />
        </div>
      </section>
      <div className="d-none d-md-block">
        <Footer />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {
  searchUsers,
  getAllUsers,
  sortSkillUsers,
  sortNameUsers,
  sortLocationUsers,
  sortFullTimeJobUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
