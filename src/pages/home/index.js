import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import localBusinessImage from "../../common/images/marketing/local-business.png";
import ReviewsImage from "../../common/images/marketing/reviews.png";
import WhatsAppImage from "../../common/images/marketing/whatsapp.svg";
import BusinessFallback from "../../common/images/fallback/business-fallback.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://merchant-api.ajua.com/v0/fetch_merchants", {
        headers: {
          Authentication: "52516d27-26b8-430f-b729-5c15fb999382",
        },
      })
      .then((res) => {
        setMerchants(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (businessId) => {
    navigate(`business/${businessId}`);
  };

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
          {!loading ? (
            merchants.map((item, index) => {
              return (
                <business-preview
                  key={index}
                  onClick={() => handleClick(item?.id["$oid"])}
                >
                  <figure className="business-preview__featured-image">
                    <img
                      // src={item?.ajua_account_details?.profile_photo}
                      src={
                        item?.cover_photo_web?.length
                          ? `data:image/png;base64,${item?.cover_photo_web}`
                          : BusinessFallback
                      }
                      alt={item?.full_name}
                    />
                  </figure>

                  <div className="business-preview__content">
                    <h4>{item?.business_name}</h4>

                    <rating-preview>
                      <i className="ri-star-fill"></i>
                      <span>{item?.average_rating || 0}</span>
                      <a href="#reviews">{`${
                        item?.total_reviews || 0
                      } reviews`}</a>
                    </rating-preview>

                    <business-category>
                      <span>
                        {item?.ajua_account_details?.industry
                          ? `[ ${item?.ajua_account_details?.industry} ]`
                          : ""}
                      </span>
                    </business-category>

                    <address>
                      {item?.ajua_account_details?.state
                        ? `${item?.ajua_account_details?.state || ""}, ${
                            item?.ajua_account_details?.country || ""
                          }`
                        : item?.ajua_account_details?.country || ""}
                    </address>
                  </div>
                </business-preview>
              );
            })
          ) : (
            <span style={{ margin: "5em 40em" }}>Loading...</span>
          )}

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
    </Layout>
  );
}

export default Home;
