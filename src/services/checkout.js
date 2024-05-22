// src/services/checkout.js
import api from "./WooCommerceClient";

const createOrder = async (orderData) => {
  console.log("Creating order with data:", orderData); // Log the order data
  try {
    const response = await api.post("orders", orderData);
    console.log("Order response:", response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    if (error.response) {
      console.error("Response data:", error.response.data); // Log the response data if available
      console.error("Response status:", error.response.status); // Log the response status if available
    }
    throw error;
  }
};

export default createOrder;
