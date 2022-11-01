import React from "react";
import img from "./../../../assets/img/orphanes.jpg";

const Orphans = () => {
  const handleFormCOntrol = (e) => {
    e.preventDefault();
    console.log("clicked");
    const fund = e.target;
    const name = fund.inputName.value;
    const email = fund.inputEmail.value;
    const amount = fund.inputAmount.value;
    console.log(name, email, amount);
  };
  return (
    <div>
      <section>
        <div className="card m-3 w-75 mx-auto">
          <img src={img} className="  img-fluid img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Support for Orphans</h5>
            <p className="card-text">Help the people be greatfull</p>
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
                  <form onSubmit={handleFormCOntrol}>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="form-control"
                        name="inputName"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        placeholder="Enter Email"
                        className="form-control"
                        name="inputEmail"
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
                        name="inputAmount"
                        aria-label="Amount "
                      />
                    </div>
                    <button
                      id="raffle-submit"
                      type="submit"
                      className="btn btn-outline-info"
                      data-bs-target="#exampleModalToggle2"
                      data-bs-toggle="modal"
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <div className="modal-footer"></div>
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
            className="button"
            data-bs-toggle="modal"
            href="#exampleModal"
          >
            Donate Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Orphans;
