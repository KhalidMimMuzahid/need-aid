import React from "react";
import { Col, Row } from "react-bootstrap";
import Advertisement from "../Advertisement/Advertisement";
import HomeMain from "../Home/HomeMain/HomeMain";
import Rickshaw from "../Home/HomeMain/Rickshaw";

const RickshawMainPage = () => {
  return (
    <div>
      <Row className="me-0 mt-5 ">
        {/* home main component start */}
        <Col xs={10}>
          <div className=" ms-2 ">
            <Rickshaw />
          </div>
        </Col>
        {/* home main component end */}
        {/* Advertise component start */}
        <Col xs={2}>
          <Advertisement />
        </Col>
        {/* Advertise component end */}
      </Row>
    </div>
  );
};

export default RickshawMainPage;
