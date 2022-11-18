import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ManageRaffle = () => {
  const [totalBuyer, setTotalBuyer] = useState("loading...");
  useEffect(() => {
    fetch("https://need-aid.vercel.app/rafflecount")
      .then((res) => res.json())
      .then((data) => {
        const buyerList = data?.buyersIdCollection;
        const length = buyerList.length;
        setTotalBuyer(length);
      });
  }, []);
  const drawRaffle = () => {
    console.log("clicked");
    fetch("https://need-aid.vercel.app/drawraffle", {
      headers: {
        authorization: `Barerer ${localStorage.getItem("admin-token")}`,
        actor: "Admin",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("raffle drawn successfully");
          setTotalBuyer(0);
        } else {
          toast.error("something went wrong");
        }
      });
  };
  return (
    <div className="mt-5">
      {/* <button onClick={drawRaffle}>draw</button> */}
      <MDBCard className="w-75 mx-auto">
        <MDBCardBody>
          <MDBCardTitle>About Raffle</MDBCardTitle>
          <MDBCardText>total Ticket Sold: {totalBuyer}</MDBCardText>
          <button onClick={drawRaffle} className="button">
            Draw Raffle
          </button>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default ManageRaffle;
