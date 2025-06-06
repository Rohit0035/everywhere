import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const BannerThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== BannerThree Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-2 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <img className='bg-img-2' src='assets/img/banner-3/4.png' alt='img' />
        <div className='container custom-container'>
          <div className='row'>
            <div className='col-lg-7 align-self-center'>
              <div className='banner-inner pe-xl-5'>
                <h6
                  className='subtitle '
                  data-aos='fade-right'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  Welcome to Everywhere
                </h6>
                <h2
                  className='title '
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                >

                  {/* Store Smart. Travel <span>Light</span>. */}
                  Safe Space for Your Wheels and Bags – <span>Anytime, Anywhere.</span>
                </h2>
                <p>
                  Everywhere offers secure, convenient Items and vehicle storage with easy pickup and drop services.
                  Whether you're exploring the city, traveling, or in transit — leave your luggage with
                  us and move freely, stress-free.
                </p>
                <a
                  className='mt-3 btn btn-border-base'
                  data-aos='fade-right'
                  data-aos-delay='400'
                  data-aos-duration='1500'
                  href="#book"
                >
                  Book Storage Now<FaPlus />
                </a>

              </div>
            </div>
            <div className='col-lg-5 col-md-10'>
              <div
                className='banner-thumb-3'
                data-aos='fade-left'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <div className='main-img-wrap'>
                  <img
                    className='banner-animate-img banner-animate-img-1 left_image_bounce'
                    src='assets/img/common/lock.png'
                    alt='img'
                  />
                  <img
                    className='banner-animate-img banner-animate-img-2 left_image_bounce'
                    src='assets/img/common/lock.png'
                    alt='lock'
                    width="100px"
                  />
                  <img
                    className='main-img'
                    src='assets/img/common/ringhome.png'
                    alt='img'

                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerThree End ==================*/}
    </>
  );
};

export default BannerThree;
