import React, { useContext, useState } from "react";
import {
  FaBell,
  FaBellSlash,
  FaCross,
  FaLightbulb,
  FaMailBulk,
  FaMoon,
  FaPhoneAlt,
  FaRegBell,
  FaRegBellSlash,
  FaSignOutAlt,
  FaSun,
} from "react-icons/fa";
import needAid from "../../assets/img/Need Aid.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import { MoonIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import EachNotification from "../Notification/EachNotification";
const Header = () => {
  const { currentUser, logOut, isUserAdmin, isDark, setIsDark } =
    useContext(AuthContext);
  console.log("current user", currentUser);
  const [notificationIsOpen, setNotificationIsOpen] = useState(false);
  const [notification, setNotification] = useState([]);
  const [countNotifications, setCountNotifications] = useState(0);
  // console.log("userAdmin,", isUserAdmin);
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

  if (!isUserAdmin) {
    const handleNotification = async () => {
      // console.log("hitted");
      const totalNotification = notification.length;
      // console.log("totalNotification", totalNotification);
      // console.log("useruid", currentUser.uid);
      await fetch("https://need-aid.vercel.app/checknotification", {
        headers: {
          "Content-Type": "application/json",
          totalNotification: totalNotification,
          userUid: currentUser?.uid,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.newNotification) {
            setNotification(data.currentNotificetion);

            setCountNotifications(countNotifications + data.newNotification);
            setTimeout(() => handleNotification(), 10000);
          } else {
            setTimeout(() => handleNotification(), 10000);
          }
        });
    };
    handleNotification();
  }

  // <button onClick={handleNotification}>xxx</button>
  const handleClickNptification = () => {
    setCountNotifications(0);
    setNotificationIsOpen(!notificationIsOpen);
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
                  <div className="d-flex">
                    {countNotifications ? (
                      <div
                        className="notification-with-count d-flex"
                        onClick={handleClickNptification}
                      >
                        <FaBell className="fs-2"></FaBell>
                        <h6
                          className="bg-warning p-1 rounded-circle d-flex"
                          style={{
                            width: "20px",
                            height: "20px",
                            fontSize: "0.9rem",
                            position: "relative",
                            left: "-15px",
                            top: "0px",
                          }}
                        >
                          <span className="justify-content-center align-items-center">
                            {countNotifications}
                          </span>
                        </h6>
                      </div>
                    ) : (
                      <FaBellSlash
                        onClick={handleClickNptification}
                        className="mt-2 fs-2 me-2"
                      ></FaBellSlash>
                    )}
                  </div>

                  <Link to="/profile" className="d-flex me-2">
                    <img
                      placeholder="profile"
                      alt={currentUser.displayName}
                      title={currentUser.displayName}
                      className="userProfilePhoto "
                      src={currentUser.photoURL}
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
              <img
                src={needAid}
                className=""
                style={{ height: "50px", width: "auto" }}
                alt="Need-Aid"
              />
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
                {isUserAdmin || (
                  <li className="nav-item">
                    <Link className="nav-link fw-bold select-bar " to="/about">
                      About us
                    </Link>
                  </li>
                )}

                {isUserAdmin || (
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
                            <Link
                              className="dropdown-item"
                              to="/fund/water-well"
                            >
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
                            <Link
                              className="dropdown-item"
                              to="/fund/disablity"
                            >
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
                            <Link
                              className="dropdown-item"
                              to="/fund/education"
                            >
                              Education
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/fund/tree-plant"
                            >
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
                )}

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
                      <Link
                        className="dropdown-item"
                        to="/special/raffleresult"
                      >
                        Raflle Draw Result
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#"></Link>
                    </li>
                    {isUserAdmin || (
                      <li>
                        <Link className="dropdown-item" to="/populer-work">
                          Popular Work
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link className="dropdown-item" to="/gallery">
                        Photo Gallery
                      </Link>
                    </li>
                  </ul>
                </li>
                {isUserAdmin || (
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
                          Raflle
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          className="dropdown-item"
                          to="/special/raffleresult"
                        >
                          Raflle Draw Result
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/special/giftcard/${currentUser?.uid}`}
                        >
                          Gift Card
                        </Link>
                      </li>
                      {/* <li>
      <Link className="dropdown-item" to="/special/tshirtadopt">
        T-shirt Adopt
      </Link>
    </li> */}
                    </ul>
                  </li>
                )}
                {isUserAdmin || (
                  <>
                    <li className="nav-item fw-bolder">
                      <Link className="nav-link select-bar" to="/contact">
                        Contact us
                      </Link>
                    </li>
                    <li className="nav-item fw-bolder">
                      <Link className="nav-link select-bar" to="/sponsership">
                        get sponsership
                      </Link>
                    </li>
                  </>
                )}
              </ul>

              {isUserAdmin || (
                <p className="donation-style-two">
                  <Link to="/fund/rickshaw" className="button mt-3 ms-1">
                    1000 Takai{" "}
                    <img
                      src="/img/cycle-rickshaw.png"
                      className="rickshaw-img"
                      alt=""
                    />
                  </Link>
                </p>
              )}
              {isUserAdmin || (
                <p className="donation-style-two">
                  <Link to="/raffle" className="button mt-3 ms-1">
                    Raffle Draw <i className="fa-solid fa-trophy"></i>
                  </Link>
                </p>
              )}
              {isUserAdmin && (
                <p className="donation-style-two">
                  <Link to="/manageraffle" className="button mt-3 ms-1">
                    Manage Raffle
                  </Link>
                </p>
              )}
              {isUserAdmin && (
                <p className="donation-style-two">
                  <Link to="/manageadvertisement" className="button mt-3 ms-1">
                    Manage Adv.
                  </Link>
                </p>
              )}
              <p className="donation-style-two">
                {isDark ? (
                  <FaMoon
                    className="fs-2 text-dark ms-3 mt-3"
                    onClick={() => setIsDark(!isDark)}
                  ></FaMoon>
                ) : (
                  <FaSun
                    className="fs-2 text-white ms-3 mt-3"
                    onClick={() => setIsDark(!isDark)}
                  ></FaSun>
                )}
              </p>
            </div>
          </div>
        </nav>
      </section>
      {/* notification Start  */}

      {notificationIsOpen && (
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.861)",
            height: "100vh",
            width: "30%",
            position: "absolute",
            right: "0px",
            color: "white",
          }}
        >
          <div className="d-flex justify-content-between border border-bottom-6 border-top-0 border-left-0 border-right-0 p-2">
            <h4>Total ({notification.length})</h4>
            <div className="d-flex justify-content-between">
              <h4 className="p2-2">want to close ? </h4>{" "}
              <button onClick={handleClickNptification} className="px-2">
                X
              </button>
            </div>
          </div>
          <ul>
            {notification.map((eachNotification) => (
              <EachNotification
                key={notification.indexOf(eachNotification)}
                eachNotification={eachNotification}
              ></EachNotification>
            ))}
          </ul>
        </div>
      )}

      {/* notification end  */}
    </div>
  );
};

export default Header;
// style="transform: translate(-172px, 48px);"
