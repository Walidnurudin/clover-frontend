import React, { useState } from "react";
import { Profile, Union, Bell } from "../../assets/images";
import Pagination from "react-paginate";
import { Search } from "react-bootstrap-icons";
import "./index.css";
function Home() {
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

  return (
    <>
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
              <span className="homepage-search-filter">Kategori</span>
            </div>
            <div className="homepage__search-container-button">
              <button type="submit" className="homepage__search-button">
                Search
              </button>
            </div>
          </section>
          <div className="homepage__search-search-filter-menu">
            <div className="homepage__search-search-filter-menu-child">
              <span>Sortir Berdasarkan Nama</span>
              <hr />
            </div>
            <div className="homepage__search-search-filter-menu-child">
              <span>Sortir Berdasarkan Skill</span>
              <hr />
            </div>
            <div className="homepage__search-search-filter-menu-child">
              <span>Sortir Berdasarkan Lokasi</span>
              <hr />
            </div>
            <div className="homepage__search-search-filter-menu-child">
              <span>Sortir Berdasarkan Freelance</span>
              <hr />
            </div>
            <div className="homepage__search-search-filter-menu-child">
              <span>Sortir Berdasarkan Fulltime</span>
              <hr />
            </div>
          </div>
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
                  <button className="homepage__list-users-card-body-button">Lihat Profile</button>
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
  );
}

export default Home;
