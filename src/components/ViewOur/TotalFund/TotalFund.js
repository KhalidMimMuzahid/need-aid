import React, { useEffect, useState } from "react";
import "./TotalFund.css";

const TotalFund = () => {
  const [allFunds, setAllFunds] = useState({});
  const {
    total,
    emergencyFund,
    generalFund,
    healthFund,
    organizationalFund,
    sadaqahFund,
    specialFund,
  } = allFunds;
  useEffect(() => {
    fetch("https://need-aid.vercel.app/allfunds")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllFunds(data);
      });
  }, []);
  return (
    <div>
      <section className="bg-dark">
        <div className="container py-3">
          <div className="main-timeline">
            <div className="timeline left">
              <div className="card ">
                <div className="card-body p-1 ">
                  <h5>
                    Collected Total Fund:
                    <span> {total}৳</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="timeline right">
              <div className="card ">
                <div className="card-body p-1">
                  <h5>
                    Emergency Total Fund:<span> {emergencyFund?.total}৳</span>
                  </h5>
                  <div className="bg-info p-1 rounded-2">
                    <li>
                      FireVictims Fund:{" "}
                      <span>{emergencyFund?.all?.fireVictims}৳</span>
                    </li>
                    <li>
                      FloodRelief Fund:{" "}
                      <span>{emergencyFund?.all?.floodRelief}৳</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline left">
              <div className="card ">
                <div className="card-body p-1">
                  <h5>
                    Sadaqah Total Fund:<span>{sadaqahFund?.total}৳</span>
                  </h5>
                  <div className="bg-info p-1 rounded-2">
                    <li>
                      Build A Masjid Fund:{" "}
                      <span>{sadaqahFund?.all?.buildAMasjid}৳</span>
                    </li>
                    <li>
                      Build A WaterWell Fund:{" "}
                      <span>{sadaqahFund?.all?.buildAWaterWell}৳</span>
                    </li>

                    <li>
                      Ramadan Iftar Fund:{" "}
                      <span>{sadaqahFund?.all?.ramadanIfter}৳</span>
                    </li>
                    <li>
                      Zakat Fund: <span>{sadaqahFund?.all?.zakat}৳</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline right">
              <div className="card ">
                <div className="card-body p-1">
                  <h5>
                    Organizational Total Fund:
                    <span>{organizationalFund?.total}৳</span>
                  </h5>
                  <div className="bg-info p-1 rounded-2">
                    <li>
                      Orphans Fund:{" "}
                      <span>{organizationalFund?.all?.orphans}৳</span>
                    </li>
                    <li>
                      Old Age Home Fund:
                      <span>{organizationalFund?.all?.oldAgeHome}৳</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline left">
              <div className="card ">
                <div className="card-body p-1">
                  <h5>
                    Health Total Fund:{healthFund?.total}
                    <span>৳</span>
                  </h5>
                  <div className="bg-info p-1 rounded-2">
                    <li>
                      Eyesight Restoration Fund:
                      {healthFund?.all?.eyesightRestoration} <span>৳</span>
                    </li>
                    <li>
                      Disability Fund:{healthFund?.all?.disablity}{" "}
                      <span>৳</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline right">
              <div className="card ">
                <div className="card-body p-1">
                  <h5>
                    General Total Fund:{generalFund?.total}
                    <span>৳</span>
                  </h5>
                  <div className="bg-info p-1 rounded-2">
                    <li>
                      Educational Fund:{generalFund?.all?.education}{" "}
                      <span>৳</span>
                    </li>
                    <li>
                      Tree Plantation Fund: {generalFund?.all?.treePlantation}
                      <span>৳</span>
                    </li>

                    <li>
                      Winter Appearl Fund:{generalFund?.all?.winterAppearl}{" "}
                      <span>৳</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline left">
              <div className="card ">
                <div className="card-body p-1">
                  <h5>
                    Special Total Fund:{specialFund?.total}
                    <span>৳</span>
                  </h5>
                  <div className="bg-info p-1">
                    <li>
                      1000 Takai Rickshaw:{specialFund?.all?.rikshawFor1000}
                      <span>৳</span>
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
