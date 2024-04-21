// CartModal.js
import React from 'react';
import '../assets/CartModal.css';
import Modal from 'antd/lib/modal/Modal'; // Χρήση του Modal από Ant Design
import List from 'antd/lib/list';  // Χρήση του List από Ant Design
import { Button } from 'antd';    // Χρήση του Button από Ant Design
import { useCart } from '../CartContext';

const CartModal = ({ isOpen, onRequestClose }) => {
  const { cartItems } = useCart();

  return (
    <Modal
      title="Το καλάθι σας"
      open={isOpen} // Ενημέρωση από `visible` σε `open`
      onCancel={onRequestClose}
      footer={[
        <Button key="close" onClick={onRequestClose}>
          Κλείσιμο
        </Button>
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
              description={`Ποσότητα: ${item.quantity}`}
            />
            <div>{item.price} €</div>
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default CartModal;
