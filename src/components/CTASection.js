import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="relative py-5 px-6 text-white overflow-hidden" style={{backgroundColor:'#005c7b'}}>
      <div className="container mx-auto text-center max-w-3xl z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
          Simplify Your Journey, Store With Ease
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 text-white">
          Secure, affordable, and accessible storage for luggage, bikes, and more — just a click away.
        </p>
        <a
          href="#book"
          className="btn btn-border-base mt-3 aos-init aos-animate text-light border-light"
        >
          Book Storage Now <FaArrowRight />
        </a>
      </div>

      {/* Decorative Background Circles */}
      <div className="absolute top-[-80px] left-[-80px] w-64 h-64 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-64 h-64 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};

export default CTASection;
