import React from "react";
import { FaRegClipboard, FaMapMarkerAlt, FaLock, FaCarSide } from "react-icons/fa";

const steps = [
    {
        icon: <FaRegClipboard size={40} color="#008080" className="mb-3" />,
        title: "Book Your Storage Online",
        desc: "Secure your space in minutes! Just fill in your details — including your drop-off & pick-up dates, number of bags, and location.",
    },
    {
        icon: <FaMapMarkerAlt size={40} color="#008080" className="mb-3" />,
        title: "Drop Off or Request Pickup",
        desc: "Bring your items to our partner location or opt for pickup at your doorstep. We offer flexible options to suit your travel needs.",
    },
    {
        icon: <FaLock size={40} color="#008080" className="mb-3" />,
        title: "Items are Safely Stored",
        desc: "We store your luggage or vehicle securely with 24/7 monitoring and digital check-in. Each item is tagged and protected — safety is our priority.",
    },
    {
        icon: <FaCarSide size={40} color="#008080" className="mb-3" />,
        title: "Pick Up When You're Ready",
        desc: "Come back to collect your belongings at the scheduled time, or request delivery to your next stop.",
    }
];

const HowItWorks = () => {
    return (
        <section className="py-5 bg-light" id="howitwork">
            <div className="container custom-container">
                <div className="section-title text-center mb-5">
                    <h6 className="sub-title">Store Your Items in 4 Easy Steps</h6>
                    <h2 className="title">How It <span>Works</span></h2>
                </div>
                <div className="row">
                    {steps.map((step, index) => (
                        <div className="col-xl-3 col-md-6 mb-4" key={index}>
                            <div className={`shadow p-4 bg-white rounded h-100 ${index % 2 !== 0 ? 'mt-md-5 mt-0' : ''}`}>
                                <div className="text-start">
                                    {step.icon}
                                    <h5 className="fw-bold">{step.title}</h5>
                                </div>
                                <p className="mt-2">{step.desc}</p>
                                {/* <small className="text-muted d-block">{step.note}</small> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
