import React from "react";
import { FaArrowRight, } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutAreaFour = () => {
  return (
    <>
      {/* =============== About Area Four Start ===============*/}
      <div className="about-area py-5" id="about">
        <div className="container custom-container">
          <div className="row">
            {/* Image Side */}
            <div className="col-lg-6">
              <div
                className="about-thumb-inner"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <img
                  className=""
                  src="assets/img/common/abt-home.png"
                  alt="Decorative luggage graphic"
                />
                {/* <img
                  className="main-img m-md-4"
                  src="assets/img/about/13.png"
                  alt="Travellers storing bags"
                /> */}
              </div>
            </div>

            {/* Content Side */}
            <div
              className="col-lg-6 align-self-center"
              data-aos="fade-left"
              data-aos-delay="250"
              data-aos-duration="1500"
            >
              <div className="section-title mt-5 mt-lg-0 mb-0">
                <h6 className="sub-title">ABOUT EVERYWHERE</h6>
                <h2 className="title">
                  Reimagining Travel Freedom with <span>Smart Storage</span> Solutions
                </h2>
                <p className="content mb-xl-4">
                  Everywhere is the next‑generation luggage‑storage network built for modern explorers. Our IoT‑enabled lockers, AI‑powered security, and on‑demand pickup & drop let you roam hands‑free while your belongings stay protected and traceable in real time.
                </p>

                <a
                  className='btn btn-border-base mt-0 '
                  data-aos='fade-right'
                  data-aos-delay='400'
                  data-aos-duration='1500'
                  href="#book"
                >
                  Book Storage <FaArrowRight />
                </a>

                {/* Our Mission */}
                {/* <div className="media box-shadow p-3 border-radius-5 mb-3">
                  <div className="media-left me-3">
                    <RiSecurePaymentFill size={50}/>
                  </div>
                  <div className="media-body">
                    <div className="single-progressbar">
                      <h5>Our Mission</h5>
                      <p className="mb-0">
                        To redefine personal storage by making it smarter, safer, and more accessible—
                        with seamless pickup, real-time tracking, and secure storage at your fingertips.
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* Our Vision */}
                {/* <div className="media box-shadow p-3 border-radius-5 mb-3">
                  <div className="media-left me-3">
                    <RiSecurePaymentFill size={50}/>
                  </div>
                  <div className="media-body">
                    <div className="single-progressbar">
                       <h5>Our Vision</h5>
                      <p className="mb-0">
                        To become the go-to storage ecosystem for the digital-first generation—
                        delivering convenience, trust, and innovation in every interaction.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== About Area Four End ===============*/}
    </>
  );
};

export default AboutAreaFour;
