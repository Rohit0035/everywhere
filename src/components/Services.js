import React from "react";
import { FaArrowRight, FaSuitcase, FaTruckPickup, FaWarehouse, FaClock, FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceAreaFour = () => {
    return (
        <>
            {/*=================== service area start ===================*/}
            <div
                className='service-area bg-cover py-5' id="services"
                style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
            >
                <div className='container custom-container'>
                    <div className='row justify-content-center'>
                        <div className='col-xl-6 col-lg-8'>
                            <div className='section-title text-center'>
                                <h6 className='sub-title'>What We Offer</h6>
                                <h2 className='title'>Our <span>Services</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xl-4 col-md-6'>
                            <div className='single-work-process-inner bg-white' data-aos='fade-right'
                                data-aos-delay='250'
                                data-aos-duration='1500'>
                                <div className='thumb mb-2'><FaSuitcase size={40} color="#008080" /></div>
                                <div className='details'>
                                    <h5 className='mb-2'> Items and vehicle Storage</h5>
                                    <p className='content mb-3'>Convenient and secure bag storage at our trusted partner locations while you explore worry-free.</p>
                                    {/* <Link className='read-more-text' to='/service-details'>Read More <FaArrowRight /></Link> */}
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6'>
                            <div className='single-work-process-inner bg-white' data-aos="fade-up">
                                <div className='thumb mb-2'><FaWarehouse size={40} color="#008080" /></div>
                                <div className='details'>
                                    <h5 className='mb-2'>Long-term Storage</h5>
                                    <p className='content mb-3'>Affordable and safe long-term luggage storage options with flexible plans to suit your needs.</p>
                                    {/* <Link className='read-more-text' to='/service-details'>Read More <FaArrowRight /></Link> */}
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6'>
                            <div className='single-work-process-inner bg-white' data-aos='fade-left'
                                data-aos-delay='250'
                                data-aos-duration='1500'>
                                <div className='thumb mb-2'><FaClock size={40} color="#008080" /></div>
                                <div className='details'>
                                    <h5 className='mb-2'>Short-term Storage</h5>
                                    <p className='content mb-3'>Perfect for day trips or layovers – leave your bags safely for a few hours or days.</p>
                                    {/* <Link className='read-more-text' to='/service-details'>Read More <FaArrowRight /></Link> */}
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6'>
                            <div className='single-work-process-inner bg-white' data-aos='fade-right'
                                data-aos-delay='250'
                                data-aos-duration='1500'>
                                <div className='thumb mb-2'><FaSuitcase size={40} color="#008080" /></div>
                                <div className='details'>
                                    <h5 className='mb-2'>Travel Essentials</h5>
                                    <p className='content mb-3'>Forgot something? We offer handy travel products and essentials, hygiene kits.</p>
                                    {/* <Link className='read-more-text' to='/service-details'>Read More <FaArrowRight /></Link> */}
                                </div>
                            </div>
                        </div>


                        <div className='col-xl-4 col-md-6'>
                            <div className='single-work-process-inner bg-white' data-aos="fade-up" >
                                <div className='thumb mb-2'><FaTruckPickup size={40} color="#008080" /></div>
                                <div className='details'>
                                    <h5 className='mb-2'>Pickup & Drop-off</h5>
                                    <p className='content mb-3'>We offer door-to-door pickup and drop-off of your luggage to simplify your travel plans.</p>
                                    {/* <Link className='read-more-text' to='/service-details'>Read More <FaArrowRight /></Link> */}
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6'>
                            <div className='single-work-process-inner bg-white' data-aos='fade-left'
                                data-aos-delay='250'
                                data-aos-duration='1500'>
                                <div className='thumb mb-2'><FaMapMarkedAlt size={40} color="#008080" /></div>
                                <div className='details'>
                                    <h5 className='mb-2'>Real-time Tracking</h5>
                                    <p className='content mb-3'>Track your luggage in real-time with our smart tracking technology for complete peace of mind.</p>
                                    {/* <Link className='read-more-text' to='/service-details'>Read More <FaArrowRight /></Link> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* =================== service area end ===================*/}
        </>
    );
};

export default ServiceAreaFour;