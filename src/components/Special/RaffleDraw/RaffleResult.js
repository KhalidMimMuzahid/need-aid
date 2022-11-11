import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../context/UserContext";
import EachWinner from "./EachWinner";

const RaffleResult = () => {
  //   const { currentUser, logOut, isUserAdmin } = useContext(AuthContext);
  const [winnerList, SetWinnerList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/raffleresult")
      .then((res) => res.json())
      .then((data) => {
        SetWinnerList(data);
      });
  }, []);
  //   useEffect(() => {
  //     console.log("okk 1", winnerList);
  //     const newWinnerList= winnerList.map(winner =>{
  // winner.position= indexOf
  //     })
  //   }, [winnerList]);
  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container py-3 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className="card mask-custom">
              <div className="card-body p-2 text-white">
                <div className="text-center pt-3 pb-2">
                  <h2 className="my-4">Raffle Winner List</h2>
                </div>

                <table className="table text-white mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Winner</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Ticket Id</th>
                      <th scope="col">Position</th>
                      <th scope="col">Prize Money</th>
                      {/* <th scope="col">Gift A Card</th>
                      <th scope="col">Gift A Card</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {/* {topDonors.length === 0 ||
                  topDonors.map((donor) => (
                    <EachDonor
                      key={donor.userUid}
                      donor={donor}
                      star={topDonors.indexOf(donor)}
                    ></EachDonor>
                  ))} */}
                    {winnerList.length === 0 ||
                      winnerList.map((winner) => (
                        <EachWinner
                          key={winner._id}
                          winner={winner}
                          index={winnerList.indexOf(winner)}
                        ></EachWinner>
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

export default RaffleResult;
