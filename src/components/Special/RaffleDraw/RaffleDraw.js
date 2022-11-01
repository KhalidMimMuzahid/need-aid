import React from "react";
import img from "../../../assets/img/rafell.jpg";

const RaffleDraw = () => {
  return (
    <div>
      <section>
        <div className="card m-3 w-75 mx-auto">
          <img src={img} className=" img-fluid h-4" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Get a Lottery Ticket</h5>
            <p className="card-text">
              By getting this lotteray, you cen be a millioner
            </p>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-info" id="exampleModalLabel">
                    {" "}
                    Get Ticket ?
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
                    <div className="mb-3">
                      <input
                        type="address"
                        placeholder="Address"
                        className="form-control"
                        id="inputAdress"
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
            tabindex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel2">
                    Note down Your Information
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h5>
                    Full Name: <span id="buyer-name"></span>
                  </h5>
                  <h5>
                    {" "}
                    Your Mail: <span id="buyer-mail"></span>
                  </h5>
                  <h5>
                    Your Address: <span id="buyer-address"></span>
                  </h5>
                  <h5>
                    Ticket No: <span id="buyer-ticket-no"></span>
                  </h5>
                  <h5>
                    Ticket ID: <span id="buyer-ticket-id"></span>
                  </h5>
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

          <div
            className="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          ></div>

          <button
            id="buy-lottery"
            className="button"
            data-bs-toggle="modal"
            href="#exampleModal"
          >
            Buy One
          </button>
        </div>
      </section>
    </div>
  );
};

export default RaffleDraw;
