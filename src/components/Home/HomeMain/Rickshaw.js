import React from "react";
import ricksaw from "./../../../assets/img/sabolombi.jpg";

const Rickshaw = () => {
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
                  <div className="fixed-amount mb-2 ">
                    <button>
                      <label className="amount-button">৳100</label>
                    </button>
                    <button>
                      <label className="amount-button">৳200</label>
                    </button>
                    <button>
                      <label className="amount-button select-amount-button">
                        ৳300
                      </label>
                    </button>
                    <button>
                      <label className="amount-button">৳400</label>
                    </button>
                    <button>
                      <label className="amount-button">৳500</label>
                    </button>
                  </div>
                  <input
                    type="number"
                    name="Amount"
                    placeholder="Enter other amount"
                    className="w-100 other-amount"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-100"
                  />

                  <p className="donation-style-two">
                    <a href="" className="button mt-3">
                      Donate Now <i className="fa-solid fa-heart"></i>
                    </a>
                  </p>
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
