import React from "react";

const EachWinner = ({ winner, index }) => {
  const { buyerId, email, name, phone, photoURL } = winner;
  const prizeMoney = "10000";
  let position = "";
  if (index === 0) {
    position = "first";
  } else if (index === 1) {
    position = "second";
  } else if (index === 2) {
    position = "third";
  } else if (index === 3) {
    position = "fourth";
  } else if (index === 4) {
    position = "fifth";
  }

  console.log(index, ":", winner);
  return (
    <tr className="fw-normal">
      <th className="d-flex">
        <img
          src={photoURL}
          alt="avatar 1"
          style={{ width: "45px", height: "45px", borderRadius: "50%" }}
        />
        <div className="d-flex flex-column">
          <div>
            <span className="ms-2">{name}</span>
          </div>
          <div>
            {" "}
            <span className="ms-2"> {email}</span>
          </div>
        </div>
      </th>
      <td className="align-middle">
        <span className=" ">{phone}</span>
      </td>
      <td className="align-middle">
        <h6 className="mb-0">
          <span className="badge bg-secondary fs-6">{buyerId}</span>
        </h6>
      </td>
      <td className="align-middle">
        <h6 className="mb-0">
          <span className="badge bg-secondary fs-6">{position}</span>
        </h6>
      </td>
      <td className="align-middle">
        <h6 className="mb-0">
          <span className="badge bg-secondary fs-6">{prizeMoney}৳</span>
        </h6>
      </td>
    </tr>
  );
};

export default EachWinner;
