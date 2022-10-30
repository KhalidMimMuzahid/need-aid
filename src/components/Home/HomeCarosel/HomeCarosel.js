import React from "react";
import first from "../../../assets/img/rsz_flood1.jpg";
import second from "../../../assets/img/rsz_cover2.jpg";
import third from "../../../assets/img/rsz_donation6.jpg";

const HomeCarosel = () => {
  return (
    <div>
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
              <img src={first} class="d-block w-100 h-50" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h1 class="display-5 fw-bold mb-2 mt-5">
                  {" "}
                  HELP THE WHEN THEY NEED
                </h1>
                <p class="mt-3 mb-3">
                  Someone you know somewhere might be in trouble financially.
                  They don't have enough food, or even a roof over their
                  headThere are many useful and caring things you can do to help
                  out. Be kind be helpfull.
                </p>
                <p>
                  <a href="" class="button mt-3">
                    Donate Now <i class="fa-solid fa-heart"></i>
                  </a>
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={second} class="d-block w-100 " alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h1 class="display-5 fw-bold mb-2">
                  SMALL EFFORT MAKE BIG CHANGE
                </h1>
                <p class="mt-3 mb-3">
                  Someone you know somewhere might be in trouble financially.
                  They don't have enough food, or even a roof over their
                  headThere are many useful and caring things you can do to help
                  out. Be kind be helpfull.
                </p>
                <p>
                  <a href="" class="button mt-3">
                    Donate Now <i class="fa-solid fa-heart"></i>
                  </a>
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={third} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h1 class="display-5 fw-bold mb-2 mt-5 ">
                  HELP THE WHEN THEY NEED
                </h1>
                <p class="mt-3 mb-3">
                  Someone you know somewhere might be in trouble financially.
                  They don't have enough food, or even a roof over their
                  headThere are many useful and caring things you can do to help
                  out. Be kind be helpfull.
                </p>
                <p>
                  <a href="" class="button mt-3 mt-4">
                    Donate Now <i class="fa-solid fa-heart"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeCarosel;
