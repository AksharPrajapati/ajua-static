import React from "react";
import AjuaIcon from "../../common/images/Ajua-icon.svg";

function Footer() {
  return (
    <>
      <div className="wrapper-full py-7">
        <div className="wrapper d-md-flex">
          <div className="col-12 col-md-4 mb-6 mb-md-0 pr-md-4">
            <div className="has-accent-top">
              <h4>Use Ajua at your business</h4>
              <p>Everything you need to build and grow your business.</p>
              <a className="link-plain mt-2" href="">
                Learn more
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-6 mb-md-0 pr-md-4">
            <div className="has-accent-top">
              <h4>Download the Ajua merchant app</h4>
              <p>Manage your business from anhywhere at your fingertips.</p>
              <a className="link-plain mt-2" href="">
                Download it now
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 pr-md-4">
            <div className="has-accent-top">
              <h4>Request a new business</h4>
              <p>Have a favorite business but don’t see it? Let us know.</p>
              <a className="link-plain mt-2" href="">
                Suggest a business
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="site-footer">
        <div className="wrapper">
          <a className="site-footer-icon" href="">
            <img src={AjuaIcon} alt="Ajua Icon" />
          </a>

          <ul className="social-list">
            <li>
              <a href="" target="_blank">
                <i className="ri-facebook-circle-fill"></i>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <i className="ri-instagram-fill"></i>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <i className="ri-whatsapp-fill"></i>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <i className="ri-twitter-fill"></i>
              </a>
            </li>
          </ul>

          <ul className="legal-list">
            <li>
              <small>© 2022 Ajua, Inc.</small>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="" target="_blank">
                Privacy
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
