import React, { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import disability from "./../../../assets/img/disablity.jpg";

const Disability = () => {
  const { currentUser } = useContext(AuthContext);
  const handleFormCOntrol = (e) => {
    e.preventDefault();
    const userUid = currentUser?.uid;
    const userPhoto = currentUser?.photoURL;
    console.log("clicked");
    const fund = e.target;
    const name = fund.inputName.value;
    const email = fund.inputEmail.value;
    const amount = fund.inputAmount.value;
    const fundCategory = "healthFund";
    const fundType = "disablity";
    const donor = { userUid, userPhoto, name, email, amount };
    const fundData = {
      fundCategory,
      fundType,
      amount,
      donor,
    };
    if (name && email && amount) {
      fetch("https://need-aid.vercel.app/fundsupdate", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fundData),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } else {
      console.log("error");
    }
  };
  return (
    <body>
      <section>
        <div className="card m-3 w-75 mx-auto">
          <img src={disability} className="  img-fluid img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Support for Disablity People</h5>
            <p className="card-text">Help the people be greatfull</p>
          </div>

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
                        defaultValue={currentUser?.displayName}
                        type="text"
                        placeholder="Full Name"
                        className="form-control"
                        name="inputName"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        defaultValue={currentUser?.email}
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
            className="button"
            data-bs-toggle="modal"
            href="#exampleModal"
          >
            Donate Now
          </button>
        </div>
      </section>
      <script src="../js/utilities.js"></script>
      <script src="../js/donation.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous"
      ></script>
    </body>
  );
};

export default Disability;
