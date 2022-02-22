import React from "react";
import AjuaIcon from "../../images/Ajua-icon.svg";

function Footer() {
  return (
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
  );
}

export default Footer;
