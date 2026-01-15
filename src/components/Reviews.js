import React from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";
import Slider from "react-slick";

const Reviews = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, dots: true },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 575,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const reviews = [
    {
      name: "Ankit Malviya",
      comment:
        "Very useful service in Indore! Dropped my luggage near Rajwada before exploring the city. Smooth process and polite staff.",
    },
    {
      name: "Pooja Jain",
      comment:
        "I had a late train from Indore Junction, so I stored my bags safely and enjoyed shopping at Sarafa Bazaar stress-free.",
    },
    {
      name: "Rahul Patidar",
      comment:
        "Booked online and stored my luggage near Vijay Nagar. Everything was secure and the pickup was super quick.",
    },
    {
      name: "Neha Sharma",
      comment:
        "Affordable and reliable luggage storage in Indore. Helped me a lot during my short business trip.",
    },
    {
      name: "Saurabh Verma",
      comment:
        "I used their service near Devi Ahilya Bai Holkar Airport. Easy booking, safe storage, and on-time delivery.",
    },
    {
      name: "Kritika Agrawal",
      comment:
        "Great experience! Stored my bags near Palasia while attending an event. Highly recommended for travelers in Indore.",
    },
  ];

  return (
    <div className="testimonial-area py-5 mb-5 bg-white" id="reviews">
      <div className="container custom-container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title text-center">
              <h6 className="sub-title">Our Testimonial</h6>
              <h2 className="title">
                What <span>Customers</span> Says About Us
              </h2>
            </div>
          </div>
        </div>

        <div className="testimonial-slider-2 slider-control-dots">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div className="item" key={index}>
                <div className="single-testimonial-inner style-2 border rounded shadow-sm p-4">
                  <div className="d-flex align-items-center mb-3">
                    <FaUserCircle size={50} color="#008080" className="me-3" />
                    <div>
                      <h5 className="mb-0">{review.name}</h5>
                      <div className="ratting-inner">
                        <span className="me-1">Rating:</span>
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                      </div>
                    </div>
                  </div>
                  <p className="designation mb-0 text-muted">{review.comment}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
