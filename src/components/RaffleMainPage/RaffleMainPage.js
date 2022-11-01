import React from "react";
import { Col, Row } from "react-bootstrap";
import Advertisement from "../Advertisement/Advertisement";
import RaffleDraw from "../Special/RaffleDraw/RaffleDraw";

const RaffleMainPage = () => {
  return (
    <div>
      <Row className="me-0 mt-1 ">
        {/* home main component start */}
        <Col xs={8}>
          <div className=" ms-2 ">
            <RaffleDraw />
          </div>
        </Col>
        {/* home main component end */}
        {/* Advertise component start */}
        <Col xs={4}>
          <Advertisement />
        </Col>
        {/* Advertise component end */}
      </Row>
    </div>
  );
};

export default RaffleMainPage;
