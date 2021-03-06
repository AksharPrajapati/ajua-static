import React from "react";
import logo from "../../common/images/Ajua-logo.svg";
import { NavLink } from "react-router-dom";
import MobileNav from "./nav";

function Header() {
  const QuickSearch = function (e) {
    e.preventDefault();
    document.body.classList.add("search-is-active");
  };

  return (
    <header className="site-header">
      <div className="view-header">
        <div className="view-header__left">
          <a href="/" className="js-open-nav" onClick={MobileNav}>
            <i className="ri-menu-line"></i>
          </a>
        </div>

        <div className="view-header__featured">
          <a className="site-logo" href="/">
            <svg
              width="36"
              height="32"
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 6.66667C0 2.98477 2.98477 0 6.66667 0H12V12C12 15.6819 9.01523 18.6667 5.33333 18.6667H0V6.66667ZM14.6667 0H22.6667C30.0304 0 36 5.96954 36 13.3333V32H28C20.6362 32 14.6667 26.0305 14.6667 18.6667V0ZM6.66674 32C9.61225 32 12.0001 29.6122 12.0001 26.6667C12.0001 23.7212 9.61225 21.3333 6.66674 21.3333C3.72122 21.3333 1.3334 23.7212 1.3334 26.6667C1.3334 29.6122 3.72122 32 6.66674 32Z"
                fill="url(#paint0_linear_127_2557)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_127_2557"
                  x1="1.5"
                  y1="16"
                  x2="36"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4171F3" />
                  <stop offset="1" stop-color="#922DE2" />
                </linearGradient>
              </defs>
            </svg>

            <h2 className="sr-only">Ajua</h2>
          </a>
        </div>

        <div className="view-header__right">
          <quick-search-trigger className="js-search" onClick={QuickSearch}>
            <i className="ri-search-2-line"></i>
          </quick-search-trigger>
        </div>

        <nav className="navigation-drawer">
          <div>
            <ul>
              <li>
                <NavLink to="/">Top Rated</NavLink>
              </li>
              <li>
                <NavLink to="/for-business">For Business</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <hr />

            <ul>
              <li>
                <NavLink to="/contact">Privacy Policy</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="view-header-lg" id="view-header-lg">
        <div className="view-header-lg__inner">
          <div className="view-header-lg__left">
            <a className="site-logo" href="/">
              <img src={logo} alt="Ajua" />
              <h2 className="sr-only">Ajua</h2>
            </a>
            <form
              className="view-header-lg__search js-open-quick-search"
              onClick={QuickSearch}
            >
              <i className="ri-search-2-line"></i>
              <input
                className="js-open-quick-search"
                onClick={QuickSearch}
                type="text"
                placeholder="Start typing"
              />
            </form>
          </div>

          <ul className="view-header-lg__nav">
            <li>
              <NavLink to="/">Top Rated</NavLink>
            </li>
            <li>
              <NavLink to="/for-business">For Business</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
