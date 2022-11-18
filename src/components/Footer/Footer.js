import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <MDBFooter className="text-center text-lg-start text-white bg-dark mt-5">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                NEED AID
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Lorem ipsum dolor sit amet,
              </p>
              <div>
                <a href="" className="me-4 text-reset">
                  <FaFacebook></FaFacebook>
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="" className="me-4 text-reset">
                  <FaGoogle></FaGoogle>
                </a>
                <a href="" className="me-4 text-reset">
                  <FaTwitter></FaTwitter>
                </a>
                <a href="" className="me-4 text-reset">
                  <FaLinkedin></FaLinkedin>
                </a>
                <a href="" className="me-4 text-reset">
                  <FaInstagram></FaInstagram>
                </a>
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Funds</h6>
              <p>
                <Link to="/fund/firevictims" className="text-reset">
                  Fire Victims
                </Link>
              </p>
              <p>
                <Link to="/fund/orphan" className="text-reset">
                  Orphan funds
                </Link>
              </p>
              <p>
                <Link to="/fund/eyesight" className="text-reset">
                  Eyesight restoration
                </Link>
              </p>
              <p>
                <Link to="/fund/education" className="text-reset">
                  Education
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/viewour/total-fund" className="text-reset">
                  Total Fund
                </Link>
              </p>
              <p>
                <Link to="/special/raffleresult" className="text-reset">
                  Raffle Result
                </Link>
              </p>
              <p>
                <Link to="/fund/rickshaw" className="text-reset">
                  1000 takai rickshaw
                </Link>
              </p>
              <p>
                <Link to="/populer-work" className="text-reset">
                  Popular Work
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Dhaka, Bangladesh
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                needaid@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <Link className="text-reset fw-bold" to="">
          Need Aid
        </Link>
      </div>
    </MDBFooter>
  );
};

export default Footer;
