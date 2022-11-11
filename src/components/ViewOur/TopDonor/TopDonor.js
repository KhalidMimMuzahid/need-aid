import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./TopDonor.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import EachDonor from "./EachDonor";
const TopDonor = () => {
  const topDonors = useLoaderData();
  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container py-3 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className="card mask-custom">
              <div className="card-body p-2 text-white">
                <div className="text-center pt-3 pb-2">
                  <h2 className="my-4">Top Donor List</h2>
                </div>

                <table className="table text-white mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Donor Name</th>
                      <th scope="col">Rating</th>
                      <th scope="col">Amount</th>
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
