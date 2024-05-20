// CartModal.js
import React from 'react';
import Modal from 'antd/lib/modal/Modal';
import List from 'antd/lib/list';
import { Button } from 'antd';
import { useCart } from '../CartContext';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const CartModal = ({ isOpen, onRequestClose }) => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
    onRequestClose(); // Optionally close the modal on checkout
    // Navigate to checkout page or handle checkout logic here
  };

  return (
    <Modal
    title="Το καλάθι σας"
    open={isOpen}
    onCancel={onRequestClose}
    footer={[
      
      <Button key="checkout" type="primary" onClick={handleCheckout}>Προχωρήστε στην Αγορά</Button>
    ]}
  >
      <List
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', borderRadius: '5px' }} />}
              title={item.name}
              description={`Τιμή: ${item.price}€`}
            />
            <div>
              <Button  shape="circle" icon={<MinusOutlined />} onClick={() => decreaseQuantity(item.id)} />
              <span style={{ margin: '0 10px' }}>{item.quantity}</span>
              <Button  shape="circle" icon={<PlusOutlined />} onClick={() => increaseQuantity(item.id)} />
            </div>
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default CartModal;
