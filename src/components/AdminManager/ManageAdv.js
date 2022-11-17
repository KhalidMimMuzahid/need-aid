import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import EachAdvertise from "./EachAdvertise";

const ManageAdv = () => {
  const [advertises, setAdvertises] = useState([]);
  useEffect(() => {
    fetch("https://need-aid.vercel.app/getsponsorship")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdvertises(data);
      });
  }, []);
  return (
    <div>
      {advertises.length ? (
        <div>
          <h1>total sposorship {advertises.length}</h1>
          {advertises.length > 0 && (
            <Row>
              <Col xs={5}>
                {advertises.map((advertise, i) => (
                  <EachAdvertise
                    key={i}
                    advertise={advertise}
                    advertises={advertises}
                    setAdvertises={setAdvertises}
                  />
                ))}
              </Col>
            </Row>
          )}
        </div>
      ) : (
        <div>
          <h1>no advertise available here</h1>
        </div>
      )}
    </div>
  );
};

export default ManageAdv;
