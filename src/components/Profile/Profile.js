import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/UserContext";

const Profile = () => {
  const { currentUser, logOut, isUserAdmin } = useContext(AuthContext);
  console.log(currentUser);
  const [totalDonation, setTotalDonation] = useState("loading...");
  useEffect(() => {
    console.log("is Admin user", isUserAdmin);
    if (!isUserAdmin) {
      fetch(
        `http://localhost:5000/currentuserprofile?userUid=${currentUser.uid}`,
        {
          headers: {
            authorization: `Barerer ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((res) => {
          // console.log(res);
          if (res.satus === 401 || res.status === 403) {
            return logOut();
          }
          return res.json();
        })
        .then((data) => setTotalDonation(data.amount));
    } else {
      fetch(
        `http://localhost:5000/currentuserprofile?userUid=${currentUser.uid}`,
        {
          headers: {
            authorization: `Barerer ${localStorage.getItem("admin-token")}`,
            actor: "Admin",
          },
        }
      )
        .then((res) => {
          // console.log(res);
          if (res.satus === 401 || res.status === 403) {
            return logOut();
          }
          return res.json();
        })
        .then((data) => setTotalDonation(data.amount));
    }
  }, [currentUser?.uid]);
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#9de2ff" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <img
                        src={currentUser.photoURL}
                        alt="Generic placeholder image"
                        className="img-fluid"
                        style={{ width: "180px", borderRadius: "10px" }}
                      />
                    </div>
                    <div
                      className="flex-grow-1 ms-3 p-2"
                      style={{ backgroundColor: "#efefef" }}
                    >
                      <h5 className="mb-1">
                        {currentUser.displayName} {isUserAdmin && "(Admin)"}
                      </h5>
                      <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                        {currentUser.email}
                      </p>
                      <div className="d-flex justify-content-start rounded-3  mb-2">
                        <div className="d-flex">
                          <p className="  mb-1 me-2">Total Donation:</p>
                          <p className="mb-0">{totalDonation}৳</p>
                        </div>
                        {/* <div className="px-3">
                          <p className="small text-muted mb-1">Followers</p>
                          <p className="mb-0">976</p>
                        </div>
                        <div>
                          <p className="small text-muted mb-1">Rating</p>
                          <p className="mb-0">8.5</p>
                        </div> */}
                      </div>
                      {/* <div className="d-flex pt-1">
                        <button
                          type="button"
                          className="btn btn-outline-primary me-1 flex-grow-1"
                        >
                          Chat
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary flex-grow-1"
                        >
                          Follow
                        </button>
                      </div> */}
                    </div>
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

export default Profile;
