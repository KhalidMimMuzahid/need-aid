import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Advertisement from "../../Advertisement/Advertisement";
const Fund = () => {
  return (
    <div className="my-2">
      {/* fund section start  */}
      <div>
        <Row className="me-0">
          {/* fund main component start */}
          <Col xs={8}>
            <div className="">
              <Outlet></Outlet>
            </div>
          </Col>
          {/* fund main component end */}
          {/* Advertise component start */}
          <Col xs={4}>
            <Advertisement />
          </Col>
          {/* Advertise component end */}
        </Row>
      </div>
      {/* fund section end  */}
    </div>
  );
};

export default Fund;
