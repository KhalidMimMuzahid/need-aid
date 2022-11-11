import React, { useContext, useState } from "react";
import first from "../../../assets/img/donation10.jpg";
import second from "../../../assets/img/donation11.jpg";
import third from "../../../assets/img/donation7.jpg";
import { AuthContext } from "../../../context/UserContext";
const Gallary = () => {
  const { isDark } = useContext(AuthContext);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPhotoNumber, setSelectedPhotoNumber] = useState("");
  const [isZoom, setIsZoom] = useState(false);
  const handlePhotoSelected = (number) => {
    console.log("hitted ", number);
    setSelectedPhotoNumber(number);
    setIsSelected(!isSelected);
  };
  return (
    <div className=" container mt-5 border border-dark">
      <h1
        className={`shadow-underline2 mt-3 mb-4 text-center ${
          isDark && "text-white"
        }`}
      >
        Our Photo <span className="text-warning">Gallery</span>
      </h1>
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0  ">
          <img
            onClick={() => handlePhotoSelected("1")}
            src={first}
            className={` shadow-1-strong rounded mb-4 ${
              isSelected && selectedPhotoNumber === "1" ? "photo-zoom" : "w-100"
            } `}
            alt="Boat on Calm Water"
          />

          <img
            onClick={() => handlePhotoSelected("2")}
            src={third}
            className={` shadow-1-strong rounded mb-4 ${
              isSelected && selectedPhotoNumber === "2" ? "photo-zoom" : "w-100"
            } `}
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0 ">
          <img
            onClick={() => handlePhotoSelected("3")}
            src={third}
            className={` shadow-1-strong rounded mb-4 ${
              isSelected && selectedPhotoNumber === "3" ? "photo-zoom" : "w-100"
            } `}
            alt="Mountains in the Clouds"
          />

          <img
            onClick={() => handlePhotoSelected("4")}
            src={first}
            className={` shadow-1-strong rounded mb-4 ${
              isSelected && selectedPhotoNumber === "4" ? "photo-zoom" : "w-100"
            } `}
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            onClick={() => handlePhotoSelected("5")}
            src={second}
            className={` shadow-1-strong rounded mb-4 ${
              isSelected && selectedPhotoNumber === "5" ? "photo-zoom" : "w-100"
            } `}
            alt="Waves at Sea"
          />

          <img
            onClick={() => handlePhotoSelected("6")}
            src={first}
            className={` shadow-1-strong rounded mb-4 ${
              isSelected && selectedPhotoNumber === "6" ? "photo-zoom" : "w-100"
            } `}
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
