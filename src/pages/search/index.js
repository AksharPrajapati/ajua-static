import React from "react";
import Layout from "../../components/layout";
import HeroBg from "../../common/images/marketing/hero-bg.jpeg";

function Search() {

  const drawers = document.getElementsByClassName('filter-group__drawer');
  for (const drawer of drawers) {
    drawer.style.display = 'none';
  }

  const OpenDrawer = function(e){
    e.preventDefault();
  }

  const MobileFilterOpen = function(e){
    e.preventDefault();
    document.body.classList.add('filters-open');
  }
  const MobileFilterClose = function(e){
    e.preventDefault();
    document.body.classList.remove('filters-open');
  }

  return (
    <Layout>

    <div className="wrapper d-flex flex-items-start flex-justify-between py-3 border-bottom d-lg-none">
      <p className="pr-4 pt-1">Search results for "[search term]"</p>
      <div className="filter-trigger js-open-filters" onClick={MobileFilterOpen}>
        <i className="ri-filter-3-line"></i>
        <span>Filters</span>
      </div>
    </div>

    <div className="search-results-wrap py-lg-6 wrapper">
      <div className="filters-wrap">
        <div className="filters">
          <header className="view-header">
            <div className="view-header__left">
              <a href="" className="js-close-filters" onClick={MobileFilterClose}>
                <i className="ri-close-fill"></i>
              </a>
            </div>
            <div className="view-header__featured">
              <p>Filters</p>
            </div>
            <div className="view-header__left">
              <button className="btn-link">Clear all</button>
            </div>
          </header>

          <div className="filter-group">
            <p className="filter-group__title">State</p>

            <div className="filter">
              <input type="checkbox" name="xxx" id="xxx" />
              <label for="xxx">Lagos</label>
            </div>

            <div className="filter">
              <input type="checkbox" name="yyy" id="yyy" />
              <label for="yyy">Kano</label>
            </div>

            <div className="filter">
              <input type="checkbox" name="zzz" id="zzz" />
              <label for="zzz">Oyo</label>
            </div>

            <div className="filter">
              <input type="checkbox" name="aaa" id="aaa" />
              <label for="aaa">Edo</label>
            </div>

            <div className="filter-group__drawer">
              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="">More items</label>
              </div>

              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="">More items</label>
              </div>

              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="">More items</label>
              </div>

              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="">More items</label>
              </div>
            </div>

            <button className="filter-group__expand btn-link" onClick={OpenDrawer}>See all</button>
          </div>

          <div className="filter-group">
            <p className="filter-group__title">City</p>

            <div className="filter">
              <input type="checkbox" name="xxx" id="xxx" />
              <label for="xxx">Lagos</label>
            </div>

            <div className="filter">
              <input type="checkbox" name="yyy" id="yyy" />
              <label for="yyy">Kano</label>
            </div>

            <div className="filter">
              <input type="checkbox" name="zzz" id="zzz" />
              <label for="zzz">Oyo</label>
            </div>

            <div className="filter">
              <input type="checkbox" name="aaa" id="aaa" />
              <label for="aaa">Edo</label>
            </div>

            <div className="filter-group__drawer">
              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="">More items</label>
              </div>

              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="">More items</label>
              </div>

              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="">More items</label>
              </div>

              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="">More items</label>
              </div>
            </div>

            <button className="filter-group__expand btn-link">See all</button>
          </div>

          <div className="filter-group">
            <p className="filter-group__title">Category</p>

            <div className="filter">
              <input type="checkbox" name="xxx" id="xxx" />
              <label for="xxx">Restaurants</label>
            </div>

            <div className="filter">
              <input type="checkbox" name="yyy" id="yyy" />
              <label for="yyy">Retail</label>
            </div>

            <div className="filter">
              <input type="checkbox" name="zzz" id="zzz" />
              <label for="zzz">Plumbers</label>
            </div>

            <div className="filter">
              <input type="checkbox" name="aaa" id="aaa" />
              <label for="aaa">Laundromat</label>
            </div>

            <div className="filter-group__drawer">
              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="">More items</label>
              </div>

              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="">More items</label>
              </div>

              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="">More items</label>
              </div>

              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="">More items</label>
              </div>
            </div>

            <button className="filter-group__expand btn-link">See all</button>
          </div>

        </div>
      </div>
      <div className="search-results">
        <p className="d-none d-lg-block">Showing results for [searched text here]</p>

        <search-results>

          <business-preview>
            <figure className="business-preview__featured-image">
              <img src="https://placeimg.com/480/481/any" />
            </figure>

            <div className="business-preview__content">
              <h4>Good Eats Cafe</h4>

              <rating-preview>
                <i className="ri-star-fill"></i>
                <span>4.3</span>
                <a href="#reviews">24 reviews</a>
              </rating-preview>

              <business-category>
                <span>[business category]</span>
              </business-category>

              <address>
                18 Ajilete Street, Ogba Ikeja, Lagos Nigeria
              </address>

              <div className="busiess-preview__review">
                <i className="ri-chat-3-line"></i>
                <p>“This is the most recent review that was published for this business. It must be a verified review to be displayed in this card. It will truncate and link to this review in the business profile. <a href="">Read more</a></p>
              </div>
            </div>
          </business-preview>

          <business-preview>
            <figure className="business-preview__featured-image">
              <img src="https://placeimg.com/480/481/any" />
            </figure>

            <div className="business-preview__content">
              <h4>Good Eats Cafe</h4>

              <rating-preview>
                <i className="ri-star-fill"></i>
                <span>4.3</span>
                <a href="#reviews">24 reviews</a>
              </rating-preview>

              <business-category>
                <span>[business category]</span>
              </business-category>

              <address>
                18 Ajilete Street, Ogba Ikeja, Lagos Nigeria
              </address>

              <div className="busiess-preview__review">
                <i className="ri-chat-3-line"></i>
                <p>“This is the most recent review that was published for this business. It must be a verified review to be displayed in this card. It will truncate and link to this review in the business profile. <a href="">Read more</a></p>
              </div>
            </div>
          </business-preview>

          <business-preview>
            <figure className="business-preview__featured-image">
              <img src="https://placeimg.com/480/481/any" />
            </figure>

            <div className="business-preview__content">
              <h4>Good Eats Cafe</h4>

              <rating-preview>
                <i className="ri-star-fill"></i>
                <span>4.3</span>
                <a href="#reviews">24 reviews</a>
              </rating-preview>

              <business-category>
                <span>[business category]</span>
              </business-category>

              <address>
                18 Ajilete Street, Ogba Ikeja, Lagos Nigeria
              </address>

              <div className="busiess-preview__review">
                <i className="ri-chat-3-line"></i>
                <p>“This is the most recent review that was published for this business. It must be a verified review to be displayed in this card. It will truncate and link to this review in the business profile. <a href="">Read more</a></p>
              </div>
            </div>
          </business-preview>

          <business-preview>
            <figure className="business-preview__featured-image">
              <img src="https://placeimg.com/480/481/any" />
            </figure>

            <div className="business-preview__content">
              <h4>Good Eats Cafe</h4>

              <rating-preview>
                <i className="ri-star-fill"></i>
                <span>4.3</span>
                <a href="#reviews">24 reviews</a>
              </rating-preview>

              <business-category>
                <span>[business category]</span>
              </business-category>

              <address>
                18 Ajilete Street, Ogba Ikeja, Lagos Nigeria
              </address>

              <div className="busiess-preview__review">
                <i className="ri-chat-3-line"></i>
                <p>“This is the most recent review that was published for this business. It must be a verified review to be displayed in this card. It will truncate and link to this review in the business profile. <a href="">Read more</a></p>
              </div>
            </div>
          </business-preview>

          <business-preview>
            <figure className="business-preview__featured-image">
              <img src="https://placeimg.com/480/481/any" />
            </figure>

            <div className="business-preview__content">
              <h4>Good Eats Cafe</h4>

              <rating-preview>
                <i className="ri-star-fill"></i>
                <span>4.3</span>
                <a href="#reviews">24 reviews</a>
              </rating-preview>

              <business-category>
                <span>[business category]</span>
              </business-category>

              <address>
                18 Ajilete Street, Ogba Ikeja, Lagos Nigeria
              </address>

              <div className="busiess-preview__review">
                <i className="ri-chat-3-line"></i>
                <p>“This is the most recent review that was published for this business. It must be a verified review to be displayed in this card. It will truncate and link to this review in the business profile. <a href="">Read more</a></p>
              </div>
            </div>
          </business-preview>
        </search-results>
      </div>
    </div>


    </Layout>
  );
}

export default Search;
