import React from "react";
import { Link } from "react-router-dom";

const EachNotification = ({ eachNotification }) => {
  const { cardBody, fromDonorName, fromDonorUserPhoto, _id } = eachNotification;
  // console.log("notify", eachNotification);
  return (
    <li className="my-2 ms-0 py-1 " style={{ borderBottom: "2px solid white" }}>
      <Link
        className="text-white"
        style={{ textDecoration: "none" }}
        to={`/giftCard/${_id}`}
      >
        <img
          className=" rounded-circle"
          src={fromDonorUserPhoto}
          alt=""
          style={{ width: "20px", height: "20px" }}
        />{" "}
        {fromDonorName} sent you a gift message
      </Link>
    </li>
  );
};

export default EachNotification;
