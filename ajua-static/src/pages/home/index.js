import React from "react";
import Layout from "../../components/layout";
import localBusinessImage from "../../images/marketing/local-business.png";
import ReviewsImage from "../../images/marketing/reviews.png";
import WhatsAppImage from "../../images/marketing/whatsapp.svg";

function Home() {
  return (
    <Layout>
      <div className="banner-cats">
        <div className="slider slider--cats">
          <a className="cat-pill" href="">
            Restaurants
          </a>
          <a className="cat-pill" href="">
            Hotels
          </a>
          <a className="cat-pill" href="">
            Beauty Care
          </a>
          <a className="cat-pill" href="">
            Retail
          </a>
          <a className="cat-pill" href="">
            Banking
          </a>
        </div>

        <div className="banner">
          <div className="banner__content">
            <div className="wrapper">
              <h1 className="h1">Find Nigeria’s best local businesses</h1>
              <form className="lone-search">
                <i className="ri-search-2-line"></i>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value=""
                />
              </form>
            </div>
          </div>
          <figure className="banner__img">
            <img src="https://placeimg.com/1480/680/people" />
          </figure>

          <div className="banner__ft">
            <p>
              Are you a business owner?{" "}
              <a href="">
                Join Our Network <i className="ri-arrow-right-line"></i>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="py-4 py-md-0 pb-md-6 wrapper">
        <h3 className="h6">Top Rated businesses</h3>

        <div className="slider slider--business">
          <business-preview>
            <figure className="business-preview__featured-image">
              <img src="https://placeimg.com/480/480/tech" />
            </figure>

            <div className="business-preview__content">
              <h4>Mchana Coffee Shop</h4>

              <rating-preview>
                <i className="ri-star-fill"></i>
                <span>4.9</span>
                <a href="#reviews">100 reviews</a>
              </rating-preview>

              <business-category>
                <span>[business category]</span>
              </business-category>

              <address>18 Ajilete Street, Ogba Ikeja, Lagos Nigeria</address>
            </div>
          </business-preview>

          <business-preview>
            <figure className="business-preview__featured-image">
              <img src="https://placeimg.com/480/482/any" />
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

              <address>18 Ajilete Street, Ogba Ikeja, Lagos Nigeria</address>
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

              <address>18 Ajilete Street, Ogba Ikeja, Lagos Nigeria</address>
            </div>
          </business-preview>

          <business-preview>
            <figure className="business-preview__featured-image">
              <img src="https://placeimg.com/480/482/any" />
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

              <address>18 Ajilete Street, Ogba Ikeja, Lagos Nigeria</address>
            </div>
          </business-preview>

          <business-preview>
            <figure className="business-preview__featured-image">
              <img src="https://placeimg.com/484/480/any" />
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

              <address>18 Ajilete Street, Ogba Ikeja, Lagos Nigeria</address>
            </div>
          </business-preview>

          <business-preview>
            <figure className="business-preview__featured-image">
              <img src="https://placeimg.com/486/480/any" />
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

              <address>18 Ajilete Street, Ogba Ikeja, Lagos Nigeria</address>
            </div>
          </business-preview>

          <business-preview>
            <figure className="business-preview__featured-image">
              <img src="https://placeimg.com/470/470/any" />
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

              <address>18 Ajilete Street, Ogba Ikeja, Lagos Nigeria</address>
            </div>
          </business-preview>

          <business-preview>
            <figure className="business-preview__featured-image">
              <img src="https://placeimg.com/470/470/any" />
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

              <address>18 Ajilete Street, Ogba Ikeja, Lagos Nigeria</address>
            </div>
          </business-preview>

          <span className="spacer"></span>
          <span className="spacer"></span>
        </div>

        <div className="d-flex flex-justify-end">
          <a className="link-gradient" href="">
            <span>See more top rated</span>
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>

      <div className="wrapper py-6 mb-lg-6">
        <div className="col-md-10 col-lg-5">
          <h3 className="h6">About Ajua</h3>
          <p>
            Ajua is Africa’s largest network of trusted local businesses. We
            believe in the power of community and connection.
          </p>
        </div>

        <div className="d-flex mt-4">
          <div className="col-4 pr-2">
            <figure className="img-square mb-2 mb-lg-4">
              <img src={localBusinessImage} />
            </figure>
            <p className="font-weight-500">Find local businesses</p>
          </div>
          <div className="col-4 px-1">
            <figure className="img-square mb-2 mb-lg-4">
              <img src={ReviewsImage} />
            </figure>
            <p className="font-weight-500">Read and leave reviews</p>
          </div>
          <div className="col-4 pl-2">
            <figure className="img-square mb-2 mb-lg-4">
              <img src={WhatsAppImage} />
            </figure>
            <p className="font-weight-500">Engage on WhatsApp</p>
          </div>
        </div>
      </div>

      <hr />

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
    </Layout>
  );
}

export default Home;
