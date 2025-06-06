import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarThree = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const menuActive = () => setActive(!active);
  const searchActive = () => setSearchShow(!searchShow);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Search overlay */}
      <div
        onClick={searchActive}
        className={searchShow ? "body-overlay active" : "body-overlay"}
        id='body-overlay'
      ></div>

      {/* Navbar Start */}
      <nav
        className={`navbar navbar-area navbar-area-2 navbar-expand-lg ${
          isSticky ? "sticky-nav" : ""
        }`}
      >
        <div className='container nav-container custom-container'>
          <div className='responsive-mobile-menu'>
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              aria-label='Toggle navigation'
            >
              <span className='icon-left' />
              <span className='icon-right' />
            </button>
          </div>
          <div className='logo'>
            <Link to='/'>
              <img src='assets/img/common/logo.png' alt='img' />
            </Link>
          </div>
          <div
            className={
              active
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
            id='itech_main_menu'
          >
            <ul className='navbar-nav menu-open text-lg-end'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#services'>Services</a>
              </li>
              <li>
                <a href='#howitwork'>How It Works</a>
              </li>
              <li>
                <a href='#pricing'>Pricing</a>
              </li>
            </ul>
          </div>
          <div className='nav-right-part nav-right-part-desktop d-lg-inline-flex align-item-center'>
            <a className='btn btn-border-base' href="#book">
              Book Storage Now <FaPlus />
            </a>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
};

export default NavbarThree;
