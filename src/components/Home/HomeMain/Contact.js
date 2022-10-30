import React from "react";
import { FaAddressBook, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section class="mb-4 container bg-info mt-5 ">
        <h1 class="text-center shadow-underline h1-responsive  font-bold  my-3 mt-5 pt-5">
          Contact <span className="text-white"> Us</span>
        </h1>

        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                    />
                    <label for="name" class="">
                      Your name
                    </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                    />
                    <label for="email" class="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    />
                    <label for="subject" class="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div class="text-center text-md-left w-100">
              <a
                class="button-two w-100 mb-4"
                onclick="document.getElementById('contact-form').submit();"
              >
                Send
              </a>
            </div>
            <div class="status"></div>
          </div>

          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0 mb-3">
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
