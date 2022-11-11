import React from "react";

const ManageRaffle = () => {
  const drawRaffle = () => {
    console.log("clicked");
    fetch("http://localhost:5000/drawraffle", {
      headers: {
        authorization: `Barerer ${localStorage.getItem("admin-token")}`,
        actor: "Admin",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <button onClick={drawRaffle}>draw</button>
    </div>
  );
};

export default ManageRaffle;
