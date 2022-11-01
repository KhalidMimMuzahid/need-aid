import React from "react";
import first from "../../../assets/img/rsz_flood1.jpg";
import second from "../../../assets/img/rsz_cover2.jpg";
import third from "../../../assets/img/rsz_donation6.jpg";

const HomeCarosel = () => {
  return (
    <div>
      <section className="pt-2">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
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
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src={first} className="d-block w-100 h-50" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-5 fw-bold mb-2 mt-5">
                  {" "}
                  HELP THE WHEN THEY NEED
                </h1>
                <p className="mt-3 mb-3">
                  Someone you know somewhere might be in trouble financially.
                  They don't have enough food, or even a roof over their
                  headThere are many useful and caring things you can do to help
                  out. Be kind be helpfull.
                </p>
                <p>
                  <a href="" className="button mt-3">
                    Donate Now <i className="fa-solid fa-heart"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={second} className="d-block w-100 " alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-5 fw-bold mb-2">
                  SMALL EFFORT MAKE BIG CHANGE
                </h1>
                <p className="mt-3 mb-3">
                  Someone you know somewhere might be in trouble financially.
                  They don't have enough food, or even a roof over their
                  headThere are many useful and caring things you can do to help
                  out. Be kind be helpfull.
                </p>
                <p>
                  <a href="" className="button mt-3">
                    Donate Now <i className="fa-solid fa-heart"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={third} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-5 fw-bold mb-2 mt-5 ">
                  HELP THE WHEN THEY NEED
                </h1>
                <p className="mt-3 mb-3">
                  Someone you know somewhere might be in trouble financially.
                  They don't have enough food, or even a roof over their
                  headThere are many useful and caring things you can do to help
                  out. Be kind be helpfull.
                </p>
                <p>
                  <a href="" className="button mt-3 mt-4">
                    Donate Now <i className="fa-solid fa-heart"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeCarosel;
