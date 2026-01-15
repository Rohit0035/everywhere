import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaSuitcaseRolling,
  FaTrashAlt,
  FaPlusCircle,
} from "react-icons/fa";
import { registerDropOrder } from "../services/apiService";

const DropCustomerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    storageLocation: "",
    dropOffDate: "",
    dropOffTime: "",
    pickupDate: "",
    pickupTime: "",
    noOfItems: 1,
    itemSize: "Regular",
    isPickupServiceNeeded: false,
    additionalNotes: "",
  });

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  const handleRemoveImage = (idx) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send the data as JSON
      console.log("Submitting form data:", formData);
      const response = await registerDropOrder(formData);
      console.log("✅ Success:", response);

      navigate("/thankyou"); // Navigate to the thank you page
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      alert("Error: " + (err.response?.data?.error || err.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="row g-3 mt-3" onSubmit={handleSubmit}>
      {/* Personal details */}
      <div className="col-md-6">
        <label className="form-label text-white">Full Name</label>
        <input
          type="text"
          className="form-control"
          name="fullName"
          value={formData.fullName}
          placeholder="John Doe"
          onChange={handleChange}
          required
          pattern="[A-Za-z ]{2,}"
          title="Please enter a valid name (letters and spaces only, minimum 2 characters)"
          minLength="2"
        />
      </div>
      <div className="col-md-6">
        <label className="form-label text-white">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          placeholder="john.doe@gmail.com"
          onChange={handleChange}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
        />
      </div>
      <div className="col-md-6">
        <label className="form-label text-white">Phone</label>
        <input
          type="tel"
          className="form-control"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit mobile number"
          maxLength="10"
          placeholder="e.g., 9876543210"
        />
      </div>
      <div className="col-md-6">
        <label className="form-label text-white">Storage Location</label>
        <select
          className="form-select"
          name="storageLocation"
          value={formData.storageLocation}
          onChange={handleChange}
          required
        >
          <option value="">-- Select a location --</option>
          <option value="Sagar, Madhya Pradesh">Sagar, Madhya Pradesh</option>
          <option value="Damoh, Madhya Pradesh">Damoh, Madhya Pradesh</option>
          <option value="Indore, Madhya Pradesh">Indore, Madhya Pradesh</option>
          <option value="Bhopal, Madhya Pradesh">Bhopal, Madhya Pradesh</option>
        </select>
      </div>

      {/* Date & time */}
      <div className="col-md-3">
        <label className="form-label text-white">
          <FaCalendarAlt className="me-1" /> Drop-off Date
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
        <label className="form-label text-white">
          <FaClock className="me-1" /> Drop-off Time
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
        <label className="form-label text-white">
          <FaCalendarAlt className="me-1" /> Pickup Date
        </label>
        <input
          type="date"
          className="form-control"
          name="pickupDate"
          value={formData.pickupDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-3">
        <label className="form-label text-white">
          <FaClock className="me-1" /> Pickup Time
        </label>
        <input
          type="time"
          className="form-control"
          name="pickupTime"
          value={formData.pickupTime}
          onChange={handleChange}
          required
        />
      </div>

      {/* Bag details */}
      <div className="col-md-3">
        <label className="form-label text-white">
          <FaSuitcaseRolling className="me-1" /> Number of Items
        </label>
        <input
          type="number"
          min="1"
          className="form-control"
          name="noOfItems"
          value={formData.noOfItems}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-3">
        <label className="form-label text-white">Item Size</label>
        <select
          className="form-select"
          name="itemSize"
          value={formData.itemSize}
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
            className="form-check-input"
            type="checkbox"
            name="isPickupServiceNeeded"
            checked={formData.isPickupServiceNeeded}
            onChange={handleChange}
            id="isPickupServiceNeeded"
          />
          <label
            className="form-check-label text-white"
            htmlFor="isPickupServiceNeeded"
          >
            Need Pickup / Drop-off Service
          </label>
        </div>
      </div>

      {/* Notes */}
      <div className="col-12">
        <label className="form-label text-white">Additional Notes</label>
        <textarea
          className="form-control"
          rows="3"
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* Image uploader */}
      <div className="col-12">
        <label className="form-label d-block mb-2 text-white">
          Bag / ID Photo
        </label>
        <div className="d-flex flex-wrap gap-3 align-items-center">
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
                className="btn-sm btn-danger position-absolute top-0 end-0 p-1 rounded-0"
                onClick={() => handleRemoveImage(idx)}
                style={{ border: "unset" }}
                aria-label="Remove image"
              >
                <FaTrashAlt color="#fa1905" />
              </button>
            </div>
          ))}

          {/* Add button */}
          <button
            type="button"
            className="btn-outline-light border-light d-flex flex-column justify-content-center align-items-center rounded-0"
            style={{ width: 90, height: 90 }}
            onClick={handleAddImage}
          >
            <FaPlusCircle size={32} />
            <span className="small">Add</span>
          </button>
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="d-none"
          onChange={handleImageChange}
        />
      </div>

      <div className="col-12 text-center mt-4">
        <button
          type="submit"
          className="btn btn-border-base mt-0 text-light border-light"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Booking...
            </>
          ) : (
            "Confirm Booking"
          )}
        </button>
      </div>
    </form>
  );
};

export default DropCustomerForm;
