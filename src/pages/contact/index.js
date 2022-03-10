import React from "react";
import Layout from "../../components/layout";
import HeroBg from "../../common/images/marketing/hero-bg.jpeg";

function Contact() {
  return (
    <Layout>
      <div className="market-hero">
        <div className="wrapper">
          <div className="market-hero__content">
            <h1 className="h6 text-white">Get in touch</h1>
            <p className="h1 mb-3">Contact</p>
            <p className="p-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <figure>
          <img src={HeroBg} alt="ajua gradient" />
        </figure>
      </div>

      <div className="wrapper py-7">
        <form className="main-contact" validate>
          <div className="form-field">
            <label for="name">Name*</label>
            <input id="name" type="text" required />
          </div>
          <div className="form-field">
            <label for="email">Email*</label>
            <input id="email" type="email" required />
          </div>
          <div className="form-field">
            <label for="phone">Phone number</label>
            <input id="phone" type="tel" />
          </div>

          <div className="form-field">
            <label for="message">Message*</label>
            <textarea id="message" required></textarea>
          </div>

          <div className="form-field">
            <button class="btn" type="submit">Submit</button>
          </div>
        </form>
      </div>

      <hr />
    </Layout>
  );
}

export default Contact;
