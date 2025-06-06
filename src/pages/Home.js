import React from "react";
import AboutAreaFour from "../components/AboutAreaFour";
import BannerThree from "../components/BannerThree";
import NavbarThree from "../components/NavbarThree";
import FooterOne from "../components/FooterOne";
import Services from "../components/Services";
import BookStorageForm from "../components/BookStorage";
import HowItWorks from "../components/HowItWorks";
import PricingSection from "../components/PricingSection";
import Reviews from "../components/Reviews";
import CTASection from "../components/CTASection";

const Home = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Banner Four */}
      <BannerThree />

      {/* About Area Four */}
      <AboutAreaFour />

      {/* Service  */}
      <Services/>

      {/* pricing */}
      <PricingSection/>

      {/* book */}
      <BookStorageForm/>

      {/* how to work */}
      <HowItWorks/>

      {/* reviews */}
      <Reviews/>

      {/* cta */}
      <CTASection/>
      {/* Footer one */}
      <FooterOne />
    </>
  );
};

export default Home;
