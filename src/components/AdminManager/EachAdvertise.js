import React from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const EachAdvertise = ({ advertise, advertises, setAdvertises }) => {
  const { phone, firstBanner, secondBanner, _id } = advertise;
  const handleAdvertisement = (e) => {
    e.preventDefault();
    console.log("hitted");
    fetch(`https://need-aid.vercel.app/approvesponsorship${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          toast.success("sponsorship added succesfully");
          const newAddvertisement = advertises.filter(
            (eachAdd) => eachAdd._id !== _id
          );
          setAdvertises(newAddvertisement);
          console.log("new add", newAddvertisement);
        }
      });
  };
  return (
    <div className="grid">
      <Row className="me-0">
        <Col xs={8}>
          <div className="">
            <div className="g-col-6 h-100">
              <section class="pt-2">
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                      <img
                        src={firstBanner}
                        class="d-block w-100 h-50"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                      <img
                        src={secondBanner}
                        class="d-block w-100 "
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block"></div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </Col>
        <Col xs={4}>
          <form onSubmit={handleAdvertisement}>
            <label htmlFor="">phone: </label>
            <input type="text" disabled defaultValue={phone} />
            {/* <button>delete</button> */}
            <button type="submit">accept</button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default EachAdvertise;
