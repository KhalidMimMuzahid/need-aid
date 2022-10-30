import React from "react";
import ricksaw from "./../../../assets/img/sabolombi.jpg";

const Rickshaw = () => {
  return (
    <div>
      <div></div>
      <div class="card bg-info  ">
        <div class="card-body">
          <h1 class=" shadow-underline card-title  font-bold text-center text-white">
            1000 Takai <span className="text-dark">Rickshaw</span>
          </h1>
          <p class="card-text text-center ">
            With supporting text below as a natural lead-in to additional
            content.loremp Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Nisi ex, repudiandae sunt impedit rerum, esse, dolor magni
            cumque sequi officiis delectus harum. Maiores laboriosam vel nulla?
            Assumenda labore sed iusto.if
          </p>
        </div>
      </div>
      <div class="card mb-3 container bg-warning donation-style-two ">
        <div class="row g-0">
          <div class="col-md-6 ">
            <img src={ricksaw} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h1>Make a Donation Now!</h1>
              <form>
                <div class="donation-form ">
                  <div class="fixed-amount mb-2 ">
                    <button>
                      <label class="amount-button">৳100</label>
                    </button>
                    <button>
                      <label class="amount-button">৳200</label>
                    </button>
                    <button>
                      <label class="amount-button select-amount-button">
                        ৳300
                      </label>
                    </button>
                    <button>
                      <label class="amount-button">৳400</label>
                    </button>
                    <button>
                      <label class="amount-button">৳500</label>
                    </button>
                  </div>
                  <input
                    type="number"
                    name="Amount"
                    placeholder="Enter other amount"
                    class="w-100 other-amount"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    class="w-100"
                  />

                  <p className="donation-style-two">
                    <a href="" class="button mt-3">
                      Donate Now <i class="fa-solid fa-heart"></i>
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
