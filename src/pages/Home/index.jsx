import React, { useState } from "react";
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

function Home() {
  const [show, setShow] = useState(false);
  const [filterShow, setFilterShow] = useState(false);
  const users = [
    {
      name: "Louis Tomlinson",
      jobDesk: "Web developer - Freelance",
      location: "Lorem ipsum",
      skills: ["PHP", "NODEJS", "HTML"]
    },
    {
      name: "Harry Styles",
      jobDesk: "Web developer - Fulltime",
      location: "Lorem ipsum",
      skills: ["PHP", "NODEJS", "HTML"]
    },
    {
      name: "Niall Horan",
      jobDesk: "Web developer - Freelance",
      location: "Lorem ipsum",
      skills: ["PHP", "NODEJS", "HTML"]
    }
  ];
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
            <section className="homepage__spacing homepage__main-search">
              <section className="homepage__search">
                <div className="homepage__search-container-input">
                  <input
                    type="text"
                    className="homepage__search-input"
                    placeholder="Search for any skill"
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
                  <button type="submit" className="homepage__search-button">
                    Search
                  </button>
                </div>
              </section>
              {!filterShow ? null : (
                <div className="homepage__search-search-filter-menu">
                  <div className="homepage__search-search-filter-menu-child">
                    <button style={{ border: "none", backgroundColor: "transparent" }}>
                      Sortir Berdasarkan Nama
                    </button>
                    <hr />
                  </div>
                  <div className="homepage__search-search-filter-menu-child">
                    <button style={{ border: "none", backgroundColor: "transparent" }}>
                      Sortir Berdasarkan Skill
                    </button>
                    <hr />
                  </div>
                  <div className="homepage__search-search-filter-menu-child">
                    <button style={{ border: "none", backgroundColor: "transparent" }}>
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
              {users.map((user, idx) => (
                <div className="homepage__list-users-card" key={idx}>
                  <img src={Profile} alt="" className="homepage__list-users-card-image img-fluid" />
                  <div className="homepage__list-users-card-body">
                    <div className="homepage__list-users-card-body-left">
                      <h5>{user.name}</h5>
                      <span>{user.jobDesk}</span>
                      <span>{user.location}</span>
                      <div className="homepage__list-users-card-body-skills">
                        {user.skills.map((skill, idx) => (
                          <div key={idx}>
                            <div className="homepage__list-users-card-body-skills-category">
                              {skill}
                            </div>
                          </div>
                        ))}
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
              ))}
            </section>
            <section className="homepage__spacing homepage__pagination">
              <Pagination
                containerClassName="homepage__pagination"
                previousLabel={"<"}
                nextLabel={">"}
                previousClassName="homepage__pagination-previous"
                nextClassName="homepage__pagination-next"
                pageCount={3}
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

export default Home;
