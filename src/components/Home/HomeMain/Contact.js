import React from "react";
import { FaAddressBook, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section className="mb-4 container bg-info mt-5 ">
        <h1 className="text-center shadow-underline h1-responsive  font-bold  my-3 mt-5 pt-5">
          Contact <span className="text-white"> Us</span>
        </h1>

        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <label htmlFor="name" className="">
                      Your name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <label htmlFor="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <label htmlFor="subject" className="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left w-100">
              <a className="button-two w-100 mb-4">Send</a>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0 mb-3">
              <li>
                <FaAddressBook></FaAddressBook>
                <p className="">Dhaka, Bangladesh</p>
              </li>

              <li>
                <FaPhoneAlt></FaPhoneAlt>
                <p className="">+880 1234 567 89</p>
              </li>

              <li>
                <FaMailBulk></FaMailBulk>
                <p className="">contact@needaid.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
