import React, { useRef, useState } from "react";
import {
  FaPlusCircle,
  FaTrashAlt,
  FaCalendarAlt,
  FaClock,
  FaSuitcaseRolling,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

/**
 * ENV VARIABLES (set these in .env or vite env):
 *  VITE_CLOUD_NAME            = your_cloudinary_cloud_name
 *  VITE_UPLOAD_PRESET         = unsigned_upload_preset
 *  VITE_EMAILJS_SERVICE_ID    = your_emailjs_service_id
 *  VITE_EMAILJS_TEMPLATE_ID   = your_emailjs_template_id
 *  VITE_EMAILJS_PUBLIC_KEY    = your_emailjs_public_key
 */
const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// initialize EmailJS once (safe in module scope)
emailjs.init(EMAILJS_PUBLIC_KEY);

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
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddImage = () => fileInputRef.current?.click();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleRemoveImage = (idx) => setImages((prev) => prev.filter((_, i) => i !== idx));

  /** Upload a single image to Cloudinary unsigned endpoint */
  const uploadImage = async (file) => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: "POST",
      body: form,
    });
    if (!res.ok) throw new Error("Image upload failed");
    const data = await res.json();
    return data.secure_url; // return the uploaded image URL
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Upload all selected images in parallel
      const imageUrls = await Promise.all(images.map((img) => uploadImage(img.file)));

      // 2. Prepare parameters for EmailJS template
      const templateParams = {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        drop_off: `${formData.dropOffDate} ${formData.dropOffTime}`,
        pick_up: `${formData.pickUpDate} ${formData.pickUpTime}`,
        bag_count: formData.bags,
        bag_size: formData.bagSize,
        pickup_drop: formData.pickupDrop ? "Yes" : "No",
        notes: formData.notes,
        image_urls: imageUrls.join(", \n"),
      };

      // 3. Send email via EmailJS
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      alert("Booking submitted successfully! We will contact you shortly.");
      // clear form
      setFormData({
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
      setImages([]);
    } catch (err) {
      console.error(err);
      alert("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="book-storage-form py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">
          Book Your <span className="text-primary">Storage</span>
        </h2>

        <form className="row g-3" onSubmit={handleSubmit}>
          {/* Personal details */}
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Storage Location</label>
            <input type="text" className="form-control" name="location" placeholder="e.g., Times Square NYC" value={formData.location} onChange={handleChange} required />
          </div>

          {/* Date & time */}
          <div className="col-md-3">
            <label className="form-label"><FaCalendarAlt className="me-1" /> Drop-off Date</label>
            <input type="date" className="form-control" name="dropOffDate" value={formData.dropOffDate} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label className="form-label"><FaClock className="me-1" /> Drop-off Time</label>
            <input type="time" className="form-control" name="dropOffTime" value={formData.dropOffTime} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label className="form-label"><FaCalendarAlt className="me-1" /> Pickup Date</label>
            <input type="date" className="form-control" name="pickUpDate" value={formData.pickUpDate} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label className="form-label"><FaClock className="me-1" /> Pickup Time</label>
            <input type="time" className="form-control" name="pickUpTime" value={formData.pickUpTime} onChange={handleChange} required />
          </div>

          {/* Bag details */}
          <div className="col-md-3">
            <label className="form-label"><FaSuitcaseRolling className="me-1" /> Number of Bags</label>
            <input type="number" min="1" className="form-control" name="bags" value={formData.bags} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label className="form-label">Bag Size</label>
            <select className="form-select" name="bagSize" value={formData.bagSize} onChange={handleChange}>
              <option>Small</option>
              <option>Regular</option>
              <option>Large</option>
              <option>Oversized</option>
            </select>
          </div>
          <div className="col-md-3 d-flex align-items-center">
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" name="pickupDrop" checked={formData.pickupDrop} onChange={handleChange} id="pickupDrop" />
              <label className="form-check-label" htmlFor="pickupDrop">Need Pickup / Drop-off Service</label>
            </div>
          </div>

          {/* Notes */}
          <div className="col-12">
            <label className="form-label">Additional Notes</label>
            <textarea className="form-control" rows="3" name="notes" value={formData.notes} onChange={handleChange}></textarea>
          </div>

          {/* Image uploader */}
          <div className="col-12">
            <label className="form-label d-block mb-2">Bag / ID Photos</label>
            <div className="d-flex flex-wrap gap-3 align-items-center">
              {/* Thumbnails */}
              {images.map((img, idx) => (
                <div key={idx} className="position-relative border rounded overflow-hidden" style={{ width: 90, height: 90 }}>
                  <img src={img.preview} alt="preview" className="w-100 h-100 object-fit-cover" />
                  <button type="button" className="btn btn-sm btn-danger position-absolute top-0 end-0" onClick={() => handleRemoveImage(idx)} aria-label="Remove image">
                    <FaTrashAlt />
                  </button>
                </div>
              ))}
              {/* Plus button */}
              <button type="button" className="btn btn-outline-primary d-flex flex-column justify-content-center align-items-center" style={{ width: 90, height: 90 }} onClick={handleAddImage}>
                <FaPlusCircle size={32} />
                <span className="small">Add</span>
              </button>
            </div>
            {/* Hidden file input */}
            <input type="file" accept="image/*" multiple ref={fileInputRef} className="d-none" onChange={handleImageChange} />
          </div>

          <div className="col-12 text-center mt-4">
            <button type="submit" className="btn btn-primary px-5 py-2" disabled={loading}>
              {loading ? "Submitting..." : "Confirm Booking"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookStorageForm;
