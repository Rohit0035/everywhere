import React, { useRef, useState } from "react";
import DropCustomerForm from "./DropCustomerForm";
import PickupCustomerForm from "./PickupCustomerForm";
const BookStorageForm = () => {
    return (
        <section className="book-storage-form py-5" id="book">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src="assets/img/common/bookimg.png" alt="" />
                    </div>
                    <div className="col-md-7">
                        <div className="bg-main p-4 rounded" style={{ backgroundColor: '#003158' }}>
                            <h2 className="title text-white">
                                Book Your <span> Storage</span>
                            </h2>
                            <nav>
                                <div
                                    className='nav nav-tabs career-nav-tab'
                                    id='nav-tab'
                                    role='tablist'
                                >
                                    <button
                                        className='nav-link active text-white'
                                        id='nav-vision-tab'
                                        data-bs-toggle='tab'
                                        data-bs-target='#nav-vision'
                                        type='button'
                                        role='tab'
                                        aria-controls='nav-vision'
                                        aria-selected='true'
                                    >
                                        Drop
                                    </button>
                                    <button
                                        className='nav-link text-white'
                                        id='nav-mission-tab'
                                        data-bs-toggle='tab'
                                        data-bs-target='#nav-mission'
                                        type='button'
                                        role='tab'
                                        aria-controls='nav-mission'
                                        aria-selected='false'
                                    >
                                        Pick Up
                                    </button>
                                </div>
                            </nav>
                            <div className='tab-content' id='nav-tabContent'>
                                <div
                                    className='tab-pane fade show active'
                                    id='nav-vision'
                                    role='tabpanel'
                                    aria-labelledby='nav-vision-tab'
                                >
                                    <DropCustomerForm />
                                </div>
                                <div
                                    className='tab-pane fade'
                                    id='nav-mission'
                                    role='tabpanel'
                                    aria-labelledby='nav-mission-tab'
                                >

                                    <PickupCustomerForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookStorageForm;


