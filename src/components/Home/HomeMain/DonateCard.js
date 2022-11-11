import React from "react";
import fire from "./../../../assets/img/fire.jpg";
import flood from "./../../../assets/img/flodding.jpg";
import edu from "./../../../assets/img/chid-edu.jpg";
import disab from "./../../../assets/img/disablity.jpg";
import winter from "./../../../assets/img/winter.jpg";
import sadaqah from "./../../../assets/img/sadaqah.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";

const DonateCard = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <section className="container mt-5">
      <h1
        className={`shadow-underline text-center fw-bold mb-5 mt-5 ${
          isDark && "text-white"
        }`}
      >
        Together Let’s Make a{" "}
        <span className="text-warning mt-5">Change .!</span>
      </h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
        <div className="col">
          <div className="card h-100 inner bg-info ">
            <img src={fire} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">Fire Victims</h5>
              <p
                className="card-text"
                style={{ overflow: "scroll", height: "150px" }}
              >
                As the fire occurred suddenly, people could not save anything.
                People lost their food grain, kitchen utensils and cloths.
                Children lost their textbook and all study materials.As the fire
                occurred suddenly, people could not save anything. People lost
                their food grain, kitchen utensils and cloths. Children lost
                their textbook and all study materials.
              </p>
            </div>
            <div className="card-footer text-center">
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title text-info"
                        id="exampleModalLabel"
                      >
                        {" "}
                        Get Touch !
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="form-control"
                            id="inputName"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text">৳</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Amount"
                            aria-label="Amount "
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        id="raffle-submit"
                        type="submit"
                        className="btn btn-outline-info"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h1> Thanks for your helping.!</h1>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                id=""
                className="button-two"
                data-bs-toggle="modal"
                href="#exampleModal"
              >
                Donate <i className="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>

          {/* // second   */}
        </div>
        <div className="col shadow-lg">
          <div className="card h-100 inner bg-info ">
            <img src={flood} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title fw-bold">Flood Relief</h5>
              <p
                className="card-text "
                style={{ overflow: "scroll", height: "150px" }}
              >
                Bangladesh, a land of natural beauty and resources, blessed with
                around 310 rivers. But recently, this blessing turned into
                bustle when the monsoon started in July. Heavy rainfall started
                throughout the country and flow of large-scale water leading to
                massive flooding situation in low lying areas of Northern,
                north-eastern and south-eastern districts. Now thousands of
                family is flood affected, lost their houses, livestock,
                struggling with contagious diseases waiting for support and
                relief.
              </p>
            </div>
            <div className="card-footer text-center">
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title text-info"
                        id="exampleModalLabel"
                      >
                        {" "}
                        Get Touch !
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="form-control"
                            id="inputName"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text">৳</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Amount"
                            aria-label="Amount "
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        id="raffle-submit"
                        type="submit"
                        className="btn btn-outline-info"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h1> Thanks for your helping.!</h1>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                id=""
                className="button-two"
                data-bs-toggle="modal"
                href="#exampleModal"
              >
                Donate <i className="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- third  --> */}
        <div className="col ">
          <div className="card h-100 inner bg-info">
            <img src={edu} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">Education</h5>
              <p
                className="card-text"
                style={{ overflow: "scroll", height: "150px" }}
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer text-center">
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title text-info"
                        id="exampleModalLabel"
                      >
                        {" "}
                        Get Touch !
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="form-control"
                            id="inputName"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text">৳</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Amount"
                            aria-label="Amount "
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        id="raffle-submit"
                        type="submit"
                        className="btn btn-outline-info"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h1> Thanks for your helping.!</h1>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                id=""
                className="button-two"
                data-bs-toggle="modal"
                href="#exampleModal"
              >
                Donate <i className="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card h-100 inner bg-info">
            <img src={disab} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">Disability</h5>
              <p
                className="card-text"
                style={{ overflow: "scroll", height: "150px" }}
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer text-center">
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title text-info"
                        id="exampleModalLabel"
                      >
                        {" "}
                        Get Touch !
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="form-control"
                            id="inputName"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text">৳</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Amount"
                            aria-label="Amount "
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        id="raffle-submit"
                        type="submit"
                        className="btn btn-outline-info"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h1> Thanks for your helping.!</h1>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                id=""
                className="button-two"
                data-bs-toggle="modal"
                href="#exampleModal"
              >
                Donate <i className="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- fourth  --> */}

        <div className="col ">
          <div className="card h-100 inner bg-info">
            <img src={winter} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">Winter Appearl</h5>
              <p
                className="card-text"
                style={{ overflow: "scroll", height: "150px" }}
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer text-center">
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title text-info"
                        id="exampleModalLabel"
                      >
                        {" "}
                        Get Touch !
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="form-control"
                            id="inputName"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text">৳</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Amount"
                            aria-label="Amount "
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        id="raffle-submit"
                        type="submit"
                        className="btn btn-outline-info"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h1> Thanks for your helping.!</h1>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                id=""
                className="button-two"
                data-bs-toggle="modal"
                href="#exampleModal"
              >
                Donate <i className="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="col ">
          <div className="card h-100 inner bg-info ">
            <img src={sadaqah} className="card-img-top h-50" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">Tree Plantation</h5>
              <p
                className="card-text"
                style={{ overflow: "scroll", height: "150px" }}
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer text-center">
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title text-info"
                        id="exampleModalLabel"
                      >
                        {" "}
                        Get Touch !
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="form-control"
                            id="inputName"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text">৳</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Amount"
                            aria-label="Amount "
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        id="raffle-submit"
                        type="submit"
                        className="btn btn-outline-info"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h1> Thanks for your helping.!</h1>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                id=""
                className="button-two"
                data-bs-toggle="modal"
                href="#exampleModal"
              >
                Donate <i className="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateCard;
