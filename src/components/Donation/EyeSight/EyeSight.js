import React from "react";

const EyeSight = () => {
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
          // onclick="updateFundToDB('healthFund','disablity')"
        >
          Submit
        </button>
        {/* <!-- <button id="raffle-submit" type="submit" className="btn btn-outline-info"     data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Submit</button> --> */}
      </form>
    </div>
  );
};

export default EyeSight;
