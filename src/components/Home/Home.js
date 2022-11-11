import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AuthContext } from "../../context/UserContext";
import Advertisement from "../Advertisement/Advertisement";
import HomeCarosel from "./HomeCarosel/HomeCarosel";
import DonateCard from "./HomeMain/DonateCard";
import HomeMain from "./HomeMain/HomeMain";
import HomeMainBelow from "./HomeMainBelow";
import HomeMainUp from "./HomeMainUp";

const Home = () => {
  const { isUserAdmin } = useContext(AuthContext);
  return (
    <div>
      {/* home carosel start */}
      {<HomeCarosel />}
      {/* home carosel end */}

      {isUserAdmin || (
        <>
          {/* home about start  */}
          <HomeMainUp />
          {/* home about end  */}
          {/* home middle section start  */}
          <div>
            <Row className="me-0 mt-5 ">
              {/* home main component start */}
              <Col xs={10}>
                <div className=" ms-2 ">
                  <HomeMain></HomeMain>
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

          {/* home middle section end  */}
          {/* home below start  */}
          <HomeMainBelow />
          {/* home below end  */}
        </>
      )}
    </div>
  );
};

export default Home;
