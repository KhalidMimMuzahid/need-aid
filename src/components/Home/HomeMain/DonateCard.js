import React from "react";
import fire from "./../../../assets/img/fire.jpg";
import flood from "./../../../assets/img/flodding.jpg";
import edu from "./../../../assets/img/chid-edu.jpg";
import disab from "./../../../assets/img/disablity.jpg";
import winter from "./../../../assets/img/winter.jpg";
import sadaqah from "./../../../assets/img/sadaqah.jpg";

const DonateCard = () => {
  return (
    <section class="container mt-5">
      <h1 class=" shadow-underline text-center fw-bold mb-5 mt-5 ">
        Together Let’s Make a <span class="text-warning mt-5">Change .!</span>
      </h1>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
        <div class="col">
          <div class="card h-100 inner bg-info ">
            <img src={fire} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title fw-bold">Fire Victims</h5>
              <p
                class="card-text"
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
            <div class="card-footer text-center">
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title text-info" id="exampleModalLabel">
                        {" "}
                        Get Touch !
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            class="form-control"
                            id="inputName"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            class="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="input-group mb-3">
                          <span class="input-group-text">৳</span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Amount"
                            aria-label="Amount "
                          />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        id="raffle-submit"
                        type="submit"
                        class="btn btn-outline-info"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabindex="-1"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h1> Thanks for your helping.!</h1>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
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
                class="button-two"
                data-bs-toggle="modal"
                href="#exampleModal"
              >
                Donate <i class="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>

          {/* // second   */}
        </div>
        <div class="col shadow-lg">
          <div class="card h-100 inner bg-info ">
            <img src={flood} class="card-img-top" alt="..." />
            <div class="card-body ">
              <h5 class="card-title fw-bold">Flood Relief</h5>
              <p
                class="card-text "
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
            <div class="card-footer text-center">
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title text-info" id="exampleModalLabel">
                        {" "}
                        Get Touch !
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            class="form-control"
                            id="inputName"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            class="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="input-group mb-3">
                          <span class="input-group-text">৳</span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Amount"
                            aria-label="Amount "
                          />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        id="raffle-submit"
                        type="submit"
                        class="btn btn-outline-info"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabindex="-1"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h1> Thanks for your helping.!</h1>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
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
                class="button-two"
                data-bs-toggle="modal"
                href="#exampleModal"
              >
                Donate <i class="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- third  --> */}
        <div class="col ">
          <div class="card h-100 inner bg-info">
            <img src={edu} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title fw-bold">Education</h5>
              <p
                class="card-text"
                style={{ overflow: "scroll", height: "150px" }}
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer text-center">
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title text-info" id="exampleModalLabel">
                        {" "}
                        Get Touch !
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            class="form-control"
                            id="inputName"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            class="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="input-group mb-3">
                          <span class="input-group-text">৳</span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Amount"
                            aria-label="Amount "
                          />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        id="raffle-submit"
                        type="submit"
                        class="btn btn-outline-info"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabindex="-1"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h1> Thanks for your helping.!</h1>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
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
                class="button-two"
                data-bs-toggle="modal"
                href="#exampleModal"
              >
                Donate <i class="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col ">
          <div class="card h-100 inner bg-info">
            <img src={disab} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title fw-bold">Disability</h5>
              <p
                class="card-text"
                style={{ overflow: "scroll", height: "150px" }}
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer text-center">
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title text-info" id="exampleModalLabel">
                        {" "}
                        Get Touch !
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            class="form-control"
                            id="inputName"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            class="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="input-group mb-3">
                          <span class="input-group-text">৳</span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Amount"
                            aria-label="Amount "
                          />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        id="raffle-submit"
                        type="submit"
                        class="btn btn-outline-info"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabindex="-1"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h1> Thanks for your helping.!</h1>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
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
                class="button-two"
                data-bs-toggle="modal"
                href="#exampleModal"
              >
                Donate <i class="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- fourth  --> */}

        <div class="col ">
          <div class="card h-100 inner bg-info">
            <img src={winter} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title fw-bold">Winter Appearl</h5>
              <p
                class="card-text"
                style={{ overflow: "scroll", height: "150px" }}
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer text-center">
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title text-info" id="exampleModalLabel">
                        {" "}
                        Get Touch !
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            class="form-control"
                            id="inputName"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            class="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="input-group mb-3">
                          <span class="input-group-text">৳</span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Amount"
                            aria-label="Amount "
                          />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        id="raffle-submit"
                        type="submit"
                        class="btn btn-outline-info"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabindex="-1"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h1> Thanks for your helping.!</h1>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
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
                class="button-two"
                data-bs-toggle="modal"
                href="#exampleModal"
              >
                Donate <i class="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="col ">
          <div class="card h-100 inner bg-secondary ">
            <img src={sadaqah} class="card-img-top h-50" alt="..." />
            <div class="card-body">
              <h5 class="card-title fw-bold">Tree Plantation</h5>
              <p
                class="card-text"
                style={{ overflow: "scroll", height: "150px" }}
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer text-center">
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title text-info" id="exampleModalLabel">
                        {" "}
                        Get Touch !
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            class="form-control"
                            id="inputName"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            class="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="input-group mb-3">
                          <span class="input-group-text">৳</span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Amount"
                            aria-label="Amount "
                          />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        id="raffle-submit"
                        type="submit"
                        class="btn btn-outline-info"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabindex="-1"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h1> Thanks for your helping.!</h1>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
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
                class="button-two"
                data-bs-toggle="modal"
                href="#exampleModal"
              >
                Donate <i class="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateCard;
