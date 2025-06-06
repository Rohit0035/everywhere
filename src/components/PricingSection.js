import React from 'react';
import { FaSuitcaseRolling, FaBoxOpen, FaCarSide, FaCheckCircle } from 'react-icons/fa';

const pricingPlans = [
    {
        icon: <FaSuitcaseRolling size={40} color="#008080" className="mb-3" />,
        title: "Standard Luggage",
        price: "₹99 / day",
        desc: "Perfect for backpacks, suitcases, and regular cabin bags.",
        features: [
            "First 2 hours FREE",
            "Safe storage with QR tagging",
            "24/7 CCTV Surveillance"
        ]
    },
    {
        icon: <FaBoxOpen size={40} color="#008080" className="mb-3" />,
        title: "Oversized Items",
        price: "₹149 / day",
        desc: "Ideal for large suitcases, instruments, strollers, etc.",
        features: [
            "Instant check-in",
            "Extra space security",
            "Flexible pickup options"
        ]
    },
    {
        icon: <FaCarSide size={40} color="#008080" className="mb-3" />,
        title: "Vehicle Storage",
        price: "₹299 / day",
        desc: "Safe & covered parking for two-wheelers or four-wheelers.",
        features: [
            "24/7 guarded space",
            "Vehicle inspection logs",
            "Daily maintenance check"
        ]
    }
];

const PricingSection = () => {
    return (
        <section className="py-5" id="pricing" style={{ backgroundColor: '#7cbfc92e' }}>
            <div className="container custom-container">

                <div className="section-title text-center mb-5">
                    <h6 className="sub-title">Affordable Plans</h6>
                    <h2 className="title">Simple & <span>Transparent Pricing</span></h2>
                    <p className="text-muted">Pay only for what you store, with no hidden charges.</p>
                </div>

                <div className="row">
                    {pricingPlans.map((plan, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card shadow-lg h-100 border-0" data-aos='fade-left'
                                data-aos-delay='250'
                                data-aos-duration='1500'>
                                <div className="card-body text-center">
                                    {plan.icon}
                                    <h5 className="fw-bold mt-2">{plan.title}</h5>
                                    <h4 className="my-2 fs-1" style={{ color: '#008080' }}>{plan.price}</h4>
                                    <p>{plan.desc}</p>
                                    <ul className="list-unstyled text-start mt-3">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="mb-2"><FaCheckCircle size={18} className='text-success'/> {feature}</li>
                                        ))}
                                    </ul>
                                    <a  href="#book" className="btn btn-border-base  aos-init aos-animate mt-4">Book Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
