import React from "react";
import Marquee from "react-fast-marquee";
const BrandAreaOne = () => {
  return (
    <div className='about-area bg-gray pt-5 pb-5'>
      <div className='container'>
        <div className='client-slider'>
          <Marquee gradient={false}>
            <div className='thumb'>
              <img src='assets/img/client/client-1.svg' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/client-2.svg' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/client-3.svg' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/client-4.svg' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/client-5.svg' alt='img' />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BrandAreaOne;
