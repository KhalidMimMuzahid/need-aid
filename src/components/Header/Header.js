import React, { useContext } from "react";
import { FaMailBulk, FaPhoneAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Header = () => {
  const { currentUser, logOut } = useContext(AuthContext);
  console.log(currentUser);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="sticky-top header-sticky ">
      <section className="py-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col flex align-items-center h-100 mt-2">
              <div className="short_contact_list flex-row">
                <div className="contact">
                  <Link to="#" className="contact-phone me-2">
                    <FaPhoneAlt></FaPhoneAlt>
                    {""} +880 1234 567 89
                  </Link>
                  <Link to="#" className="contact-mail">
                    <FaMailBulk></FaMailBulk>
                    {""} contact@needaid.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="col text-end">
              {currentUser?.uid ? (
                <div className="d-flex justify-content-end">
                  <Link to="/profile" className="d-flex me-2">
                    <img
                      className="userProfilePhoto "
                      src={currentUser.photoURL}
                      alt=""
                    />
                  </Link>
                  <button onClick={handleLogOut} className="button">
                    Sign Out <FaSignOutAlt />{" "}
                  </button>
                </div>
              ) : (
                <p className="mb-0">
                  <Link to="/signin" className="button">
                    Join Us <i className="fa-solid fa-heart"></i>
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <nav className="navbar navbar-expand-lg bg-warning text-white p-1">
          <div className="container">
            <Link className="navbar-brand fs-1 " to="/">
              NEED AID
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* <!-- <li className="nav-item">
                  <Link className="nav-link  fw-bolder select-bar" aria-current="page" to="#"
                    >Home</a
                  >
                </li> --> */}
                <li className="nav-item">
                  <Link className="nav-link fw-bold select-bar " to="#">
                    About us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle fw-bolder select-bar"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Donate Now
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item dropdown-toggle" to="#">
                        Emergency Fund
                      </Link>
                      <ul className="dropdown-menu submenu">
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/fund/firevictims"
                          >
                            Fire Victims
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/fund/flood">
                            Flood Relief
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dropdown-item dropdown-toggle " to="#">
                        Sadaqah Fund
                      </Link>
                      <ul className="dropdown-menu submenu">
                        <li>
                          <Link className="dropdown-item" to="/fund/mosjid">
                            Build a Mosjid
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/fund/water-well">
                            Build Water Well
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/fund/iftar">
                            Ramadan Iftar
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/fund/zakat">
                            {" "}
                            Give Zakat
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dropdown-item dropdown-toggle " to="#">
                        {" "}
                        Organizational
                      </Link>
                      <ul className="dropdown-menu submenu">
                        <li>
                          <Link className="dropdown-item" to="/fund/orphan">
                            Orphans Fund
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/fund/oldage-home"
                          >
                            Oldage Home
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dropdown-item dropdown-toggle " to="#">
                        Health Fund
                      </Link>
                      <ul className="dropdown-menu submenu">
                        <li>
                          <Link className="dropdown-item" to="/fund/eyesight">
                            Eyesight Restoration
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/fund/disablity">
                            Disability Fund
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dropdown-item dropdown-toggle " to="#">
                        General Fund
                      </Link>
                      <ul className="dropdown-menu submenu">
                        <li>
                          <Link className="dropdown-item" to="/fund/education">
                            Education
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/fund/tree-plant">
                            Tree Plantation
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/fund/winter">
                            Winter Appearl
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dropdown-item dropdown-toggle " to="#">
                        Special Fund
                      </Link>
                      <ul className="dropdown-menu submenu">
                        <li>
                          <Link
                            to="/rickshaw"
                            className="dropdown-item"
                            to="/fund/rickshaw"
                          >
                            1000 Takai Rikshaw
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle fw-bolder select-bar"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    View Our
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        id="total-fund"
                        className="dropdown-item"
                        to="/viewour/total-fund"
                      >
                        Total Fund
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/viewour/top-donor">
                        Top Donor
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#"></Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/viewour/populer-work"
                      >
                        Popular Work
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle fw-bolder select-bar"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Special
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/special/raffle">
                        Raflle Draw
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/special/giftcard">
                        Gift Card
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/special/tshirtadopt">
                        T-shirt Adopt
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item fw-bolder">
                  <Link className="nav-link select-bar" to="#">
                    Contact us
                  </Link>
                </li>
              </ul>

              <p className="donation-style-two">
                <Link to="rickshaw" className="button mt-3 ms-1">
                  1000 Takai{" "}
                  <img
                    src="/img/cycle-rickshaw.png"
                    className="rickshaw-img"
                    alt=""
                  />
                </Link>
              </p>
              <p className="donation-style-two">
                <Link to="/raffle" className="button mt-3 ms-1">
                  Raffle Draw <i className="fa-solid fa-trophy"></i>
                </Link>
              </p>
              <p className="donation-style-two">
                <Link to="" className="button mt-3 ms-1">
                  Zakat ৳<i className="fa-solid fa-doller"></i>
                </Link>
              </p>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
