import React from "react";
import "./TotalFund.css";

const TotalFund = () => {
  return (
    <div>
      <section className="bg-dark">
        <div className="container py-5">
          <div className="main-timeline">
            <div className="timeline left">
              <div className="card ">
                <div className="card-body p-4 ">
                  <h2>
                    Collected Total Fund:
                    <span> ৳</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="timeline right">
              <div className="card ">
                <div className="card-body p-4">
                  <h3>
                    Emergency Total Fund:<span>৳</span>
                  </h3>
                  <div className="bg-info p-3 rounded-2">
                    <li>
                      FireVictims Fund: <span>৳</span>
                    </li>
                    <li>
                      FloodRelief Fund: <span>৳</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline left">
              <div className="card ">
                <div className="card-body p-4">
                  <h3>
                    Sadaqah Total Fund:<span>৳</span>
                  </h3>
                  <div className="bg-info p-3 rounded-2">
                    <li>
                      Build A Masjid Fund: <span>৳</span>
                    </li>
                    <li>
                      Build A WaterWell Fund: <span>৳</span>
                    </li>

                    <li>
                      Ramadan Iftar Fund: <span>৳</span>
                    </li>
                    <li>
                      Zakat Fund: <span>৳</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline right">
              <div className="card ">
                <div className="card-body p-4">
                  <h3>
                    Organizational Total Fund:<span>৳</span>
                  </h3>
                  <div className="bg-info p-3 rounded-2">
                    <li>
                      Orphans Fund: <span>৳</span>
                    </li>
                    <li>
                      Old Age Home Fund:<span>৳</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline left">
              <div className="card ">
                <div className="card-body p-4">
                  <h3>
                    Health Total Fund:<span>৳</span>
                  </h3>
                  <div className="bg-info p-3 rounded-2">
                    <li>
                      Eyesight Restoration Fund: <span>৳</span>
                    </li>
                    <li>
                      Disability Fund: <span>৳</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline right">
              <div className="card ">
                <div className="card-body p-4">
                  <h3>
                    General Total Fund:<span>৳</span>
                  </h3>
                  <div className="bg-info p-3 rounded-2">
                    <li>
                      Educational Fund: <span>৳</span>
                    </li>
                    <li>
                      Tree Plantation Fund: <span>৳</span>
                    </li>

                    <li>
                      Winter Appearl Fund: <span>৳</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline left">
              <div className="card ">
                <div className="card-body p-4">
                  <h3>
                    Special Total Fund:<span>৳</span>
                  </h3>
                  <div className="bg-info p-3">
                    <li>
                      1000 Takai Rickshaw: <span>৳</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TotalFund;
