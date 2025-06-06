import React, { useEffect } from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const FooterOne = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };



  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className='footer-area  bg-cover mt-0 pt-5'>
        <div className='container custom-container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='assets/img/common/logo.jpg' alt='img' class="rounded" />
                </div>
                <div className='details'>
                  <p>
                    Everywhere offers secure, convenient items and vehicle storage with easy pickup and drop services.
                  </p>
                  <ul className='social-media'>
                    <li>
                      <a href=''>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href=''>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href=''>
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href=''>
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Useful Links</h4>
                <ul>
                  <li>
                    <Link to='/'>
                      <FaArrowRight /> Home
                    </Link>
                  </li>
                  <li>
                    <a href="#about">
                      <FaArrowRight /> About
                    </a>
                  </li>
                  <li>
                    <a href="#services">
                      <FaArrowRight /> Service
                    </a>
                  </li>
                  <li>
                    <a href="#howitwork">
                      <FaArrowRight /> How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#pricing">
                      <FaArrowRight /> Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>Contact us</h4>
                <ul>
                  <li>
                    <div className='media'>
                      <div className='media-body align-self-center'>
                        <div className='post-info mb-2'>
                          <FaPhone size={25} />
                          <span>(91) 8349107395</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='media'>
                      <div className='media-body align-self-center'>
                        <div className='post-info mb-2'>
                          <IoMailOpenOutline size={25} />
                          <span>everywhere@everywhere.com </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='media'>
                      <div className='media-body align-self-center'>
                        <div className='post-infopr-0 mb-2'>
                          <div className='post-info mb-2'>
                            <IoLocationOutline size={25} />
                            <span> Lorem Ipsum </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <p>© everywhere 2025 | All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="whatsicon">
        <Link to="https://api.whatsapp.com/send/?phone=8349107395&text&type=phone_number&app_absent=0">
          <FaWhatsapp size={45} />
        </Link>
      </div>

      <div className="socialicon">
        <ul className=''>
          <li>
            <a href='https://www.facebook.com/share/EttKVKC1FpbzVYSE/?mibextid=qi2'>
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fclouebytes'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/clouebytes/?igsh=MWQzZ25weDhucnozMA%3D%3D'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/company/clouebytes/'>
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
