import React from "react";
import first from "../../../assets/img/donation10.jpg";
import second from "../../../assets/img/donation11.jpg";
import third from "../../../assets/img/donation7.jpg";

const Gallary = () => {
  return (
    <div className=" container mt-5 border border-dark">
      <h1 className=" shadow-underline2 mt-3 mb-4 text-center">
        Our Photo <span className="text-warning">Gallery</span>
      </h1>
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={first}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src={third}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src={third}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src={first}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src={second}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src={first}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
