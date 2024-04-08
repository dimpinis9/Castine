// CartModal.js
import React from 'react';
import '../assets/CartModal.css';
import Modal from 'react-modal';
import { useCart } from '../CartContext';

const CartModal = ({ isOpen, onRequestClose }) => {
  const { cartItems } = useCart();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Καλάθι"
    >
      <div className="modal-content">
        <h2>Το καλάθι σας</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span>
              <span>{item.price} €</span>
            </li>
          ))}
        </ul>
        <button onClick={onRequestClose}>Κλείσιμο</button>
      </div>
    </Modal>
  );
};

export default CartModal;
