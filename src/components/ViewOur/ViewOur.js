import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import Advertisement from "../Advertisement/Advertisement";

const ViewOur = () => {
  const { isUserAdmin } = useContext(AuthContext);
  return (
    <div className="my-2">
      {isUserAdmin ? (
        <>
          <div>
            <Row className="me-0">
              {/* view-our main component start */}
              <Col xs={12}>
                <div className="">
                  <Outlet></Outlet>
                </div>
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <>
          {/*view-our section start  */}
          <div>
            <Row className="me-0">
              {/* view-our main component start */}
              <Col xs={8}>
                <div className="">
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
        </>
      )}
    </div>
  );
};

export default ViewOur;
