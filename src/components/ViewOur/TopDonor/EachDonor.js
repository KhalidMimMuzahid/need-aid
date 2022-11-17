import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaGift, FaStar } from "react-icons/fa";
import { Form, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/UserContext";

const EachDonor = ({ donor, star }) => {
  // console.log(star);
  let newStar;
  let loopStar = [];
  if (star === 0) {
    newStar = 5;
    for (let i = 0; i < newStar; i++) {
      loopStar.push(i);
    }
  } else if (star === 1) {
    newStar = 4;
    for (let i = 0; i < newStar; i++) {
      loopStar.push(i);
    }
  } else if (star === 2) {
    newStar = 3;
    for (let i = 0; i < newStar; i++) {
      loopStar.push(i);
    }
  } else if (star === 3) {
    newStar = 2;
    for (let i = 0; i < newStar; i++) {
      loopStar.push(i);
    }
  } else {
    newStar = 1;
    for (let i = 0; i < newStar; i++) {
      loopStar.push(i);
    }
  }
  // console.log(loopStar);
  const { currentUser, isUserAdmin } = useContext(AuthContext);
  // console.log("currentUser: ", currentUser);
  // console.log("donor: ", donor);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setGiftCard({});
  };
  const handleShow = () => setShow(true);
  const [giftCard, setGiftCard] = useState({});
  //   const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const handleInputOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const giftCardInfo = { ...giftCard };
    giftCardInfo[field] = value;
    setGiftCard(giftCardInfo);
    console.log(giftCard);
  };
  const handleGiftCard = (e) => {
    e.preventDefault();
    setShow(true);
    console.log(giftCard);
    if (giftCard.cardBody) {
      giftCard.toDonorUid = donor.userUid;
      // giftCard.fromDonorUserUid = currentUser.uid;
      giftCard.fromDonorName = currentUser.displayName;
      giftCard.fromDonorEmail = currentUser.email;
      giftCard.fromDonorUserPhoto = currentUser.photoURL;
      console.log("all okk", giftCard);
      handleClose();
      fetch("https://need-aid.vercel.app/sendgiftcard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Barerer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(giftCard),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("is sent", data);
          toast.success("card sent successfully");
        });
      setGiftCard({});
    } else {
      console.log("some field is empty");
    }
  };

  //   console.log(donor);
  return (
    <tr className="fw-normal">
      <th>
        <img
          src={donor.userPhoto}
          alt="avatar 1"
          style={{ width: "45px", height: "45px", borderRadius: "50%" }}
        />
        <span className="ms-2">{donor.name}</span>
      </th>
      <td className="align-middle">
        <span className=" ">
          {loopStar.map((star) => (
            <FaStar style={{ color: "#ffe735", fontSize: "20px" }}></FaStar>
          ))}
        </span>
      </td>
      <td className="align-middle">
        <h6 className="mb-0">
          <span className="badge bg-secondary fs-6">{donor.amount}৳</span>
        </h6>
      </td>
      <td className="align-middle">
        <Button
          disabled={isUserAdmin}
          onClick={handleShow}
          className="button"
          style={{
            padding: "5px",
            borderRadius: "5px",
            fontSize: "12px",
          }}
        >
          gift card <FaGift className="fs-6" />
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleGiftCard} action="">
              {/* <label htmlFor="typeText"></label>
              <MDBInput
                onChange={handleInputOnchange}
                name="cardHeading"
                id="typeText"
                type="text"
                className="mb-2"
              /> */}
              <label htmlFor="textAreaExample">Message</label>
              <MDBTextArea
                onChange={handleInputOnchange}
                name="cardBody"
                id="textAreaExample"
                rows={4}
              />
              <Button
                onClick={handleGiftCard}
                type="submit"
                className="button mt-2"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  fontSize: "12px",
                }}
              >
                Send Message
              </Button>
            </form>
          </Modal.Body>
          {/* <Modal.Footer></Modal.Footer> */}
        </Modal>
      </td>
    </tr>
  );
};

export default EachDonor;

// {
//     handleInputOnchange,
//     handleGiftCard,
//     donor,
//     handleShow,
//     show,
//     handleClose,
//   }
{
  /* <Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
  <Form>
    <Form.Group
      className="mb-3"
      controlId="exampleForm.ControlInput1"
    >
      <Form.Label>Card Heading</Form.Label>
      <Form.Control
        type="text"
        onChange={handleInputOnchange}
        name="cardHeading"
        placeholder="card heading"
        autoFocus
        required
      />
    </Form.Group>
    <Form.Group
      className="mb-3"
      controlId="exampleForm.ControlTextarea1"
    >
      <Form.Label>Card Body</Form.Label>
      <Form.Control
        onChange={handleInputOnchange}
        name="cardBody"
        as="textarea"
        rows={3}
        required
      />
    </Form.Group>
    <Button
      type="submit"
      className="button"
      variant="primary"
      onClick={handleGiftCard}
    >
      Send Cards
    </Button>
  </Form>
</Modal.Body>
</Modal> */
}
