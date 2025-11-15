// File: PickupCustomerForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { fetchCustomersOrders, registerPickupOrder } from "../services/apiService";

const PickupCustomerForm = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isPickupServiceNeeded, setIsPickupServiceNeeded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingOrders, setIsFetchingOrders] = useState(false);
  const navigate = useNavigate();

  const handleFetchOrders = async () => {
    if (!mobileNumber || mobileNumber.length < 10) {
      alert("Please enter a valid mobile number");
      return;
    }

    setIsFetchingOrders(true);
    try {
      const response = await fetchCustomersOrders(mobileNumber);
      const result = await response.json();
      
      if (response.ok && result.data && result.data.length > 0) {
        setOrders(result.data);
      } else {
        alert("No orders found for this mobile number");
        setOrders([]);
        setSelectedOrder(null);
      }
    } catch (err) {
      console.error("❌ Error fetching orders:", err);
      alert("Error fetching orders: " + err.message);
      setOrders([]);
    } finally {
      setIsFetchingOrders(false);
    }
  };

  const getStatusInfo = (status) => {
    const statusMap = {
      'PENDING': {
        allowed: false,
        message: '⏳ This order is pending approval and has not arrived at our facility yet. Please wait for confirmation.',
        color: 'warning',
        icon: '⏳'
      },
      'ACCEPTED': {
        allowed: false,
        message: '✅ Your order has been accepted but has not arrived at our storage facility yet. Please wait until it arrives.',
        color: 'info',
        icon: '🚚'
      },
      'REJECTED': {
        allowed: false,
        message: '❌ This order has been rejected. Please contact customer support for more information.',
        color: 'danger',
        icon: '❌'
      },
      'ARRIVED': {
        allowed: true,
        message: '✨ Great! Your items have arrived and are safely stored. You can now request pickup.',
        color: 'success',
        icon: '✅'
      },
      'PICKUP_REQUESTED': {
        allowed: false,
        message: '📋 Pickup has already been requested for this order. Please wait for our team to contact you.',
        color: 'warning',
        icon: '📋'
      },
      'COMPLETE': {
        allowed: false,
        message: '✔️ This order is complete. Your items have already been picked up.',
        color: 'secondary',
        icon: '✔️'
      }
    };
    return statusMap[status] || {
      allowed: false,
      message: '⚠️ Unknown order status. Please contact customer support.',
      color: 'secondary',
      icon: '⚠️'
    };
  };

  const handleOrderSelect = (e) => {
    const orderId = e.target.value;
    const order = orders.find(o => o.id === parseInt(orderId));
    setSelectedOrder(order);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedOrder) {
      alert("Please select an order");
      return;
    }

    setIsLoading(true);
    try {
      const pickupData = {
        orderId: selectedOrder.id,
        mobileNumber,
        isPickupServiceNeeded,
      };

      const response = await registerPickupOrder(pickupData);
      const data = await response.json();

      if (response.ok) {
        console.log("✅ Pickup registered:", data);
        navigate("/thankyou");
      } else {
        throw new Error(data.message || "Failed to register pickup");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Error: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="row g-3 mt-3" onSubmit={handleSubmit}>
      {/* Step 1: Mobile Number Input */}
      <div className="col-12">
        <label className="form-label text-white">
          <FaPhone className="me-1" /> Mobile Number
        </label>
        <div className="input-group">
          <input
            type="tel"
            className="form-control"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
            required
            pattern="[0-9]{10}"
            title="Please enter a 10-digit mobile number"
          />
          <button
            type="button"
            className="btn btn-border-base text-light border-light"
            onClick={handleFetchOrders}
            disabled={isFetchingOrders || !mobileNumber}
            style={{ marginTop: 0 }}
          >
            {isFetchingOrders ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Fetching...
              </>
            ) : (
              "Fetch Orders"
            )}
          </button>
        </div>
      </div>

      {/* Step 2: Order Selection Dropdown */}
      {orders.length > 0 && (
        <>
          <div className="col-12 mt-3">
            <div className="alert" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '6px' }}>
              <p className="text-white mb-0">
                ✅ <strong>Found {orders.length} order{orders.length > 1 ? 's' : ''}</strong> associated with this mobile number
              </p>
            </div>
          </div>
          <div className="col-12">
            <label className="form-label text-white fw-bold mb-3">
              📋 Select Your Order to Schedule Pickup
            </label>
            <div className="position-relative">
              <select
                className="form-select form-select-lg"
                onChange={handleOrderSelect}
                value={selectedOrder?.id || ""}
                required
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <option value="" style={{ color: '#666' }}>🔍 Choose an order from the list below...</option>
                {orders.map((order) => (
                  <option key={order.id} value={order.id} style={{ padding: '10px' }}>
                    🆔 #{order.id} | 📍 {order.storage_location} | 📦 {order.no_of_items || 'N/A'} item(s) | 🔖 {order.order_status}
                  </option>
                ))}
              </select>
            </div>
            {!selectedOrder && (
              <small className="text-white-50 d-block mt-2">
                💡 Tip: Select an order to view its complete details below
              </small>
            )}
          </div>
        </>
      )}

      {/* Step 3: Display Selected Order Details */}
      {selectedOrder && (
        <>
          <div className="col-12">
            <div className="card text-white p-4" style={{ backgroundColor: 'rgba(148, 128, 128, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px' }}>
              <h5 className="mb-3 pb-2 text-white" style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.3)' }}>
                📦 Order Details
              </h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="mb-2">
                    <small className="text-white-50">Order ID</small>
                    <p className="mb-0 fw-bold">#{selectedOrder.id}</p>
                  </div>
                  <div className="mb-2">
                    <small className="text-white-50">Customer ID</small>
                    <p className="mb-0 fw-bold">{selectedOrder.customer_id}</p>
                  </div>
                  <div className="mb-2">
                    <small className="text-white-50">Storage Location</small>
                    <p className="mb-0 fw-bold">📍 {selectedOrder.storage_location}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-2">
                    <small className="text-white-50">Number of Items</small>
                    <p className="mb-0 fw-bold">{selectedOrder.no_of_items || 'N/A'} {selectedOrder.item_size ? `(${selectedOrder.item_size})` : ''}</p>
                  </div>
                  <div className="mb-2">
                    <small className="text-white-50">Pickup Date & Time</small>
                    <p className="mb-0 fw-bold">
                      {selectedOrder.pickup_date ? new Date(selectedOrder.pickup_date).toLocaleDateString() : 'N/A'} 
                      {selectedOrder.pickup_time ? ` at ${selectedOrder.pickup_time}` : ''}
                    </p>
                  </div>
                  <div className="mb-2">
                    <small className="text-white-50">Status</small>
                    <p className="mb-0">
                      <span className={`badge bg-${getStatusInfo(selectedOrder.order_status).color} me-2`}>
                        {selectedOrder.order_status}
                      </span>
                      <span className={`badge ${selectedOrder.payment_status === 'unpaid' ? 'bg-danger' : 'bg-success'}`}>
                        {selectedOrder.payment_status.toUpperCase()}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Status Info Message */}
          <div className="col-12">
            <div className={`alert alert-${getStatusInfo(selectedOrder.order_status).color}`} style={{ borderRadius: '8px', border: '2px solid rgba(255, 255, 255, 0.2)' }}>
              <div className="d-flex align-items-start">
                <div className="me-3" style={{ fontSize: '24px' }}>
                  {getStatusInfo(selectedOrder.order_status).icon}
                </div>
                <div>
                  <strong>Order Status Information</strong>
                  <p className="mb-0 mt-1">{getStatusInfo(selectedOrder.order_status).message}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Step 4: Pickup Service Checkbox */}
      {selectedOrder && getStatusInfo(selectedOrder.order_status).allowed && (
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={isPickupServiceNeeded}
              onChange={(e) => setIsPickupServiceNeeded(e.target.checked)}
              id="pickupServiceNeeded"
            />
            <label className="form-check-label text-white" htmlFor="pickupServiceNeeded">
              I need pickup service (we'll deliver to your location)
            </label>
          </div>
        </div>
      )}

      {/* Submit Button */}
      {selectedOrder && getStatusInfo(selectedOrder.order_status).allowed && (
        <div className="col-12 text-center mt-4">
          <button
            type="submit"
            className="btn btn-border-base mt-0 text-light border-light"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Processing...
              </>
            ) : (
              "Confirm Pickup"
            )}
          </button>
        </div>
      )}
    </form>
  );
};

export default PickupCustomerForm;
