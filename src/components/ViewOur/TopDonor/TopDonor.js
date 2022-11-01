import React from "react";
import "./TopDonor.css";

const TopDonor = () => {
  return (
    <div>
      <div className="container my-4 bg py-2">
        <div className="row">
          <div className="col-md-6 offset-md-3 bg-info py-3  rounded-2">
            <h1 className="text-center mb-3"> Top 5 Donar List</h1>
            <ul className="timeline-3">
              <li className="bg-white rounded-2">
                <h4> 1. Rank</h4>

                <h3> Name 1 </h3>
              </li>
              <li className="bg-white rounded-2 py-0">
                <h4> 2. Rank</h4>

                <h3> Name 2</h3>
              </li>
              <li className="bg-white rounded-2">
                <h4> 3. Rank</h4>

                <h3> Name 3</h3>
              </li>
              <li className="bg-white rounded-2">
                <h4> 4. Rank</h4>

                <h3> Name 4</h3>
              </li>
              <li className="bg-white rounded-2">
                <h4> 5. Rank</h4>

                <h3> Name 5</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDonor;
