import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import first from "./../../assets/img/meril.jpg";
import first2 from "./../../assets/img/Sepnil.jpg";
import EachSponsorship from "./EachSponsorship";

const Advertisement = () => {
  const [currentSponsorship, setCurrentSponsorship] = useState([]);
  useEffect(() => {
    fetch("https://need-aid.vercel.app/getselectedAdvertisement")
      .then((res) => res.json())
      .then((data) => {
        setCurrentSponsorship(data);
      });
  }, []);
  return (
    <div className="d-flex flex-column">
      {currentSponsorship.length > 0 &&
        currentSponsorship.map((eachSponsorship) => (
          <EachSponsorship
            key={eachSponsorship._id}
            eachSponsorship={eachSponsorship}
          />
        ))}
    </div>
  );
};

export default Advertisement;
