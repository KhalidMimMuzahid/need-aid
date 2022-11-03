import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./TopDonor.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import EachDonor from "./EachDonor";
const TopDonor = () => {
  const topDonors = useLoaderData();
  // const [giftCard, setGiftCard] = useState({});
  // const [topDonors, setTopDonors] = useState({});
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // useEffect(() => {
  //   fetch("http://localhost:5000/topdonorlist")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTopDonors(data);
  //       console.log(data);
  //     });
  // }, []);
  // const handleInputOnchange = (e) => {
  //   console.log(e.target.value);
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   const giftCardInfo = { ...giftCard };
  //   giftCardInfo[field] = value;
  //   setGiftCard(giftCardInfo);
  //   console.log(giftCard);
  // };
  // const handleGiftCard = (e) => {
  //   e.preventDefault();
  //   console.log(giftCard);
  //   if (giftCard.cardHeading && giftCard.cardBody) {
  //     console.log("all okk");
  //   } else {
  //     console.log("some field is empty");
  //   }
  // };
  return (
    <section class="vh-100 gradient-custom-2">
      <div class="container py-3 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-12 col-xl-10">
            <div class="card mask-custom">
              <div class="card-body p-2 text-white">
                <div class="text-center pt-3 pb-2">
                  <h2 class="my-4">Top Donor List {topDonors?.length}</h2>
                </div>

                <table class="table text-white mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Donor Name</th>
                      {/* <th scope="col">Email</th> */}
                      <th scope="col">Donated Amount</th>
                      <th scope="col">Gift A Card</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topDonors.length === 0 ||
                      topDonors.map((donor) => (
                        <EachDonor
                          key={donor.userUid}
                          donor={donor}
                          star={topDonors.indexOf(donor)}
                        ></EachDonor>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDonor;

// key={donor.userUid}
// show={show}
// handleShow={handleShow}
// handleClose={handleClose}
// donor={donor}
// handleInputOnchange={handleInputOnchange}
// handleGiftCard={handleGiftCard}
