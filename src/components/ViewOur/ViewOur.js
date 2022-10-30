import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Advertisement from "../Advertisement/Advertisement";

const ViewOur = () => {
  return (
    <div className="my-2">
      {/*view-our section start  */}
      <div>
        <Row className="me-0">
          {/* view-our main component start */}
          <Col xs={8}>
            <div className="border border-black border-4">
              <Outlet></Outlet>
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
      {/* view-our section end  */}
    </div>
  );
};

export default ViewOur;
