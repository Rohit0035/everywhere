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
      name: "Rohit Sharma",
      comment:
        "Excellent service! Booked online and dropped off my luggage in 5 minutes. Super helpful for my short layover in Bangalore.",
    },
    {
      name: "Priya Verma",
      comment:
        "Loved the pickup facility. The delivery was on time and my bags were safe. This is the future of luggage storage!",
    },
    {
      name: "Amit Joshi",
      comment:
        "Booked storage for my scooter during my trip. Was impressed with the secure vehicle storage and camera monitoring.",
    },
    {
      name: "Sneha Kapoor",
      comment:
        "Affordable and super easy to use! Booking took seconds and the location was right next to the railway station.",
    },
    {
      name: "Karan Mehta",
      comment:
        "Was traveling with bulky equipment. Glad I found EveryWhere. The oversized item storage was a blessing.",
    },
    {
      name: "Neha Reddy",
      comment:
        "Booked online, dropped my luggage at a hotel partner, picked it back later — smooth and safe experience.",
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
