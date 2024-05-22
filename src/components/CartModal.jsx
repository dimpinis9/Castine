// src/components/CartModal.js
import React from "react";
import Modal from "antd/lib/modal/Modal";
import List from "antd/lib/list";
import { Button } from "antd";
import { useCart } from "../CartContext";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import createOrder from "../services/checkout";
import "../assets/CartModal.css";

const CartModal = ({ isOpen, onRequestClose }) => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const handleCheckout = async () => {
    console.log("Proceeding to checkout...");
    console.log("Cart items:", cartItems);

    const orderDetails = {
      payment_method: "bacs", // Παράδειγμα μεθόδου πληρωμής
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
      billing: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
        email: "john.doe@example.com",
        phone: "(555) 555-5555",
      },
      shipping: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
      },
      line_items: cartItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: "10.00",
        },
      ],
    };

    try {
      const order = await createOrder(orderDetails);
      console.log("Order created successfully:", order);
      // Αν θέλετε να κλείσετε το modal μετά την ολοκλήρωση του checkout
      onRequestClose();
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <Modal
      title="Το καλάθι σας"
      open={isOpen}
      onCancel={onRequestClose}
      footer={[
        <Button
          key="checkout"
          type="primary"
          onClick={handleCheckout}
          className="checkout-button" // Προσθέτουμε μια κλάση για προσαρμοσμένα στυλ
        >
          Προχωρήστε στην Αγορά
        </Button>,
      ]}
    >
      <List
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "70px", height: "70px", borderRadius: "5px" }}
                />
              }
              title={item.name}
              description={`Τιμή: ${item.price}€`}
            />
            <div>
              <Button
                shape="circle"
                icon={<MinusOutlined />}
                onClick={() => decreaseQuantity(item.id)}
              />
              <span style={{ margin: "0 10px" }}>{item.quantity}</span>
              <Button
                shape="circle"
                icon={<PlusOutlined />}
                onClick={() => increaseQuantity(item.id)}
              />
            </div>
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default CartModal;
