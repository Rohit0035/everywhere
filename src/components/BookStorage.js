import React, { useRef, useState } from "react";
import {
    FaPlusCircle,
    FaTrashAlt,
    FaCalendarAlt,
    FaClock,
    FaSuitcaseRolling,
} from "react-icons/fa";

/**
 * BookStorageForm – full reservation form for Everywhere bag‑storage
 * Users can:
 *  • enter all required reservation details
 *  • upload multiple images (e.g., bag photos, ID) via a plus button
 *  • remove any uploaded image before submitting
 */
const BookStorageForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        dropOffDate: "",
        dropOffTime: "",
        pickUpDate: "",
        pickUpTime: "",
        bags: 1,
        bagSize: "Regular",
        pickupDrop: false,
        notes: "",
    });

    const [images, setImages] = useState([]); // { file, preview }
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleAddImage = () => {
        if (fileInputRef.current) fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));
        setImages((prev) => [...prev, ...newImages]);
    };

    const handleRemoveImage = (idx) => {
        setImages((prev) => prev.filter((_, i) => i !== idx));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: send formData & images to backend or context
        console.log("Booking submitted", formData, images);
    };

    return (
        <section className="book-storage-form py-5" id="book">
            <div className="container custom-container">
                <div class="row">
                    <div class="col-md-5">
                        <img src="assets/img/common/bookimg.png" alt="" />
                    </div>
                    <div class="col-md-7">
                        <div class="bg-main p-4 rounded" style={{ backgroundColor: '#003158' }}>
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
                                        id='nav-mission-tab'
                                        data-bs-toggle='tab'
                                        data-bs-target='#nav-mission'
                                        type='button'
                                        role='tab'
                                        aria-controls='nav-mission'
                                        aria-selected='true'
                                    >
                                        Pick Up
                                    </button>
                                    <button
                                        className='nav-link text-white'
                                        id='nav-vision-tab'
                                        data-bs-toggle='tab'
                                        data-bs-target='#nav-vision'
                                        type='button'
                                        role='tab'
                                        aria-controls='nav-vision'
                                        aria-selected='false'
                                    >
                                        Drop
                                    </button>
                                </div>
                            </nav>
                            <div className='tab-content' id='nav-tabContent'>
                                <div
                                    className='tab-pane fade show active'
                                    id='nav-mission'
                                    role='tabpanel'
                                    aria-labelledby='nav-mission-tab'
                                >

                                    <form className="row g-3 mt-3" onSubmit={handleSubmit}>
                                        {/* Personal details */}
                                        <div className="col-md-6">
                                            <label className="form-label text-white">Full Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label  text-white ">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label  text-white">Phone</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label  text-white">Storage Location</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                placeholder="e.g., Times Square NYC"
                                                required
                                            />
                                        </div>

                                        {/* Date & time */}
                                        {/* <div className="col-md-3">
                                            <label className="form-label  text-white">
                                                <FaCalendarAlt className="me-1" /> Drop‑off Date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="dropOffDate"
                                                value={formData.dropOffDate}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label  text-white">
                                                <FaClock className="me-1" /> Drop‑off Time
                                            </label>
                                            <input
                                                type="time"
                                                className="form-control"
                                                name="dropOffTime"
                                                value={formData.dropOffTime}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div> */}
                                        <div className="col-md-4">
                                            <label className="form-label  text-white">
                                                <FaCalendarAlt className="me-1" /> Pickup Date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="pickUpDate"
                                                value={formData.pickUpDate}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label  text-white">
                                                <FaClock className="me-1" /> Pickup Time
                                            </label>
                                            <input
                                                type="time"
                                                className="form-control"
                                                name="pickUpTime"
                                                value={formData.pickUpTime}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* Bag details */}
                                        <div className="col-md-4">
                                            <label className="form-label  text-white">
                                                <FaSuitcaseRolling className="me-1" /> Number of Items
                                            </label>
                                            <input
                                                type="number"
                                                min="1"
                                                className="form-control"
                                                name="bags"
                                                value={formData.bags}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        {/* <div className="col-md-3">
                                            <label className="form-label  text-white">Bag Size</label>
                                            <select
                                                className="form-select"
                                                name="bagSize"
                                                value={formData.bagSize}
                                                onChange={handleChange}
                                            >
                                                <option>Small</option>
                                                <option>Regular</option>
                                                <option>Large</option>
                                                <option>Oversized</option>
                                            </select>
                                        </div> */}
                                        {/* <div className="col-md-3 d-flex align-items-center">
                                            <div className="form-check mt-4">
                                                <input
                                                    className="form-check-input text-white"
                                                    type="checkbox"
                                                    name="pickupDrop"
                                                    checked={formData.pickupDrop}
                                                    onChange={handleChange}
                                                    id="pickupDrop"
                                                />
                                                <label className="form-check-label  text-white" htmlFor="pickupDrop">
                                                    Need Pickup / Drop‑off Service
                                                </label>
                                            </div>
                                        </div> */}

                                        {/* Notes */}
                                        <div className="col-12">
                                            <label className="form-label text-white">Additional Notes</label>
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                name="notes"
                                                value={formData.notes}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>

                                        {/* Image uploader */}
                                        <div className="col-12">
                                            <label className="form-label d-block mb-2  text-white"> Items / vehicle  Photos</label>
                                            <div className="d-flex flex-wrap gap-3 align-items-center">
                                                {/* Thumbnails */}
                                                {images.map((img, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="position-relative border rounded overflow-hidden"
                                                        style={{ width: 90, height: 90 }}
                                                    >
                                                        <img
                                                            src={img.preview}
                                                            alt="preview"
                                                            className="w-100 h-100 object-fit-cover"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="btn-sm btn-danger position-absolute top-0 end-0 p-1 height-0 rounded-0 line-hegiht-0"
                                                            onClick={() => handleRemoveImage(idx)}
                                                            style={{ border: 'unset' }}
                                                            aria-label="Remove image"
                                                        >
                                                            <FaTrashAlt color="#fa1905" />
                                                        </button>
                                                    </div>
                                                ))}

                                                {/* Plus button */}
                                                <button
                                                    type="button"
                                                    className=" btn-outline-light  border-light d-flex flex-column justify-content-center align-items-center rounded-0"
                                                    style={{ width: 90, height: 90 }}
                                                    onClick={handleAddImage}
                                                >
                                                    <FaPlusCircle size={32} />
                                                    <span className="small">Add</span>
                                                </button>
                                            </div>
                                            {/* Hidden file input */}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                ref={fileInputRef}
                                                className="d-none"
                                                onChange={handleImageChange}
                                            />
                                        </div>

                                        <div className="col-12 text-center mt-4">
                                            <button type="submit" className="btn btn-border-base mt-0 aos-init aos-animate text-light border-light">
                                                Confirm Booking
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div
                                    className='tab-pane fade'
                                    id='nav-vision'
                                    role='tabpanel'
                                    aria-labelledby='nav-vision-tab'
                                >
                                    <form className="row g-3 mt-3" onSubmit={handleSubmit}>
                                        {/* Personal details */}
                                        <div className="col-md-6">
                                            <label className="form-label text-white">Full Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label  text-white ">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label  text-white">Phone</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label  text-white">Storage Location</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                placeholder="e.g., Times Square NYC"
                                                required
                                            />
                                        </div>

                                        {/* Date & time */}
                                        <div className="col-md-3">
                                            <label className="form-label  text-white">
                                                <FaCalendarAlt className="me-1" /> Drop‑off Date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="dropOffDate"
                                                value={formData.dropOffDate}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label  text-white">
                                                <FaClock className="me-1" /> Drop‑off Time
                                            </label>
                                            <input
                                                type="time"
                                                className="form-control"
                                                name="dropOffTime"
                                                value={formData.dropOffTime}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label  text-white">
                                                <FaCalendarAlt className="me-1" /> Pickup Date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="pickUpDate"
                                                value={formData.pickUpDate}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label  text-white">
                                                <FaClock className="me-1" /> Pickup Time
                                            </label>
                                            <input
                                                type="time"
                                                className="form-control"
                                                name="pickUpTime"
                                                value={formData.pickUpTime}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* Bag details */}
                                        <div className="col-md-3">
                                            <label className="form-label  text-white">
                                                <FaSuitcaseRolling className="me-1" /> Number of Bags
                                            </label>
                                            <input
                                                type="number"
                                                min="1"
                                                className="form-control"
                                                name="bags"
                                                value={formData.bags}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label  text-white">Bag Size</label>
                                            <select
                                                className="form-select"
                                                name="bagSize"
                                                value={formData.bagSize}
                                                onChange={handleChange}
                                            >
                                                <option>Small</option>
                                                <option>Regular</option>
                                                <option>Large</option>
                                                <option>Oversized</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 d-flex align-items-center">
                                            <div className="form-check mt-4">
                                                <input
                                                    className="form-check-input text-white"
                                                    type="checkbox"
                                                    name="pickupDrop"
                                                    checked={formData.pickupDrop}
                                                    onChange={handleChange}
                                                    id="pickupDrop"
                                                />
                                                <label className="form-check-label  text-white" htmlFor="pickupDrop">
                                                    Need Pickup / Drop‑off Service
                                                </label>
                                            </div>
                                        </div>

                                        {/* Notes */}
                                        <div className="col-12">
                                            <label className="form-label text-white">Additional Notes</label>
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                name="notes"
                                                value={formData.notes}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>

                                        {/* Image uploader */}
                                        <div className="col-12">
                                            <label className="form-label d-block mb-2  text-white">Bag / ID Photos</label>
                                            <div className="d-flex flex-wrap gap-3 align-items-center">
                                                {/* Thumbnails */}
                                                {images.map((img, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="position-relative border rounded overflow-hidden"
                                                        style={{ width: 90, height: 90 }}
                                                    >
                                                        <img
                                                            src={img.preview}
                                                            alt="preview"
                                                            className="w-100 h-100 object-fit-cover"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="btn-sm btn-danger position-absolute top-0 end-0 p-1 height-0 rounded-0 line-hegiht-0"
                                                            onClick={() => handleRemoveImage(idx)}
                                                            style={{ border: 'unset' }}
                                                            aria-label="Remove image"
                                                        >
                                                            <FaTrashAlt color="#fa1905" />
                                                        </button>
                                                    </div>
                                                ))}

                                                {/* Plus button */}
                                                <button
                                                    type="button"
                                                    className=" btn-outline-light  border-light d-flex flex-column justify-content-center align-items-center rounded-0"
                                                    style={{ width: 90, height: 90 }}
                                                    onClick={handleAddImage}
                                                >
                                                    <FaPlusCircle size={32} />
                                                    <span className="small">Add</span>
                                                </button>
                                            </div>
                                            {/* Hidden file input */}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                ref={fileInputRef}
                                                className="d-none"
                                                onChange={handleImageChange}
                                            />
                                        </div>

                                        <div className="col-12 text-center mt-4">
                                            <button type="submit" className="btn btn-border-base mt-0 aos-init aos-animate text-light border-light">
                                                Confirm Booking
                                            </button>
                                        </div>
                                    </form>
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


