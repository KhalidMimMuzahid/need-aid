import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import img from "../../../assets/img/rafell.jpg";
import { AuthContext } from "../../../context/UserContext";

const RaffleDraw = () => {
  const { currentUser } = useContext(AuthContext);
  const user = {
    name: currentUser?.displayName,
    email: currentUser?.email,
    photoURL: currentUser?.photoURL,
  };
  const [ticketInfo, setTicketInfo] = useState(user);
  const [show, setShow] = useState(false);
  const [secondShow, setsecondShow] = useState(false);
  const [BaughtTicketInfo, setBaughtTicketInfo] = useState({});
  const handleTicketInfo = (e) => {
    e.preventDefault();
    setShow(true);
    console.log(ticketInfo);
    if (ticketInfo?.phone) {
      ticketInfo.userUid = currentUser.uid;
      console.log("all okk", ticketInfo);
      handleClose();
      fetch("http://localhost:5000/rafflebuy", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(ticketInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          setBaughtTicketInfo(data);
          if (data.buyerId) {
            toast.success("Ticket Purchase Successfully");
          }
        });
      console.log("baught ticket info", BaughtTicketInfo);
      setTicketInfo(user);
      setTimeout(() => setsecondShow(true), 500);
      // return setsecondShow(true);
    } else {
      console.log("some field is empty");
    }
  };
  const handleinputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    // const value = e.target.value;
    const newTicketInfo = { ...ticketInfo };
    newTicketInfo[field] = value;

    setTicketInfo(newTicketInfo);
    console.log(ticketInfo);
  };
  const handleClose = () => {
    setShow(false);
    setTicketInfo({});
  };

  const handleShow = () => setShow(true);
  return (
    <div>
      <section>
        <div className="card m-3 w-75 mx-auto">
          <img src={img} className=" img-fluid h-4" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Get a Lottery Ticket</h5>
            <p className="card-text">
              By getting this lotteray, you cen be a millioner
            </p>
          </div>

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Each Ticket for 100 ৳ only</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleTicketInfo} action="">
                <label htmlFor="typeText"></label>
                <MDBInput
                  onChange={handleinputChange}
                  name="name"
                  placeholder="full Name"
                  defaultValue={currentUser?.displayName}
                  readOnly
                  id="typeText"
                  type="text"
                  className="mb-2"
                />
                <MDBInput
                  onChange={handleinputChange}
                  name="email"
                  placeholder="email"
                  defaultValue={currentUser?.email}
                  readOnly
                  id="typeText"
                  type="text"
                  className="mb-2"
                />
                <MDBInput
                  onChange={handleinputChange}
                  name="phone"
                  placeholder="your phone number"
                  id="typeText"
                  type="text"
                  className="mb-2"
                />

                <Button
                  onClick={handleTicketInfo}
                  type="submit"
                  className="button mt-2"
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    fontSize: "12px",
                  }}
                >
                  Buy
                </Button>
              </form>
            </Modal.Body>
            {/* <Modal.Footer></Modal.Footer> */}
          </Modal>

          <Modal
            show={secondShow}
            onHide={() => setsecondShow(false)}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Note down your information</Modal.Title>
            </Modal.Header>
            {/* defaultValue={currentUser?.email} */}
            <Modal.Body>
              <form action="">
                <label htmlFor="textAreaExample">Name</label>
                <MDBInput
                  name="name"
                  placeholder="name"
                  defaultValue={BaughtTicketInfo.name}
                  readOnly
                  id="typeText"
                  type="text"
                  className="mb-2"
                />
                <label htmlFor="textAreaExample">Email</label>
                <MDBInput
                  name="email"
                  placeholder="email"
                  defaultValue={BaughtTicketInfo.email}
                  readOnly
                  id="typeText"
                  type="text"
                  className="mb-2"
                />
                <label htmlFor="textAreaExample">Phone</label>
                <MDBInput
                  name="phone"
                  placeholder="phone"
                  defaultValue={BaughtTicketInfo.phone}
                  readOnly
                  id="typeText"
                  type="text"
                  className="mb-2"
                />
                <label htmlFor="textAreaExample">Ticket Id</label>
                <MDBInput
                  name="ticketId"
                  placeholder="ticketId"
                  defaultValue={BaughtTicketInfo.buyerId}
                  readOnly
                  id="typeText"
                  type="text"
                  className="mb-2"
                />

                <Button
                  onClick={() => setsecondShow(false)}
                  type="submit"
                  className="button mt-2"
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    fontSize: "12px",
                  }}
                >
                  Close
                </Button>
              </form>
            </Modal.Body>
            {/* <Modal.Footer></Modal.Footer> */}
          </Modal>

          <button
            onClick={handleShow}
            id="buy-lottery"
            className="button"
            data-bs-toggle="modal"
            href="#exampleModal"
          >
            Buy One
          </button>
        </div>
      </section>
    </div>
  );
};

export default RaffleDraw;

{
  /* <div
className="modal fade"
id="exampleModal"
tabindex="-1"
aria-labelledby="exampleModalLabel"
aria-hidden="true"
>
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title text-info" id="exampleModalLabel">
        {" "}
        Get Ticket ?
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div className="modal-body">
      <form>
        <div className="mb-3">
          <input
            onChange={handleinputChange}
            name="name"
            type="text"
            placeholder="Full Name"
            className="form-control"
            id="inputName"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <input
            onChange={handleinputChange}
            name="email"
            type="email"
            placeholder="Enter Email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <input
            onChange={handleinputChange}
            name="phone"
            type="text"
            placeholder="phone-number"
            className="form-control"
            id="inputAdress"
            required
          />
        </div>
        <button
          id="raffle-submit"
          type="submit"
          className="btn btn-outline-info"
          data-bs-target="#exampleModalToggle2"
          data-bs-toggle="modal"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
</div> */
}

// <div
// className="modal fade"
// id="exampleModalToggle2"
// aria-hidden="true"
// aria-labelledby="exampleModalToggleLabel2"
// tabindex="-1"
// >
// <div className="modal-dialog modal-dialog-centered">
//   <div className="modal-content">
//     <div className="modal-header">
//       <h5 className="modal-title" id="exampleModalToggleLabel2">
//         Note down Your Information
//       </h5>
//       <button
//         type="button"
//         className="btn-close"
//         data-bs-dismiss="modal"
//         aria-label="Close"
//       ></button>
//     </div>
//     <div className="modal-body">
//       <h5>
//         Full Name: <span id="buyer-name"></span>
//       </h5>
//       <h5>
//         {" "}
//         Your Mail: <span id="buyer-mail"></span>
//       </h5>
//       <h5>
//         Your Address: <span id="buyer-address"></span>
//       </h5>
//       <h5>
//         Ticket No: <span id="buyer-ticket-no"></span>
//       </h5>
//       <h5>
//         Ticket ID: <span id="buyer-ticket-id"></span>
//       </h5>
//     </div>
//     <div className="modal-footer">
//       <button
//         type="button"
//         className="btn btn-secondary"
//         data-bs-dismiss="modal"
//       >
//         Close
//       </button>
//     </div>
//   </div>
// </div>
// </div>

// <div
// className="modal fade"
// id="exampleModal2"
// tabindex="-1"
// aria-labelledby="exampleModalLabel"
// aria-hidden="true"
// ></div>
