export function getApiBaseUrl() {
  return process.env.REACT_APP_BACKEND_API_BASE_URL || "https://everywhere-backend.vercel.app/api";
}

export function registerDropOrder(formData) {
    console.log("registerDropOrder called with data:", formData);
    const apiUrl = getApiBaseUrl() + "/customer/registerDropOrder";
    console.log(apiUrl);
    return fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });
}

export function fetchCustomersOrders(mobileNumber) {
    const apiUrl = getApiBaseUrl() + "/customer/getOrdersByMobileNo";
    return fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ mobileNumber })
    });
}

export function registerPickupOrder(formData) {
    const apiUrl = getApiBaseUrl() + "/customer/registerPickupOrder";
    return fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });
}
