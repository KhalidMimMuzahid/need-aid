import React from "react";
import about from "../../assets/img/about.jpg";

const HomeMainUp = () => {
  return (
    <div className="">
      <section className="mt-5">
        <div>
          <h1 className="shadow-underline2  text-center font-bold mb-4">
            {" "}
            About <span className="text-warning">Us</span>
          </h1>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div
              class="bg-image hover-overlay ripple shadow-2-strong rounded-5"
              data-mdb-ripple-color="light"
            >
              <img src={about} class="img-fluid" />
              <a href="#!">
                <div
                  class="mask"
                  style={{ backgroundColor: " rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </div>
          </div>

          <div class="col-md-6 gx-5 mb-4">
            <h4 classNmame="mb-4">
              <strong>Need Aid | a Donation Service </strong>
            </h4>
            <p class="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              consequatur eligendi quisquam doloremque vero ex debitis veritatis
              placeat unde animi laborum sapiente illo possimus, commodi
              dignissimos obcaecati illum maiores corporis.
            </p>
            <p>
              <strong>Doloremque vero ex debitis veritatis?</strong>
            </p>
            <p class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              itaque voluptate nesciunt laborum incidunt. Officia, quam
              consectetur. Earum eligendi aliquam illum alias, unde optio
              accusantium soluta, iusto molestiae adipisci et?
            </p>
            <p>
              <strong>Doloremque vero ex debitis veritatis?</strong>
            </p>
            <p class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              itaque voluptate nesciunt laborum incidunt. Officia, quam
              consectetur. Earum eligendi aliquam illum alias, unde optio
              accusantium soluta, iusto molestiae adipisci et?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeMainUp;
