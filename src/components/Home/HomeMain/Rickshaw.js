import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";
import ricksaw from "./../../../assets/img/sabolombi.jpg";

const Rickshaw = () => {
  const { currentUser } = useContext(AuthContext);
  const [defaultAmount, setDefaultAmount] = useState(null);
  // const [fundData, setFundData] = useState({});
  // const handleInputChange = (e) => {
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   let newFundData = { ...fundData };
  //   newFundData[field] = value;
  //   setFundData(newFundData);
  //   console.log(fundData);
  // };
  // const handleFormSubmit = () => {
  //   const x = {
  //     name: currentUser?.displayName,
  //     email: currentUser?.email,
  //     userUid: currentUser?.uid,
  //     userPhoto: currentUser?.photoURL,
  //   };

  //   console.log("newfund", fundData);
  //   let newFundData = { ...fundData };
  //   if (!fundData?.amount) {
  //     newFundData.amount = defaultAmount;
  //     setFundData(newFundData);
  //   }
  //   console.log("newfund", fundData);
  // };
  return (
    <div>
      <div></div>
      <div className="card bg-info  ">
        <div className="card-body">
          <h1 className=" shadow-underline card-title  font-bold text-center text-white">
            1000 Takai <span className="text-dark">Rickshaw</span>
          </h1>
          <p className="card-text text-center ">
            With supporting text below as a natural lead-in to additional
            content.loremp Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Nisi ex, repudiandae sunt impedit rerum, esse, dolor magni
            cumque sequi officiis delectus harum. Maiores laboriosam vel nulla?
            Assumenda labore sed iusto.if
          </p>
        </div>
      </div>
      <div className="card mb-3 container bg-warning donation-style-two ">
        <div className="row g-0">
          <div className="col-md-6 ">
            <img src={ricksaw} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h1>Make a Donation Now!</h1>
              <form>
                <div className="donation-form ">
                  <div className="fixed-amount mb-2 d-flex justify-content-between">
                    <button onClick={() => setDefaultAmount(100)}>
                      <label className="amount-button">৳100</label>
                    </button>
                    <button onClick={() => setDefaultAmount(200)}>
                      <label className="amount-button">৳200</label>
                    </button>
                    <button onClick={() => setDefaultAmount(300)}>
                      <label className="amount-button select-amount-button">
                        ৳300
                      </label>
                    </button>
                    <button onClick={() => setDefaultAmount(400)}>
                      <label className="amount-button">৳400</label>
                    </button>
                    <button onClick={() => setDefaultAmount(500)}>
                      <label className="amount-button">৳500</label>
                    </button>
                  </div>
                  <form action="">
                    <input
                      type="text"
                      name="amount"
                      placeholder="Enter other amount"
                      className="w-100 other-amount"
                      defaultValue={defaultAmount}
                      required
                    />
                    <input
                      defaultValue={currentUser?.displayName}
                      type="text"
                      name="name"
                      placeholder="your name"
                      className="w-100"
                      required
                    />
                    <input
                      defaultValue={currentUser?.email}
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-100"
                      required
                    />

                    <p className="donation-style-two">
                      <Link to="/fund/rickshaw" className="button mt-3">
                        Donate Now
                      </Link>
                    </p>
                  </form>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rickshaw;
