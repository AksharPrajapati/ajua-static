import React from "react";
import Layout from "../../components/layout";
import ajuaBusinessGraphic from "../../common/images/marketing/ajua-business-graphic.png";
import customers from "../../common/images/marketing/customers.png";
import connect from "../../common/images/marketing/connect.png";
import grow from "../../common/images/marketing/grow.png";

function ForBusiness() {
  return (
    <Layout>
      <div className="market-hero">
        <div className="wrapper">
          <div className="market-hero__content">
            <h1 className="h6 text-white">Ajua for Business</h1>
            <p className="h1 mb-3">Find. Connect. Grow.</p>
            <p className="p-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="d-md-flex mt-4">
              <a
                className="btn btn--no-hover btn--white mr-4 mb-4 mb-md-0"
                href="https://play.google.com/store/apps/details?id=com.mtn.gauge&hl=en_US&gl=US" target="_blank"
              >
                <i className="ri-android-fill" style={{ fontSize: "16px" }}></i>
                <span>Download for Android</span>
              </a>
            </div>
          </div>
          <figure className="market-hero__img">
            <img src={ajuaBusinessGraphic} alt="customers" />
          </figure>
        </div>
      </div>

      <div className="wrapper py-7">
        <div className="media-object">
          <figure className="media-object__media">
            <img src={customers} alt="Find customers" />
          </figure>
          <div className="media-object__content">
            <div>
              <figure className="icon-circle icon-cirlce--blue icon-cirlce--outline mb-3">
                <i className="ri-user-search-fill"></i>
              </figure>
              <h3 className="h3">Find customers</h3>
              <p>
                Quickly and easily create ads to promote your business across
                Facebook and Instagram. Gain useful insights and data about your
                ads to optimize and continue to find more customers and the
                right ones.
              </p>
              <a className="btn btn--no-hover mt-4" href="https://play.google.com/store/apps/details?id=com.mtn.gauge&hl=en_US&gl=US" target="_blank">
                <i className="ri-android-fill" style={{ fontSize: "16px" }}></i>
                <span>Download for Android</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper py-7">
        <div className="media-object media-object--flip">
          <figure className="media-object__media">
            <img src={connect} alt="Connect with people" />
          </figure>
          <div className="media-object__content">
            <div>
              <figure className="icon-circle icon-cirlce--blue icon-cirlce--outline mb-3">
                <i className="ri-service-fill"></i>
              </figure>
              <h3 className="h3">Connect with people</h3>
              <p>
                Create offers and deals that you can send out to your WhatsApp
                contacts. You can also request and share verfieid business
                reviews from your actual customers to build online credibility
                and SEO.
              </p>
              <a className="btn btn--no-hover mt-4" href="https://play.google.com/store/apps/details?id=com.mtn.gauge&hl=en_US&gl=US" target="_blank">
                <i className="ri-android-fill" style={{ fontSize: "16px" }}></i>
                <span>Download for Android</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper py-7">
        <div className="media-object">
          <figure className="media-object__media">
            <img src={grow} alt="Grow your business" />
          </figure>
          <div className="media-object__content">
            <div>
              <figure className="icon-circle icon-cirlce--blue icon-cirlce--outline mb-3">
                <i className="ri-numbers-fill"></i>
              </figure>
              <h3 className="h3">Grow your business</h3>
              <p>
                Powered by WhatsApp and Janja, you can create your own online
                store in no time. You’ll also be able to create automated
                chatbots and manage your entire customer service experience
                without lifting a finger.
              </p>
              <a className="btn btn--no-hover mt-4" href="https://play.google.com/store/apps/details?id=com.mtn.gauge&hl=en_US&gl=US" target="_blank">
                <i className="ri-android-fill" style={{ fontSize: "16px" }}></i>
                <span>Download for Android</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </Layout>
  );
}

export default ForBusiness;
