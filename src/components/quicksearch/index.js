import React from "react";
import { NavLink } from 'react-router-dom';

function QuickSearch() {

  const CloseQuickSearch = function(e){
    e.preventDefault();
    document.body.classList.remove('search-is-active');
  }

  return (
    <div>
      <div className="quick-search">
        <div className="quick-search-inner">
          <div className="view-header">
            <div className="view-header__left">
              <a href="/">
                <i className="ri-arrow-left-s-line"></i>
              </a>
            </div>

            <div className="view-header__featured">
              <input type="text" id="site-search-input" placeholder="Start typing"/>
            </div>

            <div className="view-header__right">
              <div className="quick-search-trigger js-search" onclick="activateQuickSearch()">
                <i className="ri-search-2-line"></i>
              </div>
            </div>
          </div>

          <div className="quick-search-results">
            <div className="quick-search-result">
              <figure>
                <img src="https://placeimg.com/480/480/tech" />
              </figure>
              <p>[ Waiting on API ]</p>
            </div>

            <div className="quick-search-result">
              <figure>
                <img src="https://placeimg.com/480/480/tech" />
              </figure>
              <p>[ Waiting on API ]</p>
            </div>

            <div className="quick-search-result">
              <figure>
                <img src="https://placeimg.com/480/480/tech" />
              </figure>
              <p>[ Waiting on API ]</p>
            </div>

            <div className="quick-search-result">
              <figure>
                <img src="https://placeimg.com/480/480/tech" />
              </figure>
              <p>[ Waiting on API ]</p>
            </div>
            <div className="quick-search-result">
              <figure>
                <img src="https://placeimg.com/480/480/tech" />
              </figure>
              <p>[ Waiting on API ]</p>
            </div>

            <div className="quick-search-result">
              <figure>
                <img src="https://placeimg.com/480/480/tech" />
              </figure>
              <p>[ Waiting on API ]</p>
            </div>

            <div className="quick-search-result">
              <figure>
                <img src="https://placeimg.com/480/480/tech" />
              </figure>
              <p>[ Waiting on API ]</p>
            </div>

            <div className="quick-search-result">
              <figure>
                <img src="https://placeimg.com/480/480/tech" />
              </figure>
              <p>[ Waiting on API ]</p>
            </div>
          </div>
        </div>
        <div className="quick-search-close" onClick={CloseQuickSearch}>
          <div className="js-close-quick-search">Close</div>
        </div>
      </div>
      <div className="quick-search-screen js-close-quick-search" onClick={CloseQuickSearch}></div>
    </div>
  );
}

export default QuickSearch;
