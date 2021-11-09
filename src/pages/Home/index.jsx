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
  sortLocationUsers
} from "../../stores/actions/user";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory();
  const [user, setUser] = useState(props.user.users);
  const [show, setShow] = useState(false);
  const [filterShow, setFilterShow] = useState(false);
  const [search, setSearch] = useState("");
  const [sort] = useState("ASC");
  const [page, setPage] = useState(1);
  const [limit] = useState(3);
  const [totalPage, setTotalPage] = useState("");

  const listGetAllUsers = () => {
    props.getAllUsers(page, limit).then((response) => {
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
      const response = await props.searchUsers(search, page, limit);
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
      const response = await props.sortNameUsers(sort, page, limit);
      setUser(response.value.data.data);
      history.push(`/home?sort=${sort}`);
      setFilterShow(false);
    } catch (error) {
      new Error(error);
    }
  };
  const findSortBySkill = async () => {
    try {
      const response = await props.sortSkillUsers(sort, page, limit);
      setUser(response.value.data.data);
      history.push(`/home?sort=${sort}`);
      setFilterShow(false);
    } catch (error) {
      new Error(error);
    }
  };
  const findSortByLocation = async () => {
    try {
      const response = await props.sortLocationUsers(sort, page, limit);
      setUser(response.value.data.data);
      history.push(`/home?sort=${sort}`);
      setFilterShow(false);
    } catch (error) {
      new Error(error);
    }
  };

  const changePagination = (event) => {
    const selectedPage = event.selected + 1;
    setPage(selectedPage, () => getAllUsers(page, limit));
  };

  useEffect(() => {
    listGetAllUsers();
  }, [page, limit, sort, search]);
  // console.log(users.skill);

  return (
    <>
      {!show ? (
        <>
          <div className="d-none d-md-block">
            <Navbar />
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
                    <button style={{ border: "none", backgroundColor: "transparent" }}>
                      Sortir Berdasarkan Freelance
                    </button>
                    <hr />
                  </div>
                  <div className="homepage__search-search-filter-menu-child">
                    <button style={{ border: "none", backgroundColor: "transparent" }}>
                      Sortir Berdasarkan Fulltime
                    </button>
                    <hr />
                  </div>
                </div>
              )}
            </section>
            <section className="homepage__spacing homepage__main-list-users">
              <h2 className="d-block d-md-none homepage__topmenu-title">Web Developer</h2>
              {user.map((users, idx) => {
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
                      src={Profile}
                      alt=""
                      className="homepage__list-users-card-image img-fluid"
                    />
                    <div className="homepage__list-users-card-body">
                      <div className="homepage__list-users-card-body-left">
                        <h5>{users.nama}</h5>
                        <span>
                          {users.jobDesk ? users.jobDesk : "-"}
                          {" - "}
                          {users.jobStatus ? users.jobStatus : null}
                        </span>
                        <span>{users.domisili ? users.domisili : "-"}</span>
                        <div className="homepage__list-users-card-body-skills">
                          {users.skill.map((skills, idx) => {
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
                        <button className="homepage__list-users-card-body-button">
                          Lihat Profile
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
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
              <input type="text" placeholder="Android Developer" />
            </div>
            <div className="homepage__mobile-navigation-filter">
              <button onClick={handleFilterMobile}>
                <img src={IcSortList} width="20" height="20" alt="List Sort" />
              </button>
            </div>
          </section>
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
  sortLocationUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
