import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ThankYouPage = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="d-flex justify-content-center align-items-center vh-100">
                            <div className="text-center p-5 bg-white rounded-4 shadow-lg">
                                {/* Success Icon */}
                                <FaCheckCircle className="text-success mb-4" size={100} />

                                {/* Heading */}
                                <h2 className="fw-bold text-dark mb-3">
                                    Storage Space Booked Successfully!
                                </h2>

                                {/* Description */}
                                <p className="text-muted fs-5 mb-4">
                                    Thank you for choosing our storage services. Your booking has been
                                    confirmed and a secure space has been allocated for you.
                                    You’ll receive a confirmation email with the booking details shortly.
                                </p>

                                {/* Back Button */}
                                <a href="/" className="btn btn-success btn-lg px-4 rounded-pill">
                                    ← Back to Home
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>

    );
};

export default ThankYouPage;
