import axios from "axios";

const createOrder = async (orderDetails) => {
  try {
    const response = await axios.post(
      "https://www.castine.gr//wp-json/wc/v3/orders",
      orderDetails,
      {
        auth: {
          username: "ck_0fc3e2cee57f349f12e6a8e4fcb1a0a4e84b2356",
          password: "cs_09856f1043e938c0cda5f7319c078f8c58fab8a5",
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export default createOrder;
