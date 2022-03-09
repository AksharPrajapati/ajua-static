import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import BusinessFallback from "../../common/images/fallback/business-fallback.jpeg";
import UserFallback from "../../common/images/fallback/user-fallback.png";

function Business() {
  const { businessId } = useParams();
  const [merchant, setMerchant] = useState([]);
  const [merchantReviews, setMerchantReviews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://merchant-api.ajua.com/v0/merchant-profile?merchant_id=${businessId}`,
        {
          headers: {
            Authentication: "52516d27-26b8-430f-b729-5c15fb999382",
          },
        }
      )
      .then((res) => {
        setMerchant(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `https://merchant-api.ajua.com/v0/get_reviews?merchant_id=${businessId}`,
        {
          headers: {
            Authentication: "52516d27-26b8-430f-b729-5c15fb999382",
          },
        }
      )
      .then((res) => {
        setMerchantReviews(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [businessId]);

  return (
    <Layout>
      <business>
        <header class="business__header">
          <figure class="business__featured-image">
            <img
              src={
                merchant?.cover_photo_web
                  ? `data:image/png;base64,${merchant?.cover_photo_web}`
                  : BusinessFallback
              }
            />
          </figure>

          <div class="business__header-content wrapper">
            <a class="business__logo" href="">
              <img
                src={
                  merchant?.profile_photo_web
                    ? `data:image/png;base64,${merchant?.profile_photo_web}`
                    : UserFallback
                }
              />
            </a>
            <h3>{merchant?.business_name}</h3>

            <div class="business__header__details">
              <rating-preview>
                <i class="ri-star-fill"></i>
                <span>{merchant?.average_rating || 0}</span>
                <a href="#">{`${merchant?.total_reviews || 0} reviews`}</a>
              </rating-preview>

              <business-category>
                <span>
                  {merchant?.ajua_account_details?.industry
                    ? `[ ${merchant?.ajua_account_details?.industry} ]`
                    : ""}
                </span>
              </business-category>

              <address>
                {merchant?.ajua_account_details?.state
                  ? `${merchant?.ajua_account_details?.state || ""}, ${
                      merchant?.ajua_account_details?.country || ""
                    }`
                  : merchant?.ajua_account_details?.country || ""}
              </address>
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
          <p>{merchant?.business_description}</p>
        </div>

        {/* <div class="business__photos wrapper">
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
        </div> */}

        <div class="business__reviews wrapper">
          <rating-preview>
            <i class="ri-star-fill"></i>
            <span>{merchant?.average_rating || 0}</span>
            <span>{`${merchant?.total_reviews || 0} reviews`}</span>
          </rating-preview>
          <reviews>
            {merchantReviews[0]?.reviews?.map((review) => {
              return (
                <review>
                  <review-header>
                    <review-customer>
                      <figure>
                        <img src="https://placeimg.com/80/80/people" />
                      </figure>
                      <div>
                        <p class="review-customer-name">{review?.name}</p>
                        <p>
                          {new Date(
                            review?.created_at["$date"]
                          ).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }) || "-"}
                        </p>
                      </div>
                    </review-customer>
                    <review-rating>
                      {[...Array(+review?.rating_value).keys()].map(() => (
                        <i class="ri-star-fill"></i>
                      ))}
                      {[...Array(5 - +review?.rating_value)].map(() => (
                        <i class="ri-star-line"></i>
                      ))}
                    </review-rating>
                  </review-header>
                  <review-review>
                    <p>{review?.review}</p>
                  </review-review>
                </review>
              );
            })}
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
