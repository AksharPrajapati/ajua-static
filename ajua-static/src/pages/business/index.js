import React from "react";
import Layout from "../../components/layout";

function Business() {
  return (
    <Layout>
      <business>
        <header class="business__header">
          <figure class="business__featured-image">
            <img src="/build/images/fpo/fpo.png" />
          </figure>

          <div class="business__header-content wrapper">
            <a class="business__logo" href="">
              <img src="/build/images/fpo/fpo-business-logo.png" />
            </a>
            <h3>Mchana Coffee Shop</h3>

            <div class="business__header__details">
              <rating-preview>
                <i class="ri-star-fill"></i>
                <span>4.9</span>
                <a href="#">100 reviews</a>
              </rating-preview>

              <business-category>
                <span>[business category]</span>
              </business-category>

              <address>18 Ajilete Street, Ogba Ikeja, Lagos Nigeria</address>
            </div>

            <div class="business-header__social d-flex flex-items-center mt-3">
              <a
                class="icon-circle icon-cirlce--green mr-4 mr-lg-0 ml-lg-4"
                href=""
              >
                <i class="ri-whatsapp-fill"></i>
              </a>
              <a
                class="icon-circle icon-cirlce--pink mr-4 mr-lg-0 ml-lg-4"
                href=""
              >
                <i class="ri-pencil-fill"></i>
              </a>
              <a
                class="icon-circle icon-cirlce--blue mr-4 mr-lg-0 ml-lg-4"
                href=""
              >
                <i class="ri-share-fill"></i>
              </a>
            </div>
          </div>
        </header>

        <div class="business__about wrapper">
          <h3 class="h6">About</h3>
          <p>
            Mchana Coffee Shop specializes in sourcing, roasting and serving
            Africa’s greatest coffees, from Kenya to Ethiopia (and beyond).
            Visit our shop for a tasty cup of coffee, indulgent latte, or a
            delicious and sweet Akara or Chin Chin from our bakery.
          </p>
        </div>

        <div class="business__photos wrapper">
          <h3 class="h6">Photos</h3>
          <ul class="business__photo-gallery">
            <li>
              <img src="https://placeimg.com/480/480/any" />
            </li>
            <li>
              <img src="https://placeimg.com/440/440/any" />
            </li>
            <li>
              <img src="https://placeimg.com/470/480/any" />
            </li>
            <li>
              <img src="https://placeimg.com/460/440/any" />
            </li>
            <li>
              <img src="https://placeimg.com/480/481/any" />
            </li>
            <li>
              <img src="https://placeimg.com/440/442/any" />
            </li>
            <li>
              <img src="https://placeimg.com/470/483/any" />
            </li>
            <li>
              <img src="https://placeimg.com/460/444/any" />
            </li>
            <li>
              <img src="https://placeimg.com/480/485/any" />
            </li>
            <li>
              <img src="https://placeimg.com/440/446/any" />
            </li>
            <li>
              <img src="https://placeimg.com/470/486/any" />
            </li>
            <li>
              <img src="https://placeimg.com/460/447/any" />
            </li>
            <li>
              <img src="https://placeimg.com/480/487/any" />
            </li>
            <li>
              <img src="https://placeimg.com/440/449/any" />
            </li>
            <li>
              <img src="https://placeimg.com/470/488/any" />
            </li>
            <li>
              <img src="https://placeimg.com/460/449/any" />
            </li>
          </ul>
        </div>

        <div class="business__reviews wrapper">
          <rating-preview>
            <i class="ri-star-fill"></i>
            <span>4.9</span>
            <span>100 reviews</span>
          </rating-preview>
          <reviews>
            <review>
              <review-header>
                <review-customer>
                  <figure>
                    <img src="https://placeimg.com/80/80/people" />
                  </figure>
                  <div>
                    <p class="review-customer-name">Lorem Ipsum</p>
                    <p>Jan 27, 2022</p>
                  </div>
                </review-customer>
                <review-rating>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                </review-rating>
              </review-header>
              <review-review>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua
                </p>
              </review-review>
            </review>

            <review>
              <review-header>
                <review-customer class="verified">
                  <figure>
                    <img src="https://placeimg.com/90/90/people" />
                  </figure>
                  <i class="ri-checkbox-circle-fill"></i>
                  <div>
                    <p class="review-customer-name">Dede Mabiaku</p>
                    <p>Jan 27, 2022 • Verified</p>
                  </div>
                </review-customer>
                <review-rating>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                </review-rating>
              </review-header>
              <review-review>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </review-review>
            </review>

            <review>
              <review-header>
                <review-customer class="verified">
                  <figure>
                    <img src="https://placeimg.com/90/90/people" />
                  </figure>
                  <i class="ri-checkbox-circle-fill"></i>
                  <div>
                    <p class="review-customer-name">Dede Mabiaku</p>
                    <p>Jan 27, 2022 • Verified</p>
                  </div>
                </review-customer>
                <review-rating>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                </review-rating>
              </review-header>
              <review-review>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </review-review>
            </review>
          </reviews>

          <a class="btn-outline mt-3" href="" data-modal="reviews-modal">
            Show all <span>XXX</span> reviews
          </a>
        </div>
      </business>
    </Layout>
  );
}

export default Business;
